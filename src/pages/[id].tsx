"use client"
import Image from 'next/image'
import Header from './header';
import { useEffect, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { stringify } from 'querystring';

export default function App() {
  const router: NextRouter = useRouter();
  let [id, id_change] = useState<string | string[] | undefined>("");
  useEffect(() =>{

    id_change(router.query.id)
  })
  
  let contents: JSX.Element[] = [
    <>
      <h1>1. 제목</h1> <hr />
      <h2>엄청난 내용</h2>
    </>
  ]

  return (
    <>
      <Header/>
      <main style={{padding: "100px"}}>
        {contents[Number(id)]}
      </main>
    </>
  )
}







