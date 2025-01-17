import React from "react";
import styled from "styled-components";
import KurlyBtn from "../../components/common/button/KurlyBtn";
import BasicInput from "../../components/common/input/BasicInput";
import SearchInput from "../../components/common/input/SearchInput";
import CheckBox from "../../components/common/checkbox/CheckBox";
import Radio from "../../components/common/radio/Radio";
import Select from "../../components/common/select/Select";
import GetCartBtn from "../../components/common/button/GetCartBtn";
import Coupon from "../../components/coupon/Coupon";
import Card from "../../components/card/Card";
import DialogBtn from "../../components/common/button/DialogBtn";
import { useBackward } from "../../hooks/useBackward";

function SampleComponents() {
  const goback = useBackward();

  const prices = [
    {
      productName: "10,000원~15,000원",
      ProductCount: 15,
      name: "price",
      value: "10,000원~15,000원",
    },
    {
      productName: "15,000원~20,000원",
      ProductCount: 20,
      name: "price",
      value: "15,000원~20,000원",
    },
    {
      productName: "20,000원~30,000원",
      ProductCount: 10,
      name: "price",
      value: "20,000원~30,000원",
    },
    {
      productName: "30,000원~50,000원",
      ProductCount: 5,
      name: "price",
      value: "30,000원~50,000원",
    },
  ];

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
    disable: false,
  };
  const categories = [
    {
      name: "과일",
      count: 50,
    },
    {
      name: "채소",
      count: 30,
    },
    {
      name: "육류",
      count: 20,
    },
    {
      name: "음료",
      count: 40,
    },
  ];
  const outputValue = (value) => {
    console.log(value);
  };
  const searchValue = (value) => {
    console.log(value);
  };
  const checkboxValue = (value) => {
    console.log(value);
  };
  const selectValue = (value) => {
    console.log(value);
  };
  return (
    <div style={{ marginBottom: "100px" }}>
      <StyledUl>
        <StyledTitle>1. KurlyBn</StyledTitle>
        <StyledSubTitle>1.1 size</StyledSubTitle>
        <StyledLi>
          <KurlyBtn type="button" btnText="sm" size="sm"></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <KurlyBtn type="button" btnText="ml" size="ml"></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <KurlyBtn type="button" btnText="lg" size="lg"></KurlyBtn>
        </StyledLi>
        <StyledSubTitle>1.2 variant</StyledSubTitle>
        <StyledLi>
          <KurlyBtn type="button" variant="purple" btnText="purple"></KurlyBtn>
        </StyledLi>
        <StyledLi>
          <KurlyBtn
            type="button"
            variant="outlinePurple"
            btnText="outlinePurple"
          ></KurlyBtn>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledTitle>2. GetCartBtn</StyledTitle>
        <StyledSubTitle>2.1 size</StyledSubTitle>
        <StyledLi>
          <GetCartBtn type="button" btnText="sm" size="sm"></GetCartBtn>
        </StyledLi>
        <StyledLi>
          <GetCartBtn type="button" btnText="ml" size="ml"></GetCartBtn>
        </StyledLi>
        <StyledLi>
          <GetCartBtn type="button" btnText="lg" size="lg"></GetCartBtn>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledTitle>2. input</StyledTitle>
        <StyledSubTitle>2.1 size</StyledSubTitle>
        <StyledLi>
          <BasicInput
            type="text"
            size="sm"
            placeholder="sm"
            onChange={outputValue}
          ></BasicInput>
        </StyledLi>
        <StyledLi>
          <BasicInput
            type="text"
            size="ml"
            placeholder="ml"
            onChange={outputValue}
          ></BasicInput>
        </StyledLi>
        <StyledSubTitle>2.2 type</StyledSubTitle>
        <StyledLi>
          <BasicInput
            type="text"
            size="ml"
            placeholder="text"
            onChange={outputValue}
          ></BasicInput>
        </StyledLi>
        <StyledLi>
          <BasicInput
            type="password"
            size="ml"
            placeholder="password"
            onChange={outputValue}
          ></BasicInput>
        </StyledLi>
        <StyledSubTitle>2.3 placeholder</StyledSubTitle>
        <StyledLi>
          <BasicInput
            type="text"
            size="ml"
            placeholder="placeholder"
            onChange={outputValue}
          ></BasicInput>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledTitle>3. SearchInput</StyledTitle>
        <StyledLi>
          <SearchInput
            placeholder="검색어를 입력해주세요."
            onChange={searchValue}
          ></SearchInput>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledTitle>3. radio</StyledTitle>
        <StyledSubTitle>3.1 active</StyledSubTitle>
        {prices.map((price, index) => (
          <StyledLi>
            <Radio
              key={price.productName + index}
              productName={price.productName}
              ProductCount={price.ProductCount}
              name={price.name}
              value={price.value}
              onClick={outputValue}
            ></Radio>
          </StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <StyledTitle>4. checkbox</StyledTitle>
        <StyledSubTitle>4.1 active</StyledSubTitle>
        {categories.map((category, index) => (
          <StyledLi>
            <CheckBox
              key={category + index}
              name={category.name}
              count={category.count}
              onClick={checkboxValue}
            ></CheckBox>
          </StyledLi>
        ))}
      </StyledUl>
      <StyledUl>
        <StyledTitle>5. select</StyledTitle>
        <StyledLi>
          <Select value="value" products={products} onClick={selectValue}></Select>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <StyledTitle>6. coupon</StyledTitle>
        <StyledLi style={{ position: "relative" }}>
          <Coupon value="value"></Coupon>
        </StyledLi>
      </StyledUl>
      <StyledUl style={{ marginTop: "50px" }}>
        <StyledTitle>7. card</StyledTitle>
        <StyledLi>
          <Card products2={products2}></Card>
        </StyledLi>
      </StyledUl>
      <StyledUl>
        <DialogBtn btnText="뒤로가기" onClick={() => goback()}></DialogBtn>
      </StyledUl>
    </div>
  );
}

const StyledUl = styled.ul`
  margin: 0 auto;
  padding-top: 50px;
  list-style: none;
  margin-left: 50px;
`;
const StyledTitle = styled.h3`
  font-weight: bold;
`;
const StyledSubTitle = styled.h3`
  margin-top: 30px;
`;
const StyledLi = styled.li`
  margin-top: 20px;
`;

export default SampleComponents;
