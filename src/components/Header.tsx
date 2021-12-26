import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      px="6"
      align="center"
      justify="center"
      h={100}
    >
      <Img
        src="/logo.svg"
        alt="Logo Worldtrip"
      />
    </Flex>
  );
}