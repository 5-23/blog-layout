"use client"
import Image from 'next/image'
import Header from './header';
import { RefObject, useRef } from 'react';

export default function Home() {
  return (
    <>
      <Header/>
      <main style={{padding: "100px"}}>
        <h1>1. 제목</h1> <hr />
        <h2>엄청난 내용</h2>
      </main>
    </>
  )
}
