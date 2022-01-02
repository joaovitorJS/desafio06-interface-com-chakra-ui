import { 
  Flex, 
  Text, 
  Icon, 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  PopoverArrow, 
  PopoverCloseButton, 
  PopoverBody,
  PopoverHeader, 
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

interface SeparateInfoProps {
  children: number;
  information: string;
  hasButtonInfo?: boolean;
}

export function SeparateInfo ({children, information, hasButtonInfo=false}: SeparateInfoProps) {
  return (
    <Flex direction="column" align={["flex-start","center"]}>
        <Text fontWeight="semibold" color="highlight" fontSize={["2xl","5xl"]} as="span">
          {children}
        </Text>
        
      <Flex align="center" position={{base: "static", md: "relative"}}> 
        <Text fontWeight={["regular", "semibold"]} color="gray.500" fontSize={["md","2xl"]} mr="5px">
          {information}
        </Text>
        { hasButtonInfo &&
          <Popover strategy="fixed">
            <PopoverTrigger>
              <Icon as={FiInfo} h={["2.5","4"]} w={["2.5","4"]} color="gray.500" cursor="pointer" opacity="50%"/>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Informação</PopoverHeader>
              <PopoverBody>
                Esse continente possui {children} cidades das 100 mais visitadas do mundo!
              </PopoverBody>
            </PopoverContent>
          </Popover>
        }
      </Flex>
    </Flex>
  );
}