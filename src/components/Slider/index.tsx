import Link from 'next/link';
import { Image, Text, Flex, useBreakpointValue } from '@chakra-ui/react';

import { ContinentProps } from '../../pages';

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./styles.module.css";
import { DarkenedImage } from '../DarkenedImage';


interface SliderProps {
  data: ContinentProps[];
}

export function Slider ({ data }: SliderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  });


  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.sliderContainer}
    >
      { data.map(item => (
          <SwiperSlide 
            className={styles.sliderItem}
            key={item.id}
          >
            <DarkenedImage>
              <Image 
                src={item.thumb}
                width="100%"
                height="100%"
                objectFit="fill"
                objectPosition="center" 
              /> 
            </DarkenedImage>
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              zIndex={10}
              align="center"
              justify="center"
              flexDir="column"
            >
              <Link href={`/${item.slug}`} passHref>
                { isWideVersion ? 
                  (
                    <Text
                      as="a"
                      fontWeight="bold" 
                      fontSize={{
                        base: "30", 
                        md:"48"
                      }}
                      mx="40px"
                      textAlign="center"
                      color="gray.50" 
                      mb={{
                        base: "1", 
                        md: "4"
                      }}
                      cursor="pointer"
                      transition="color 0.2s"
                      _hover={{
                        color: "highlight",
                      }}
                    >
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      as="a"
                      fontWeight="bold" 
                      fontSize={{
                        base: "30", 
                        md:"48"
                      }}
                      mx="40px"
                      textAlign="center"
                      color="gray.50" 
                      mb={{
                        base: "1", 
                        md: "4"
                      }}
                      cursor="pointer"

                      border='2px solid'
                      borderColor="highlight"
                      borderRadius="4px"
                      px="2"
                      py="1"
                      transition="color 0.2s"
                      _hover={{
                        color: "highlight",
                      }}
                    >
                      {item.name}
                    </Text>
                  )
                }
              </Link>
              <Text 
                fontWeight="bold" 
                fontSize={{
                  base: "12", 
                  md:"24"
                }} 
                textAlign="center"
                color="gray.50"
                width={{
                  base: '80%', 
                  xl: '100%'
                }}
                px={2}
                display="inline-block"
              >
                {item.slogan}
              </Text>
            </Flex>
          </SwiperSlide>
          
        ))
      }
    </Swiper>
  );
};