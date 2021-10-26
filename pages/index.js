import Head from 'next/head'

import React from 'react'

import { motion } from 'framer-motion'

import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import AboutMe from '../components/AboutMe'
import Cv from '../components/Cv'
import Project from '../components/Project'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>MyPortfolio</title>
        <meta name='description' content='Portfolio by Wassim Jniouen' />
        <link rel='icon' href='/img/logoWj-onglet.png' />
      </Head>

      <NavBar />

      <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 2, bounce: 0 }}>
        <Landing />
      </motion.div>

      <main id='mainInfo'>
        <AboutMe />
        <Cv />
        <Project />
      </main>
      
    </div>
  )
}
