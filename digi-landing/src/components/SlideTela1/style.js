import styled from "styled-components"


export const Principal = styled.div`
overflow-x: auto;
width: 100vw;
`

export const Slide = styled.div`
justify-content: center;
align-content: center;
margin-left: 3%;
margin-right: 3%;
@media screen and (min-device-width: 320px) and (max-device-width: 420px){
   display: none
}
`
export const Title = styled.div`
height: 20px;
text-align: center;
display: inline;
#h1-slide{
   padding-top: 30px;
}
@media screen and (min-device-width: 320px) and (max-device-width: 420px){
    display: none;
}
`
export const Product = styled.div`
margin-left: 20px;
margin-top: 10px;
display: flex;
box-shadow: 2px 2px 5px darkgray;
text-align: center;
width: 340px;
height: 198px;
border-radius: 28px;
background-color: #FFFFFF; 
border-bottom: 16px;
@media screen and (min-device-width: 320px) and (max-device-width: 420px){

}
`


export const ImgArea = styled.div`
height: 160px;
width: 150px;
padding-left: 20px;
img{
   width: 250px;
    height: 180px;
}
`
export const Offer = styled.div`
margin-top: 8px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #FD5766;
width: 71px;
height: 72px;
border-radius: 60px;
position: absolute;
color: white;
text-align: center;
b{
text-align: center;
font: normal normal bold 22px/17px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
}
p{
    padding-top: 10px;
}
`
export const AreaInfo = styled.div`
margin-left: 140px;
position: absolute;
display: flex;
width: 300px;
height: 200px;
`
export const TextInfo = styled.div`
display: flex;
padding-top: 12px;
padding-left: 24px;
width: 100px;
height: 70px;
h5{
width: 97px;
height: 25px;
text-align: center;
font: normal normal normal 21px/17px Montserrat;
letter-spacing: 1px;
color: #262626;
}
#classic{
margin-left: 3px;
width: 76px;
height: 25px;
text-align: center;
font: normal normal bold 21px/17px Montserrat;
color: #262626;
}
#A5{
width: 100px;
height: 18px;
text-align: center;
font: normal normal normal 14px/17px Montserrat;
letter-spacing: 0px;
color: #262626;
margin-top: 1px;
}
b{
    margin-left: 2px;
}
#calendar {
    margin-top: 6px;
    font-size: 19px;
}
`

export const Price = styled.div`
padding-top: 72px;
letter-spacing: 2px;
position: absolute;
text-align: center;
margin-left: 40px;
#de{
text-align: center;
font: normal normal normal 13px/16px Montserrat;
color: #262626;
}
#rs{
text-align: center;
text-decoration: line-through;
font: normal normal normal 13px/16px Montserrat;
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
padding-top: 86px;
text-align: center;
margin-left: 35px;
position: absolute;
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
export const ProductOne = styled.div`
padding-top: 10px;
display: flex;
box-shadow: 2px 2px 5px darkgray;
text-align: center;
width: 350px;
height: 250px;
border-radius: 28px;
background-color: #e9ecef; 
border-bottom: 16px;
`


export const ProductTwo = styled.div`
padding-top: 10px;
display: flex;
box-shadow: 2px 2px 5px darkgray;
text-align: center;
width: 350px;
height: 250px;
border-radius: 28px;
background-color: #e9ecef;  
margin-left: 32px;
border-bottom: 16px;

`

