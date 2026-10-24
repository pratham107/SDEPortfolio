import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store'

const app = (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

const root = document.getElementById('root')
if (import.meta.env.PROD) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
