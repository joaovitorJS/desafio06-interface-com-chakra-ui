import { Image, Box, Text, Flex } from '@chakra-ui/react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from "./styles.module.css";
import { ContinentProps } from '../../pages';
import Link from 'next/link';

const stylesSlider = {
  margin: "auto",
  display: "flex",
  alignItems: "center",
}

interface SliderProps {
  data: ContinentProps[];
}

export function Slider ({ data }: SliderProps) {
  
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
            <Box
              width="100%"
              height="100%"
              zIndex={10}
              display="inline-block"
              position="relative"
              _after={{
                content: `" "`,
                position: "absolute",
                top: "0",
                right: "0",
                backgroundColor: "rgba(28, 20, 1, 0.35)",
                width: "100%",
                height: "100%"
              }}
            >
              <Image 
                src={item.thumb}
                width="100%"
                objectFit="contain"
              />  

            </Box>
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              zIndex={10}
              align="center"
              justify="center"
              flexDir="column"
            >
              <Link href={`/${item.slug}`}>
              <Text
                  as="a"
                  fontWeight="bold" 
                  fontSize="48" 
                  color="gray.50" 
                  mb="4"
                  cursor="pointer"
                  transition="text-decoration 0.2s"
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "highlight"
                  }}
                >
                  {item.name}
                </Text>
              </Link>
              <Text fontWeight="bold" fontSize="24" color="gray.50">
                {item.slogan}
              </Text>
            </Flex>
          </SwiperSlide>
          
        ))
      }
    </Swiper>
  );
};