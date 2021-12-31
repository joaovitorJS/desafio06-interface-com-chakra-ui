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
    <Flex direction="column" align="center">
        <Text fontWeight="semibold" color="highlight" fontSize="48px" as="span">
          {children}
        </Text>
        
      <Flex align="center" position="relative"> 
        <Text fontWeight="semibold" color="gray.500" fontSize="24px" mr="5px">
          {information}
        </Text>
        { hasButtonInfo &&
          <Popover>
            <PopoverTrigger>
              <Icon as={FiInfo} h="4" w="4" color="gray.500" cursor="pointer" opacity="50%"/>
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