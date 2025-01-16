import React from "react";
import styled from "styled-components";
import GetCartBtn from "../common/button/GetCartBtn";
import Coupon from "../coupon/Coupon";

const StyledCardDiv = styled.div`
  width: 249px;
  height: 496px;
`;

const StyledImgDiv = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledDetailDiv = styled.div`
  margin-top: 5px;
`;
const StyledProductTitle = styled.h3`
  text-overflow: ellipsis;
  margin-top: 10px;
  font-size: 1.1rem;
  color: #222;
`;

const StyledPriceSpan = styled.span``;
const OriginalPriceSpan = styled.span`
  display: block;
  text-decoration: line-through;
  color: #b5b5b5;
`;
const StyledDiscoutDiv = styled.div`
  padding-top: 2px;
`;
const DiscoutPerSpan = styled.span`
  font-size: 1.1rem;
  color: #fa622f;
  font-weight: bold;
  margin-right: 8px;
`;
const DiscountPriceSpan = styled.span`
  font-size: 1.1rem;
  color: #222;
  font-weight: bold;
`;

const ReviewDiv = styled.div`
  padding-top: 12px;
  display: flex;
  gap: 5px;
`;
const StyledSvg = styled.svg`
  width: 14px;
`;
const ReviewSpan = styled.span`
  color: #a7b2bc;
`;
function Card({ products2 }) {
  return (
    <StyledCardDiv>
      <StyledImgDiv>
        <Coupon value={products2.sale} disable={products2.disable}></Coupon>
        <StyledImg src={products2.img}></StyledImg>
      </StyledImgDiv>
      <StyledDetailDiv>
        <GetCartBtn type="button" size="ml" value="담기"></GetCartBtn>
        <StyledProductTitle>{products2.title}</StyledProductTitle>
        <StyledPriceSpan>
          <OriginalPriceSpan>{products2.oriPrice}</OriginalPriceSpan>
          <StyledDiscoutDiv>
            <DiscoutPerSpan>{products2.disPercent}</DiscoutPerSpan>
            <DiscountPriceSpan>{products2.disPrice}</DiscountPriceSpan>
          </StyledDiscoutDiv>
        </StyledPriceSpan>
      </StyledDetailDiv>
      <ReviewDiv>
        <StyledSvg
          width="100%"
          height="100%"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1513_17755" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 2C1.89543 2 1 2.89543 1 4V8.67201C1 9.77658 1.89543 10.672 3 10.672H5.11212L6.33682 12.7653C6.5299 13.0954 7.00688 13.0954 7.19995 12.7653L8.42465 10.672H10.5C11.6046 10.672 12.5 9.77658 12.5 8.67201V4C12.5 2.89543 11.6046 2 10.5 2H3Z"
            ></path>
          </mask>
          <path
            fill="#A7B2BC"
            d="M5.11212 10.672L5.97526 10.167L5.68564 9.67201H5.11212V10.672ZM6.33682 12.7653L5.47369 13.2703L5.47369 13.2703L6.33682 12.7653ZM7.19995 12.7653L6.33682 12.2604L6.33682 12.2604L7.19995 12.7653ZM8.42465 10.672V9.67201H7.85113L7.56152 10.167L8.42465 10.672ZM2 4C2 3.44772 2.44772 3 3 3V1C1.34315 1 0 2.34315 0 4H2ZM2 8.67201V4H0V8.67201H2ZM3 9.67201C2.44772 9.67201 2 9.22429 2 8.67201H0C0 10.3289 1.34315 11.672 3 11.672V9.67201ZM5.11212 9.67201H3V11.672H5.11212V9.67201ZM7.19995 12.2604L5.97526 10.167L4.24899 11.177L5.47369 13.2703L7.19995 12.2604ZM6.33682 12.2604C6.5299 11.9304 7.00688 11.9304 7.19995 12.2604L5.47369 13.2703C6.05291 14.2604 7.48386 14.2604 8.06309 13.2703L6.33682 12.2604ZM7.56152 10.167L6.33682 12.2604L8.06309 13.2703L9.28779 11.177L7.56152 10.167ZM10.5 9.67201H8.42465V11.672H10.5V9.67201ZM11.5 8.67201C11.5 9.22429 11.0523 9.67201 10.5 9.67201V11.672C12.1569 11.672 13.5 10.3289 13.5 8.67201H11.5ZM11.5 4V8.67201H13.5V4H11.5ZM10.5 3C11.0523 3 11.5 3.44772 11.5 4H13.5C13.5 2.34315 12.1569 1 10.5 1V3ZM3 3H10.5V1H3V3Z"
            mask="url(#path-1-inside-1_1513_17755)"
          ></path>
          <circle fill="#A7B2BC" cx="4.34998" cy="6.17871" r="0.75"></circle>
          <circle fill="#A7B2BC" cx="6.75" cy="6.17871" r="0.75"></circle>
          <circle fill="#A7B2BC" cx="9.15002" cy="6.17871" r="0.75"></circle>
        </StyledSvg>
        <ReviewSpan>{products2.review}</ReviewSpan>
      </ReviewDiv>
    </StyledCardDiv>
  );
}

export default Card;
