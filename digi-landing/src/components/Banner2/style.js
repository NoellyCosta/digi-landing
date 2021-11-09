import styled from "styled-components"

export const BannerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: transparent url('img/Banner-desktop.png') 0% 0% no-repeat padding-box; ;
`


export const BannerArea2 = styled.img`
top: 60px;
left: 0px;
width: 100vw;
height: 500px;
min-width: 300px;

@media screen and (min-device-width: 320px) and (max-device-width: 420px){
    height: 0px;
    width: 0px;
}
`