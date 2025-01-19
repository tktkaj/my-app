import React from "react";
import styled from "styled-components";

function CouponBanner() {
  const couponContent = null;
  return (
    <CouponWrapper>
      {couponContent && <CouponTitle>{couponContent}</CouponTitle>}
    </CouponWrapper>
  );
}

const CouponWrapper = styled.header`
  background-color: #5f0080;
  color: white;
  text-align: center;
  padding: 13px 0;
`;

const CouponTitle = styled.h1`
  margin: 0;
`;

export default CouponBanner;
