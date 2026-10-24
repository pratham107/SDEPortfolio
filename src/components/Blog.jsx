import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const profile = {
  name: "Prathmesh Bhopale",
  headline: "Software Engineer",
  avatar: "https://lh3.googleusercontent.com/a/ACg8ocJwkylBbJpz_SUuWBFqT3XmGAKFdLK9i8nyr4R4y7UcK-tbrxHw=s120-c",
}

const posts = [
  {
    type: "linkedin",
    title:
      "Have you ever wondered why distributed systems can't guarantee both Availability and Consistency during a network partition?",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQGz93y05D2qfg/feedshare-image-high-res/B4DaFDC4r.HoAU-/0/1792126192618?e=1794441600&v=beta&t=CnZIoTGiVnks6z91uSWMuu3tG3LUf75kpH6J-scQKoU",
    link: "https://lnkd.in/p/gVTnqtYx",
  },
  {
    type: "linkedin",
    title: "How Do Payment Systems Prevent Duplicate Payments?",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQHQQis6VMzw0w/feedshare-shrink_800/B4DZ_8t3BmI8Ak-/0/1786651308453?e=1794441600&v=beta&t=q_L7yB-B0pR8bESd57D0cRFV_WYfTBQs76CpDnxUquA",
    link: "https://lnkd.in/p/gT2YnWwh",
  },
  {
    type: "linkedin",
    title: "Why gRPC is the Better Choice for Microservices than REST",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQHQQis6VMzw0w/feedshare-shrink_800/B4DZ_8t3BmI8Ak-/0/1786651308453?e=1794441600&v=beta&t=q_L7yB-B0pR8bESd57D0cRFV_WYfTBQs76CpDnxUquA",
    link: "https://lnkd.in/p/gPFNxknM",
  },
  {
    type: "linkedin",
    title: "Understanding Indexing in Databases",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGpVxYEWEzxGg/feedshare-shrink_1280/B56ZtlEmyvJIAs-/0/1766927265852?e=1794441600&v=beta&t=9WxheblnIRQUERLo-uu214WTdyznoO66NMQfcgsi-Hw",
    link: "https://lnkd.in/p/gj4kcacT",
  },
]

const SLIDE_MS = 5000

// eslint-disable-next-line react/prop-types
const Avatar = ({ isLight }) => {
  const [failed, setFailed] = useState(false)
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className={`h-12 w-12 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold ${
          isLight ? "bg-blue-100 text-blue-800" : "bg-blue-900 text-blue-100"
        }`}
      >
        {initials}
      </span>
    )
  }

  return (
    <img
      src={profile.avatar}
      alt={`${profile.name} profile picture`}
      width="48"
      height="48"
      onError={() => setFailed(true)}
      loading="lazy"
      className="h-12 w-12 shrink-0 rounded-full object-cover"
    />
  )
}

// eslint-disable-next-line react/prop-types
const Blog = ({ theme }) => {
  const isLight = theme === "light"
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = posts.length
  const post = posts[active]

  // Auto-advance; stops on hover/focus and for reduced-motion users
  useEffect(() => {
    if (paused || reduceMotion || total < 2) return
    const id = setInterval(() => setActive((a) => (a + 1) % total), SLIDE_MS)
    return () => clearInterval(id)
  }, [paused, reduceMotion, total])

  const linkLabel = post.type === "linkedin" ? "View post" : "Read blog"

  return (
    <section
      className="p-6"
      aria-labelledby="blog-heading"
      aria-roledescription="carousel"
      aria-label="Blogs and posts"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h2
        id="blog-heading"
        className={`text-xl font-bold mb-6 hover:underline ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        Blogs
      </h2>

      <div className="mx-auto max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -24 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            <Card
              className={`rounded-xl shadow-md p-5 min-h-[280px] flex flex-col ${
                isLight
                  ? "bg-white text-black border-gray-300"
                  : "bg-neutral-900 text-white border-white/10"
              }`}
            >
              {/* Profile row */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar isLight={isLight} />
                <div className="min-w-0">
                  <p className="font-semibold leading-tight">{profile.name}</p>
                  <p
                    className={`text-xs ${
                      isLight ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {profile.headline}{post.date && ` · ${post.date}`}
                  </p>
                </div>
                {post.type === "linkedin" && (
                  <FaLinkedin
                    className="ml-auto text-[#0A66C2] shrink-0"
                    size={22}
                    aria-label="LinkedIn post"
                  />
                )}
              </div>

              {/* Post body */}
              {post.image && (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open LinkedIn post: ${post.title}`}
                  className="mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="max-h-64 w-full object-cover"
                  />
                </a>
              )}
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              {post.description && (
                <p
                  className={`text-sm leading-relaxed ${
                    isLight ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {post.description}
                </p>
              )}

              {/* Action */}
              <div className="mt-auto pt-4 border-t border-gray-700/20">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    isLight
                      ? "text-[#0A66C2] hover:text-blue-900"
                      : "text-blue-400 hover:text-blue-300"
                  }`}
                >
                  <FaExternalLinkAlt /> {linkLabel}
                </a>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        {total > 1 && (
          <div className="flex justify-center gap-2 mt-5">
            {posts.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${p.title}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-[#0A66C2]"
                    : "w-2 bg-gray-400/60 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog