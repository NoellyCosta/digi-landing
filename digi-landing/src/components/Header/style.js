import styled from "styled-components"

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
height: 60px;
padding: 0 10px;
background: #FC525F 0% 0% no-repeat padding-box;

`
export const ContentHeader = styled.div`
width: 100vw;
display: flex;
align-items: center;
align-content: center ;
justify-content: center;
padding-left: 145px;
@media screen and (min-device-width: 320px) and (max-device-width: 936px) {
    padding-left: 190px;

    display: flex;
    justify-content: center;
    
}
`
export const LogoMeliuz = styled.img`
top: 13px;
left: 801px;
width: 81px;
height: 34px;
margin-right: 10px;
@media screen and (min-device-width: 320px) and (max-device-width: 936px) {
    width: 55px;
    height: 29px;
}
`

export const Barra = styled.div`
top: 16px;
left: 913px;
margin-left: 18px;
margin-right: 30px;
width: 0px;
height: 34px;
border: 1px solid #FFFFFF;
opacity: 1;
@media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    height: 30px;
    margin-left: 1px;
    margin-right: 10px;
}
`

export const FotoRegistro = styled.img`
margin-top: 6px;
left: 945px;
width: 175px;
height: 34px;
margin-right: 200px;
@media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    width: 90px;
    height: 24px;
    margin-top: 6px;
    margin-left: 1px;
}

`
export const ButtonHeader = styled.button`
position: absolute;
margin-top: 190px;
margin-left: 180px;
background-color: #ffffff;
width: 140px;
height: 39px;
border-radius: 24px;
border: none;
text-align: center;
font: normal normal bold 15px/19px Montserrat;
letter-spacing: 0px;
color: #FC525F;
text-transform: uppercase;
opacity: 1;
:hover {
background-color: lightpink;
}
@media screen and (min-device-width: 320px) and (max-device-width: 420px){

position:absolute;

left:-9999px;
}
`