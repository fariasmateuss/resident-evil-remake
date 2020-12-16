import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import Section from '../components/Section'
import Option from '../components/Option'

import { Wrapper } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <title>Getting started</title>
      </Head>

      <Section title="Choose an option to start" />

      <Link href="/costume">
        <a>
          <Option title="Story" />
        </a>
      </Link>

      <Option title="Online Story" />
      <Option title="Options" />
      <Option title="Exit" />
    </Wrapper>
  )
}

export default Home
