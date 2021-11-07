import styled from "styled-components"


export const BannerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Banner = styled.img`
top: 60px;
left: 0px;
width: 100%;
height: 500px;
img{
    width: 100%;
    height: 400px;
}
@media screen and (min-device-width: 320px) and (max-device-width: 420px){
    height: 0px;
    width: 0px;
}
`