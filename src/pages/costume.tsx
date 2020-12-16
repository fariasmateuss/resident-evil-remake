import React, { useState } from 'react'

import Head from 'next/head'

import Section from '../components/Section'
import Option from '../components/Option'

import { Wrapper } from '../styles/pages/Costume'

import jacket from '../assets/jacket.jpg'
import classicJacket from '../assets/classic-jacket.jpg'
import tankTop from '../assets/tank-top.jpg'
import classicTankTop from '../assets/classic-tank-top.jpg'
import noir from '../assets/noir.jpg'
import military from '../assets/military.jpg'
import elzaWalker from '../assets/elza-walker.jpg'

const Costume: React.FC = () => {
  const [costume, setCostume] = useState(jacket)

  return (
    <Wrapper>
      <Head>
        <title>Costume</title>
      </Head>

      <Section title="Costume" />

      <Option changeCostume={() => setCostume(jacket)} title="Jacket" />
      <Option
        changeCostume={() => setCostume(classicJacket)}
        title="Classic Jacket"
      />
      <Option changeCostume={() => setCostume(tankTop)} title="Tank Top" />
      <Option
        changeCostume={() => setCostume(classicTankTop)}
        title="Classic Tank Top"
      />
      <Option changeCostume={() => setCostume(noir)} title="Noir" />
      <Option changeCostume={() => setCostume(military)} title="Military" />
      <Option
        changeCostume={() => setCostume(elzaWalker)}
        title="Elza Walker"
      />

      <img src={costume} alt="Costume" />
    </Wrapper>
  )
}

export default Costume
