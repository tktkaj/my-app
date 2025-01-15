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
  const products = [
    {
      name: "[KF365] 에어프라이어용 미니 돈까스 500g",
      originalPrice: "9,990원",
      salePrice: "4,990원",
    },
    {
      name: "[KF365] 대용량 에어프라이어용 미니 돈까스 900g",
      originalPrice: "9,990원",
      salePrice: "4,990원",
    },
  ];
  const products2 = {
    img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/f5297b80-3420-41d4-9191-a90d6a81443f.jpg",
    title: `[최초특가][랑콤] (본품대비 20%할인특별세트) NEW 제니피끄 얼티미트 ...`,
    oriPrice: "288,000원",
    disPercent: "15%",
    disPrice: "244,800원",
    sale: "10%상시할인",
    review: "999+",
  };
  return (
    <div style={{ marginBottom: "100px" }}>
      컴포넌트 페이지입니다.
      {/* <StyledUl>
        <h3 style={{ fontWeight: "bold" }}>1. Button</h3>
        <StyledLi>
          <KurlyBtn
            color="#fff"
            bgc="#5f0080"
            content="가입하기"
            size="small"
          ></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <KurlyBtn color="#fff" bgc="#5f0080" content="로그인"></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <KurlyBtn color="#5f0080" bgc="#fff" content="회원가입"></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <KurlyBtn
            color="#fff"
            bgc="#5f0080"
            content="장바구니 담기"
            size="large"
          ></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <GetCartBtn size="small"></GetCartBtn>
        </StyledLi>
        <StyledLi>
          <GetCartBtn size=""></GetCartBtn>
        </StyledLi>
        <StyledLi>
          <GetCartBtn size="large"></GetCartBtn>
        </StyledLi>
        <StyledLi>
          <SmallWhiteBtn content="1:1 문의"></SmallWhiteBtn>
        </StyledLi>
        <StyledLi></StyledLi>
        <StyledLi></StyledLi>
      </StyledUl>
      <StyledUl>
        <h3 style={{ fontWeight: "bold" }}>2. Input</h3>
        <StyledLi>
          <BasicInput
            type="join"
            placeHolder="아이디를 입력해주세요"
          ></BasicInput>
        </StyledLi>
        <StyledLi>
          <BasicInput
            type="login"
            placeHolder="아이디를 입력해주세요"
          ></BasicInput>
        </StyledLi>
        <StyledLi>
          <SearchInput></SearchInput>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <h3 style={{ fontWeight: "bold" }}>3. coupon</h3>
        <StyledLi>
          <div style={{position:"relative"}}>
          <Coupon content="+최대4만원쿠폰"></Coupon>
          </div>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <h3 style={{ fontWeight: "bold" }}>4. checkbox & radiobox</h3>
        <StyledLi>
          <FilterItem
            type="category"
            content="간편식·밀키트·샐러드"
          ></FilterItem>
        </StyledLi>
        <StyledLi>
          <FilterItem type="price" content="6,970원 ~ 9,990원"></FilterItem>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <h3 style={{ fontWeight: "bold" }}>5. selelct</h3>
        <StyledLi>
          <Select products={products}></Select>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <h3 style={{ fontWeight: "bold" }}>6. card</h3>
        <Card products2={products2}></Card>
      </StyledUl> */}
    </div>
  );
}

export default SampleComponents;
