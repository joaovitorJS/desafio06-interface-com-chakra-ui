import { Flex, Img, Icon} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { MdKeyboardArrowLeft } from "react-icons/md";

interface HeaderProps {
  isBackButton?: boolean;
}

export function Header({isBackButton = false}: HeaderProps) {
  const router = useRouter();
  
  function handleBackToHome () {
    router.push("/");
  }
  
  return (
    <Flex
      as="nav"
      w="100%"
      px="6"
      align="center"
      justify="center"
      h={100}
      position="relative"
    > 
      { isBackButton &&
        <Icon
          as={MdKeyboardArrowLeft}
          color="gray.500"
          w="8"
          h="8" 
          position="absolute"
          left={{base: "4", md:"24", lg: "140px"}}
          cursor="pointer"
          onClick={handleBackToHome}
        />
      }

      <Img
        src="/logo.svg"
        alt="Logo Worldtrip"
      />
    </Flex>
  );
}