import { 
  Box, 
  Flex, 
  Stack, 
  Text, 
} from "@chakra-ui/react";


export function Banner() {

  return (
    <Box
      w="100%"
      h={335}
      backgroundImage="url(/images/background.png)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"   
    >
      <Box 
        h={335}
        maxW={1440}
        position="relative"
        px={100}
        mx="auto"
      >

        <Flex
          flexDir="column"
          pt="20"
        >
          <Stack spacing="5">
          <Text 
              as="h2" 
              color="white"
              fontWeight="medium"
              fontSize={36}
            >5 Continentes, <br/> infinitas possibilidades.</Text>
            <Text 
              color="gray.100"
              fontSize={20}
              w={524}
            >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Stack>
        </Flex>

        <Box 
          backgroundImage="url(/images/airplane.png)"
          w={417}
          h={271}
          position="absolute"
          top={78}
          right={140}
          transform="rotate(4deg)"
        />
      </Box>
    </Box>
  );
}