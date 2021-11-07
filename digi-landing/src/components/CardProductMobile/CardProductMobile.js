import React from "react"
import { ProductTwo, ProductOne, CardProduct, ImgArea, Offer, Title, TextInfo, Price,NewPrice, AreaInfo } from "./style"
import t1Pack100 from "../../images/tela1/t1Pack100.png"
import ButtonStyle from "../../components/Button/ButtonStyle"
import fotoM from "../../images/telaMobile/fotoM.png"


const CardProductMobile = () => {
return(
    <div>
    <Title>
        <h1>Ofertas em destaque:</h1>
    </Title>


    <CardProduct>

        <ProductOne>
            <ImgArea>
                <Offer>
                    <p><b>XX%</b><br />
         OFF</p>
                </Offer>
                <img src={fotoM} />

            </ImgArea>
            <AreaInfo>
                <TextInfo >
                    <h5>Fotolivro<b id="classic">Classic</b>
                        <p id="A5">(A5 quadrado)</p></h5>
                </TextInfo>
                <Price>
                    <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                </Price>
                <NewPrice>
                    <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                </NewPrice>

            </AreaInfo>
            <ButtonStyle>Eu quero!</ButtonStyle>

        </ProductOne>

        <ProductTwo >
            <ImgArea>
                <Offer>
                    <p><b>XX%</b><br />
         OFF</p>
                </Offer>
                <img src={t1Pack100} />
            </ImgArea>
            <AreaInfo>
                <TextInfo>
                    <h5>Pacote<b id="classic">100<b>Fotos</b></b>
                        <p id="A5">(10X15cm)</p></h5>
                </TextInfo>
                <Price>
                    <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                </Price>
                <NewPrice>
                    <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                </NewPrice>

            </AreaInfo>
            <ButtonStyle>Eu quero!</ButtonStyle>
           
        </ProductTwo>
       
    </CardProduct>
    </div>
)
}

export default CardProductMobile