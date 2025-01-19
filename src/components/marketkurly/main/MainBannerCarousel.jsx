import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainBannerCarousel() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const banners = [
    {
      id: 1,
      src: "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/e1b08aaa-300c-413b-9ebf-27742320ae21.jpg",
      alt: "Banner 1",
    },
    {
      id: 2,
      src: "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/e8dc84ae-5b08-48d9-a5a6-c82ba81b5ca8.jpg",
      alt: "Banner 2",
    },
    {
      id: 3,
      src: "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/7946e37f-6db0-408c-89e0-668d3c1a086a.jpg",
      alt: "Banner 3",
    },
  ];

  return (
    <MainBannerLayout>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        loop
        onInit={(swiper) => {
          // Swiper 초기화 시점에 버튼 요소를 할당
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerImage src={banner.src} alt={banner.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 커스텀 네비게이션 버튼 */}
      <Button ref={prevButtonRef}>
        ◀
      </Button>
      <Button ref={nextButtonRef}>
        ▶
      </Button>
    </MainBannerLayout>
  );
}

const MainBannerLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &.prev {
    left: 200px;
  }

  &.next {
    right: 200px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export default MainBannerCarousel;
