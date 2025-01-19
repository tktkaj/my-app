import React from "react";
import styled from "styled-components";
import ShoppingOptions from "../../components/marketkurly/detail/ShoppingOptions";
function ProductDetail() {
  return (
    <ProductDetailLayout>
      <ProductDetailbox>
        <ShoppingOptions />
      </ProductDetailbox>
      <ProductDetailDescription></ProductDetailDescription>
    </ProductDetailLayout>
  );
}
const ProductDetailLayout = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const ProductDetailbox = styled.div``;
const ProductDetailDescription = styled.div``;

export default ProductDetail;
