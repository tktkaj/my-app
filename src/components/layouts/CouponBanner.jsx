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
`;

function CouponBanner({children}) {
  return (
    <CouponWrapper>
    <CouponTitle>{children}</CouponTitle>
  </CouponWrapper>
  )
}

export default CouponBanner