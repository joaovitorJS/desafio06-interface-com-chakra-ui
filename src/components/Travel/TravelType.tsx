import { Flex, Text, Image } from "@chakra-ui/react";
import { ReactElement } from "react";

interface TravelTypeProps {
  name: string;
  src: string;
}

export function TravelType({name, src}: TravelTypeProps) {
  return (
    <Flex 
      flexDir="column"
      align="center"
    >
      <Image 
        src={src} 
        alt={name}
        w={85}
        h={85}
        mb="6"
      />
      <Text
        fontWeight="semibold"
        fontSize={24}
      >
        {name}
      </Text>
    </Flex>
  );
}