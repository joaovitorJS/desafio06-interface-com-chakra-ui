import {
  Grid,
  Flex,
  Image,
  Stack,
  Text
} from "@chakra-ui/react" 

interface City {
  id: number;
  name: string;
  country: string;
  thumb: string;
  flag: string;
}

interface CitiesProps {
  cities: City[];
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Grid 
      templateColumns="repeat(auto-fill, 256px)" 
      gap={{base: "20px", md: 45}} 
      mt={["6","10"]} 
      justifyContent="center"
    >
      {cities.map(city => (
        <Flex
          border="1px solid rgba(255, 186, 8, 0.5)"
          borderRadius="4"
          flexDir="column"
          bg="white"
          key={city.id}
        >
          <Image
            src={city.thumb}
            alt={city.name}
            h="44"
            w="100%"
            objectFit="fill"
            borderTopRadius="4"
          />

          <Flex align="center" justifyContent="space-between" px="6" mt="5" mb="6">
            <Stack>
              <Text
                fontFamily="Barlow"
                fontWeight="semibold"
                fontSize="xl"
              >
                {city.name}
              </Text>
              <Text
                fontFamily="Barlow"
                fontWeight="medium"
                fontSize="md"
                color="gray.400"
              >
                {city.country}
              </Text>
            </Stack>
          
            <Image
              src={city.flag}
              alt={city.country}
              h="8"
              w="8"
              objectFit="fill"
              borderRadius="full"
            />
          </Flex>
        </Flex>
      ))}
    </Grid>
  );
}