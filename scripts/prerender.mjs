import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const root = process.cwd()
const vite = await createServer({
  configFile: resolve(root, 'vite.config.js'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const [{ default: App }, { default: store }] = await Promise.all([
    vite.ssrLoadModule('/src/App.jsx'),
    vite.ssrLoadModule('/src/Redux/store.js'),
  ])
  const appHtml = renderToString(
    React.createElement(
      Provider,
      { store },
      React.createElement(App),
    ),
  )
  const indexPath = resolve(root, 'dist/index.html')
  const indexHtml = await readFile(indexPath, 'utf8')

  if (!indexHtml.includes('<div id="root"></div>')) {
    throw new Error('Could not find the empty root in dist/index.html')
  }

  await writeFile(
    indexPath,
    indexHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
  )
} finally {
  await vite.close()
}
