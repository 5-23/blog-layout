import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { color } from "framer-motion";
export default function Item(props: {name: string, d: string}){
    return(
        <LinkBox
          borderRadius="15px"
          overflow={"hidden"}
          minW={300}
          minH={180}
          transition={"all .3s"}
          boxShadow="0 0 20px #ddd"

          _hover={{
            transform: "translateY(-3px)",
            boxShadow: "0 0 20px #aaa"
          }}
        >
          <LinkOverlay
            color="#181818"
            textDecoration="none"
            href={`${props.name?.toLowerCase()}/0`}
            
          >
            <Box
              bgImage={`/blog/${props.name?.toLowerCase()}.png`}
              w={"100%"}
              h={"50%"}
              bgColor={"#ddd"}
              bgSize={"auto 180px"}
              bgPos={"50% 50%"}
              bgRepeat={"no-repeat"}
            ></Box>
            <Box
              p={10}
              fontSize={20}
              fontWeight={900}
              letterSpacing={3}
            >{props.name}</Box>

            <Box
              pl={10}
            >{props.d}</Box>
          </LinkOverlay>
        </LinkBox>
    )
}
