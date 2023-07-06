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
  
  let contents: JSX.Element[] = []
  
  let rust = [
    <>
      <h1>1. 러스트</h1> <hr />
      <h2>엄청난 내용1</h2>
    </>,
    <>
      <h1>1. 러스트</h1> <hr />
      <h2>엄청난 내용2</h2>
    </>,
    <>
      <h1>1. 러스트</h1> <hr />
      <h2>엄청난 내용3</h2>
    </>
  ]

  let python = [
    <>
      <h1>1. 파이썬</h1> <hr />
      <h2>엄청난 내용1</h2>
    </>,
    <>
      <h1>1. 파이썬</h1> <hr />
      <h2>엄청난 내용2</h2>
    </>,
    <>
      <h1>1. 파이썬</h1> <hr />
      <h2>엄청난 내용3</h2>
    </>
  ]

  switch (router.query.name){
    case "rust": contents = [...rust]; break;
    case "python": contents = [...python]; break;
  }

  return (
    <>
      <title>{router.query.name}</title>
      <Header name={router.query.name}/>
      <main style={{padding: "100px"}}>
        {contents[Number(id)]}
      </main>
    </>
  )
}







