import React, { useState } from 'react'
import Card from '../general/Card'
import '../../App.css';
import {TheosPlayer} from "@aka_theos/react-hls-player";
import Header from '../general/Header';
import Footer from '../general/Footer';

export default function Main() {

    const [cards, setcards] = useState([{
        title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        rating: "5",
        cost:"$3.12",
        link_to: "#",
        link_title: "open me"
    }])

  return (
    <div>
       
      <Header />
      <TheosPlayer
    src="https://mangavost.org/content/stream/boevoj_kontinent_2_neprevzojdyonnyj_klan_tan/001_25423/hls/index.m3u8"
    autoPlay={false}
  />
        {cards.map((el) => {
            return <Card {...el} />
        })
        }
      <Footer />

    </div>
  )
}
