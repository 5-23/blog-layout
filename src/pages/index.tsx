"use client"
import Image from 'next/image'
import Header from './header';
import { RefObject, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Item from './item';
export default function Home() {
  return (
    <>
      <Header name="/"/>
      <Flex
        padding={100}
        flexDirection={'column'}
        alignItems={'center'}
        gap={20}
      >
        <Image
          src="/profile.png"
          width={250}
          height={250}
          alt='profile'
          style={{borderRadius: "100%"}}
        ></Image>
        <Box
          fontSize={"4vh"}
          fontWeight={900}
        >xxxx의 블로그</Box>
      </Flex>
      <Flex
        gap={16}
        p="0 10vw"
        justifyContent="center"
        flexWrap={"wrap"}
      >
        
        <Item name="Rust" d="Rust The Programming Language"/>
        <Item name="Python" d="Easy Programming Language"/>
          
      </Flex>
    </>
  )
}
