 import styled from "styled-components"


 export const CardSlide = styled.div`
 width: 100vw;

@media screen and (min-device-width: 320px){
margin-top: 30px;
}
 `

 export const Title = styled.div`
 text-align: center;
 text-align: center;
font: normal normal bold 14px/17px Montserrat;
letter-spacing: 0px;
color: #000000;
opacity: 1;
 `

 export const Products = styled.div`
 width: 100vw;
 
 `

 export const Product = styled.div`
 margin-top: 12px;
 width: 320px;
 height: 180px;
 border-radius: 22px;
 background-color: #ffffff;
 margin-left: 6%;

 `
 export const AreaImgOffer = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 height: 180px;
 padding-right: 50px;
 
 `
 export const AreaImg = styled.div`
 width: 140px;
 margin-left: 4px;
 
    
 `
export const ImgProduct = styled.div`
margin-top: 13px;
width: 20px;
height: 20px;
margin-left: 14px;

.photo{
 width: 195px;
 height: 150px;
}


`
 export const Offer = styled.div`
 width: 65px;
 height: 65px;
 margin-top: 23px;
 background-color: blue;
 text-align: center;
 margin-left: -30px;;
 padding-top: 3px;
 background-color: #FC525F;
letter-spacing: NaNpx;
color: #FFFFFF;
text-transform: uppercase;
opacity: 1;
 border-radius: 32px;
 b{
    text-align: center;
font: normal normal bold 19px/12px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;

 }
 `

 export const AreaText = styled.div`
 margin-top: 6px;
 width: 150px;
 #info1{
     margin-top: -13px;
 }
 `

 export const AreaButton = styled.div`
 margin-top: 14px;
 width: 126px;
 margin-left: 9px;
 height:42px;
 `

 export const InfoProduct = styled.div`
 margin-top: 3px;
 width: 100%;
 height: 30px;
 letter-spacing: 1px;
 #calendar{
     display: flex;
     flex-direction: column;
 }

 b{
    text-align: center;
font: normal normal bold 20px/14px Montserrat;
letter-spacing: 0px;
color: #262626;
 }
 h5{
    text-align: center;
font: normal normal normal 20px/14px Montserrat;
letter-spacing: 3px;
color: #262626;
 }
 #A5{
text-align: center;
font: normal normal normal 12px/14px Montserrat;
letter-spacing: 0px;
color: #262626;
margin:0;
 }
 `

 export const PriceProduct = styled.div`
 width: 100%;
 height: 40px;;
 padding-left: 16px;
 #de{
     text-align: center;
font: normal normal normal 11px/14px Montserrat;
letter-spacing: 0px;
color: #262626;
}
#rs{text-align: center;
text-decoration: line-through;
font: normal normal normal 11px/14px Montserrat;
letter-spacing: 0px;
color: #262626;
}

.ancient{
    display: flex;
}
 
 `
 export const NewPrice = styled.div`
 display: flex;
letter-spacing: 3px;
margin-top: -26px;
text-align: center;
margin-left: 3px;
.por{
text-align: center;
font: normal normal normal 13px/23px Montserrat;
letter-spacing: 0px;
color: #262626;
}
#new{
text-align: center;
font: normal normal bold 19px/23px Montserrat;
letter-spacing: 0px;
color: #262626;
}
.div-new{
    display: flex;
}
 `

 export const ButtonSlide = styled.div`
 
margin-top: 140px;
margin-left: 20px;
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
    margin-top: 6px;
    width: 120px;
    height: 33px;
    text-align: center;
    padding-top: 4px;
    margin-left: 1px;
}
`
