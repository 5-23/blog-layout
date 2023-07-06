"use client"
import Image from 'next/image'
import Header from '../header';
import { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { stringify } from 'querystring';

export default function App() {
  const router: NextRouter = useRouter();
  let [id, id_change] = useState<string | string[] | undefined>("");
  useEffect(() =>{
    id_change(router.query.id)
  })

  let content = <></>
  let rust = <>
    <h1>1. 러스트</h1> <hr />
    <h2>엄청난 내용1</h2>
  </>

  let python = <>
    <h1>1. 파이썬</h1> <hr />
    <h2>엄청난 내용1</h2>
  </>

  switch (router.query.name?.toLocaleString()){
    case "rust": content = rust; break;
    case "python": content = python; break;
  }

  return (
    <>
      <head>
        <title>{router.query.name?.toLocaleString()}</title>
        <meta property="og:title" content="The Blog"/>
        <meta property="og:site_name" content={`${router.query.name}`}/>
        <meta property="og:image.pngdescription" content="The Blog"/>
        {/* <meta property="og:url" content="https://5-23.tk/"/> */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:image" content={`/blog/${router.query.name}.png`}/>
        <meta property="og:image:alt" content="Blog Preview Image"/>
        <meta property="og:image:width" content="2048"/>
        <meta property="og:image:height" content="1170"/>

        <meta name="theme-color" content="#7300ff"/>
        <meta name="msapplication-TileColor" content="#7300ff"/>
        <meta name="msapplication-navbutton-color" content="#7300ff"/>
      </head>

      <Header name={router.query.name}/>
      <main style={{padding: "100px"}}>
        {content}
      </main>
    </>
  )
}







