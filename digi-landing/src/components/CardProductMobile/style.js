import styled from "styled-components"

export const CardProduct = styled.div`
align-items: center;
justify-content: center;
margin-top: 20px;
width: 100vw;
height: 100vh;
`

export const Title = styled.div`
text-align: center;
display: inline;
h1{
text-align: center;
font: normal normal bold 24px/29px Montserrat;
letter-spacing: 0px;
color: #000000;
opacity: 1;
    margin-top: 10px;
}
`


export const ImgArea = styled.div`
height: 200px;
width: 150px;
padding-left: 20px;
img{
   width: 290px;
    height: 200px;
}
`
export const Offer = styled.div`
margin-top: 16px;
justify-content: space-between;
background-color: #FD5766;
width: 61px;
height: 61px;
border-radius: 60px;
position: absolute;
color: white;
text-align: center;
b{
text-align: center;
font: normal normal bold 21px/17px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
}
p{
    padding-top: 4px;
}
`
export const AreaInfo = styled.div`
margin-left: 122px;
position: absolute;
display: flex;
width: 300px;
height: 200px;
`
export const TextInfo = styled.div`
padding-top: 12px;
padding-left: 26px;
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
letter-spacing: 0px;
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
`

export const Price = styled.div`
padding-top: 72px;
letter-spacing: 2px;
position: absolute;
text-align: center;
margin-left: 50px;
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
margin-left: 45px;
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
display: flex;
box-shadow: 2px 2px 5px darkgray;
text-align: center;
width: 358px;
height: 180px;
border-radius: 28px;
background-color: #e9ecef; 

@media screen and (min-device-width: 320px){
 
 margin-left: 10px;
 width: 338px;
height: 170px;
}
`


export const ProductTwo = styled.div`
margin-top: 30px;
display: flex;
box-shadow: 2px 2px 5px darkgray;
text-align: center;
width: 308px;
height: 180px;
border-radius: 28px;
background-color: #e9ecef;  

@media screen and (min-device-width: 320px){
 
    margin-left: 10px;
    width: 338px;
height: 170px;

}

`

