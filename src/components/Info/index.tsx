import { Flex, HStack} from '@chakra-ui/react';
import { SeparateInfo } from './SeparateInfo';

interface InfoProps {
  countries_number: number;
  languages_number: number;
  most_visited_cities_number: number;
}

export function Info({
  countries_number,
  languages_number,
  most_visited_cities_number,
}: InfoProps) {
  return (
    <Flex alignItems="center" justify="center">
      <HStack spacing={42}>
        <SeparateInfo information="países">{countries_number}</SeparateInfo>
        <SeparateInfo information="línguas">{languages_number}</SeparateInfo>
        <SeparateInfo information="cidades +100" hasButtonInfo={true} >{most_visited_cities_number}</SeparateInfo>
      </HStack>
    </Flex>
  );
}