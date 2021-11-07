import styled from "styled-components"


export const AreaButton = styled.div`
width: 200px;
height: 40px;
`

export const Button = styled.button`
position: absolute;
margin-top: 140px;
margin-left: 165px;
background-color: #FC525F;
width: 140px;
height: 39px;
border-radius: 24px;
border: none;
text-align: center;
font: normal normal bold 15px/19px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
:hover {
background-color: lightpink;
}
@media screen and (min-device-width: 320px) and (max-device-width: 420px){
    margin-top: 110px;
    width: 120px;
    height: 33px;
    text-align: center;
font: normal normal bold 11px/14px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
}
`
