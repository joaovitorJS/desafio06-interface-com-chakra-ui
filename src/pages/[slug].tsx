import { Heading } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { api } from '../services/api';

export default function Continent ({}) {
  return (
    <Heading>

    </Heading>
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

  console.log(response.data);

  return {
    props: {

    }
  }
}
