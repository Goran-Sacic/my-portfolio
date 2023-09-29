import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./ImageDetails.module.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function ImageDetails({ images }) {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className={styles.mySwiper}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <p>{image.desc}</p>
          <Image
            id={image.id}
            src={image.img}
            className={styles.img}
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageDetails;
