import { SimpleGrid } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function Travel() {
  return (
    <SimpleGrid 
      as="section"
      mx="auto"
      columns={5}
      w="100%"
      rowGap="30px"
      minChildWidth="150px"
      px={{
        base: 50,  
        lg: 100, 
        xl: 140
      }}
    >
      <TravelType name="vida noturna" src="/images/cocktail.svg"/>
      <TravelType name="praia" src="/images/surf.svg"/>
      <TravelType name="moderno" src="/images/building.svg"/>
      <TravelType name="clássico" src="/images/museum.svg"/>
      <TravelType name="e mais..." src="/images/earth.svg"/>
    </SimpleGrid>
  );
}