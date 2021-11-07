import styled from "styled-components"

export const CardProduct = styled.div`
align-content: center;
margin-top: 60px;
display: flex;
flex-wrap: wrap;
width: 100vw;
height: 250px;
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
    margin-top: 20px;
}
`
export const ImgArea = styled.div`
padding-left: 20px;
img{
   width: 225px;
    height: 175px;
}
`
export const Offer = styled.div`
margin-top: 16px;
display: flex;
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
font: normal normal bold 22px/17px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: uppercase;
}
p{
    padding-top: 2px;
}
`
export const AreaInfo = styled.div`
margin-left: 120px;
position: absolute;
display: flex;

`
export const TextInfo = styled.div`
padding-top: 2px;
padding-left: 26px;

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
margin-left: 17px;
}
b{
    margin-left: 2px;
}
`

export const Price = styled.div`
padding-top: 62px;
letter-spacing: 2px;
position: absolute;
text-align: center;
margin-left: 51px;
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
letter-spacing: 4px;
padding-top: 76px;
text-align: center;
margin-left: 50px;
position: absolute;
.por{
text-align: center;
font: normal normal normal 11px/18px Montserrat;
letter-spacing: 0px;
color: #262626;
margin-right: 1px;
}
#new{
text-align: center;
font: normal normal bold 14px/18px Montserrat;
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
width: 318px;
height: 154px;
border-radius: 28px;
background-color: #e9ecef; 
`


export const ProductTwo = styled.div`
margin-top: 30px;
display: flex;
box-shadow: 2px 2px 5px darkgray;
text-align: center;
width: 318px;
height: 150px;
border-radius: 28px;
background-color: #e9ecef;  

`

