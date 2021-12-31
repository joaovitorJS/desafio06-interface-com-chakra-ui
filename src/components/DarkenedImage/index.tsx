import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DarkenedImageProps {
  children: ReactNode;
}

export function DarkenedImage ({children}: DarkenedImageProps) {
  return (
    <Flex
      width="100%"
      height="100%"
      zIndex={10}
      display="inline-block"
      position="relative"
      _after={{
        content: `" "`,
        position: "absolute",
        top: "0",
        right: "0",
        backgroundColor: "rgba(28, 20, 1, 0.35)",
        width: "100%",
        height: "100%"
      }}
      overflow='hidden'
    >
      {children}
    </Flex>
  );
}