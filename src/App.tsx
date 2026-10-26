import { motion } from 'framer-motion'
import FadingVideo from './components/FadingVideo'
import BlurText from './components/BlurText'
import {
  ArrowUpRight,
  Play,
  ClockIcon,
  GlobeIcon,
  ImageIcon,
  MovieIcon,
  LightbulbIcon,
} from './components/icons'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4'
const CAPABILITIES_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4'

const fadeUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

const NAV_LINKS = ['Work', 'Studio', 'Services', 'Journal', 'Contact']
const LOGOS = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']

function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
      <div className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full">
        <span className="font-heading text-2xl italic">a</span>
      </div>
      <div className="liquid-glass hidden items-center rounded-full px-1.5 py-1.5 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="px-3 py-2 font-body text-sm font-medium text-white/90"
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="ml-1 flex items-center gap-1 rounded-full bg-white px-4 py-2 font-body text-sm font-medium text-black"
        >
          Start a Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="h-12 w-12" />
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 z-0 -translate-x-1/2 object-cover object-top"
        style={{ width: '120%', height: '120%' }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 pt-24 text-center">
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="liquid-glass flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4"
          >
            <span className="rounded-full bg-white px-2.5 py-0.5 font-body text-xs font-semibold text-black">
              New
            </span>
            <span className="font-body text-sm text-white/90">
              Booking Q3 2026 engagements -- limited capacity
            </span>
          </motion.div>

          <BlurText
            text="Crafted Digital Experiences Built to Outlast Trends"
            className="mt-6 max-w-3xl text-6xl font-heading italic leading-[0.8] tracking-[-4px] text-white md:text-7xl lg:text-[5.5rem]"
          />

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.8 }}
            className="mt-4 max-w-2xl font-body text-sm font-light leading-tight text-white md:text-base"
          >
            We are a small studio of designers and engineers shaping brand-defining websites for
            ambitious companies. Precise typography, cinematic motion, and code you can be proud
            of.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.1 }}
            className="mt-6 flex items-center gap-6"
          >
            <a
              href="#"
              className="liquid-glass-strong flex items-center gap-1.5 rounded-full px-5 py-2.5 font-body text-sm font-medium text-white"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 font-body text-sm font-medium text-white"
            >
              <Play className="h-4 w-4" />
              Watch Showreel
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.3 }}
            className="mt-8 flex gap-4"
          >
            <div className="liquid-glass w-[220px] max-w-[44vw] rounded-[1.25rem] p-5 text-left">
              <ClockIcon className="h-6 w-6 text-white" />
              <div className="mt-4 font-heading text-4xl italic leading-none tracking-[-1px]">
                6 Weeks
              </div>
              <p className="mt-2 font-body text-sm font-light text-white/80">
                Average End-to-End Launch Time
              </p>
            </div>
            <div className="liquid-glass w-[220px] max-w-[44vw] rounded-[1.25rem] p-5 text-left">
              <GlobeIcon className="h-6 w-6 text-white" />
              <div className="mt-4 font-heading text-4xl italic leading-none tracking-[-1px]">
                140+
              </div>
              <p className="mt-2 font-body text-sm font-light text-white/80">
                Brands Shipped Across Four Continents
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-5 py-2">
            <span className="font-body text-sm text-white/90">
              Trusted by founders, operators, and creative directors worldwide
            </span>
          </div>
          <div className="flex items-center gap-12 md:gap-16">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="font-heading text-2xl italic tracking-tight text-white md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const CAPABILITIES = [
  {
    title: 'Design',
    Icon: ImageIcon,
    tags: ['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'],
    body: 'We shape identities and interfaces that feel unmistakably yours -- typographic systems, component libraries, and art-directed pages that scale without losing soul.',
  },
  {
    title: 'Engineering',
    Icon: MovieIcon,
    tags: ['React', 'Next.js', 'Headless CMS', 'Edge-Ready'],
    body: 'Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented -- with code your team will enjoy extending long after launch.',
  },
  {
    title: 'Growth',
    Icon: LightbulbIcon,
    tags: ['SEO', 'Analytics', 'A/B Testing', 'Retention'],
    body: 'Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.',
  },
]

function Capabilities() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <FadingVideo
        src={CAPABILITIES_VIDEO}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex min-h-screen flex-col px-8 pb-10 pt-24 md:px-16 lg:px-20">
        <header className="mb-auto">
          <p className="mb-6 font-body text-sm text-white/80">{'// Capabilities'}</p>
          <h2 className="font-heading text-6xl italic leading-[0.9] tracking-[-3px] text-white md:text-7xl lg:text-[6rem]">
            Studio craft,
            <br />
            end to end
          </h2>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CAPABILITIES.map(({ title, Icon, tags, body }) => (
            <div
              key={title}
              className="liquid-glass flex min-h-[360px] flex-col rounded-[1.25rem] p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.75rem]">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass whitespace-nowrap rounded-full px-3 py-1 font-body text-[11px] text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <h3 className="font-heading text-3xl italic leading-none tracking-[-1px] text-white md:text-4xl">
                {title}
              </h3>
              <p className="mt-3 max-w-[32ch] font-body text-sm font-light leading-snug text-white/90">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <main className="bg-black font-body text-white">
      <Navbar />
      <Hero />
      <Capabilities />
    </main>
  )
}
