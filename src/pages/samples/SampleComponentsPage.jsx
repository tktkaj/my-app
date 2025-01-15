import React from "react";
import styled from "styled-components";


const StyledUl = styled.ul`
  margin: 0 auto;
  padding-top: 50px;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-top: 20px;
`;

function SampleComponents() {
  // const products = [
  //   {
  //     name: "[KF365] 에어프라이어용 미니 돈까스 500g",
  //     originalPrice: "9,990원",
  //     salePrice: "4,990원",
  //   },
  //   {
  //     name: "[KF365] 대용량 에어프라이어용 미니 돈까스 900g",
  //     originalPrice: "9,990원",
  //     salePrice: "4,990원",
  //   },
  // ];
  // const products2 = {
  //   img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/f5297b80-3420-41d4-9191-a90d6a81443f.jpg",
  //   title: `[최초특가][랑콤] (본품대비 20%할인특별세트) NEW 제니피끄 얼티미트 ...`,
  //   oriPrice: "288,000원",
  //   disPercent: "15%",
  //   disPrice: "244,800원",
  //   sale: "10%상시할인",
  //   review: "999+",
  // };
  return (
    <div style={{ marginBottom: "100px" }}>
      <StyledUl>
        <StyledLi></StyledLi>
      </StyledUl>
    </div>
  );
}

export default SampleComponents;
