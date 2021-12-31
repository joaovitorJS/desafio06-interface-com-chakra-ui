import { Heading, Box, Text, Image, Flex, Grid, HStack } from '@chakra-ui/react';
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
  
  return (
    <>
      <Header isBackButton/>
      <Box 
        as="header"
        h={{base: "500px"}}
        position="relative"
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
          fontSize="48px"
          color="gray.50"
          fontWeight="semibold"
          position="absolute"
          left="140px"
          bottom="60px"
          zIndex={11}
        >
          {continent.name}
        </Text>
      </Box>
      
      <Box as="main" mx="140px">
        <Grid templateColumns="repeat(2, 1fr)" gap={70} mt="20"> 
          <Text
            fontSize="24"
            lineHeight="36px"
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

        <Box as="section" my="20" >
          { continent.more_information.most_visited_cities &&
            <>
              <Text 
                as="h2"
                fontWeight="medium"
                fontSize="4xl"
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
