import React, { useEffect } from "react";
import styled from "styled-components";
import MainBannerCarousel from "../../components/marketkurly/main/MainBannerCarousel";
import { useSelector } from "react-redux";
import useMovePage from "../../hooks/useMovePage";
function MainPage() {
  const user = useSelector((state) => state.userInfo.id);
  const { makeRequest } = useMovePage();
  useEffect(() => {
    if (!user) makeRequest("/FG/FGMK/FGMKLO/FGMKLO002", {});
  }, []);
  if (!user) return null;
  return <MainPageLayout></MainPageLayout>;
}

const MainPageLayout = styled.div``;
export default MainPage;
