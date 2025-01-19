import React from "react";
import styled from "styled-components";
import DetailFiterItem from "./DetailFiterItem";

function DetailFiter({ categories }) {
  return (
    <DetailFiterLayout>
      {categories.map((category, index) => (
        <DetailFiterItem key={category.title + index} category={category} />
      ))}
    </DetailFiterLayout>
  );
}

const DetailFiterLayout = styled.div`
  width: 260px;
  margin-right: 47px;
  /* 높이 조절 필요 */
  max-height: 700px;
  overflow-y: scroll;
  position: sticky;
  top: 0px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export default DetailFiter;
