import styled from "styled-components";

export const SliderContainer = styled.div`
margin-top: 80px;
display: flex;
flex-direction: column;
gap: 40px;
`
export const SliderTitle = styled.div`
color:  #090A0A;
font-size: 32px;
font-weight: 700;
padding-left: 24px;
`
export const SliderItem = styled.div`
display: flex;
flex-direction: column;
`

export const SliderItemHeader = styled.div`
  flex: 1 1;
  width: 100%;
  position: relative;
  img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const SliderItemBody = styled.div`
color:  #090A0A;
font-size: 16px;
padding: 12px 0;
`
export const SliderItemFooter = styled.div`
padding: 8px 0;
color:  #6C7072;
font-size: 12px;
font-weight: 400;
`