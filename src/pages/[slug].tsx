import { Box, Text, Image, Flex, Grid, useBreakpointValue } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Cities } from '../components/Cities';
import { DarkenedImage } from '../components/DarkenedImage';
import { Header } from '../components/Header';
import { Info } from '../components/Info';
import { api } from '../services/api';

interface CityData {
  id: number;
  name: string;
  country: string;
  thumb: string;
  flag: string;
}

interface ContinentData {
  name: string;
  description: string;
  thumb: string;
  more_information: {
    countries_number: number,
    languages_number: number,
    most_visited_cities_number: number,
    most_visited_cities: CityData[] | null;
  }
}

interface ContinentProps {
  continent: ContinentData;
}

export default function Continent ({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });


  return (
    <>
      <Header isBackButton/>
      <Flex 
        as="header"
        h={{base: "250px", md: "500px"}}
        position="relative"
        justify="center"
        align="center"
      >
        <DarkenedImage>
          <Image
            src={continent.thumb}
            alt={continent.name} 
            width="100%"
            height="100%"
            objectFit="fill"
            objectPosition="center"
          />
        </DarkenedImage>


        <Text 
          as="h1"
          fontSize={["32px","48px"]}
          color="gray.50"
          fontWeight="semibold"
          position="absolute"
          left={{base: "auto", lg: "140px"}}
          bottom={{base: "auto", lg: "60px"}}
          zIndex={11}
        >
          {continent.name}
        </Text>
      </Flex>
      
      <Box as="main" mx={["4", "4", "12", "140px"]}>
        <Grid templateColumns={{base: "1fr", xl: "repeat(2, 1fr)"}} gap={["4", 70]} mt={["6", "20"]}> 
          <Text
            fontSize={["14", "24"]}
            lineHeight={["21px", "36px"]}
            align="justify"
          >
            {continent.description}
          </Text>
          <Info
            countries_number={continent.more_information.countries_number}
            languages_number={continent.more_information.languages_number}
            most_visited_cities_number={continent.more_information.most_visited_cities_number}
          />
        </Grid>

        <Box as="section" my={{base: "8", md: "12", lg: "20"}} >
          { continent.more_information.most_visited_cities &&
            <>
              <Text 
                as="h2"
                fontWeight="medium"
                fontSize={["2xl","4xl"]}
              >
                Cidades +100
              </Text>

              <Cities cities={continent.more_information.most_visited_cities} />
            </>
          }

        </Box>   

      </Box>
    </>
  );      
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`/continents?slug=${slug}`);

  const continent = response.data[0];

  return {
    props: {
      continent,
    } 
  }
}
