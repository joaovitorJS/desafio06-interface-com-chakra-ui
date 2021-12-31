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
    <Grid templateColumns="repeat(auto-fill, 256px)" gap={45} mt="10">
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
            h={{base: "44"}}
            w="100%"
            objectFit="fill"
            borderTopRadius="4"
          />

          <Flex align="center" justifyContent="space-between" px="6" mt={{base: "5"}} mb={{base: "6"}}>
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