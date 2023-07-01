"use client"
import Image from 'next/image'
import Header from './header';
import { RefObject, useRef } from 'react';
export default function Home() {
  let contents = [
    <>
      <h1>1. 제목</h1> <hr />
      <h2>엄청난 내용</h2>
    </>
    ,


  ]
  return (
    <>
      <Header/>
      <main style={{padding: "100px"}}>
        {contents[0]}
      </main>
    </>
  )
}
