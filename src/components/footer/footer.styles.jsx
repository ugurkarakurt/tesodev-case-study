import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const FooterContainer = styled.div`
margin-top: 58px;
  background: rgba(41, 78, 152, 0.72);
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 49px 59px;
  height: 277px;
  margin-bottom: 100px;
  gap: 25px;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
    height: fit-content;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
export const FooterImage = styled.div`
  position: relative;
  width: 217px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }
  @media (max-width: 576px) {
    flex: 1 1 100%;
    padding-bottom: 100%;
    img {
    object-fit: contain;
  }
  }
`;
export const FooterDescription = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
  span {
    flex: 1 1;
    display: flex;
    align-items: flex-end;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  @media (max-width: 1280px) {
    gap: 10px;
  }
`;
export const MapWrapper = styled(MapContainer)`
  width: 467.489px;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: 100%;
    height: 300px;
    order: -1;
  }
`;
