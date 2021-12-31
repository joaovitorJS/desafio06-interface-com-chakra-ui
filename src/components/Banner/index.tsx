import { 
  Box, 
  Flex, 
  Stack, 
  Text, 
  useBreakpointValue
} from "@chakra-ui/react";


export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
        px={{
          base: '24px',
          sm: '50px',
          md: '50px',
          lg: '50px',
          xl: '100px'
        }}
        mx="auto"
      >

        <Flex
          height={335}
          flexDir="column"
          pt={{
            base: "0", 
            md: "20"
          }}
          justifyContent={{
            base: 'center', 
            md: 'normal'
          }}
        >
          <Stack spacing="5">
            <Text 
              as="h2" 
              color="white"
              fontWeight="medium"
              fontSize={{
                base: 30,
                sm: 34, 
                md: 36
              }}
              textAlign={{
                base: "center", 
                lg: "left"
              }}
            >
              5 Continentes, <br/> infinitas possibilidades.
            </Text>
            <Text 
              color="gray.100"
              fontSize={20}
              w={{
                base: '100%', 
                lg: '524px'
              }}
              textAlign={{
                base: "center", 
                lg: "left"
              }}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
        </Flex>

        { isWideVersion &&
          <Box 
            backgroundImage="url(/images/airplane.png)"
            backgroundSize='contain'
            backgroundRepeat="no-repeat"
            w={{
              base: '317px', 
              lg: '367px', 
              xl: '417px'
            }}
            h={{
              base: '217px', 
              xl: '271px'
            }}
            position="absolute"
            top={78}
            right={{
              base: '25px',
              xl: '140px'
            }}
            transform="rotate(4deg)"
          />
        }
      </Box>
    </Box>
  );
}