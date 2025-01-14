import React from 'react'
import styled from 'styled-components';

const CouponWrapper = styled.header`
  background-color: #5f0080;
  color: white;
  text-align: center;
  padding: 13px 0;
`;

const CouponTitle = styled.h1`
  margin: 0;
  /* font-size: 1.05rem; */
`;

function CouponBanner() {
  return (
    <CouponWrapper>
    <CouponTitle>지금 가입하고, <b style={{fontWeight:'bold'}}>50% 할인 쿠폰</b> 받아가세요!</CouponTitle>
  </CouponWrapper>
  )
}

export default CouponBanner