import React from "react"
import { ProductTwo, ProductOne, CardProduct, ImgArea, Offer, PrincipalCard, Title, TextInfo, Price,NewPrice, AreaInfo } from "./style"
import t1FotoL from "../../images/tela1/t1FotoL.png"
import t1Pack100 from "../../images/tela1/t1Pack100.png"
import ButtonStyle from "../../components/Button/ButtonStyle"
import MediaQuery from "react-responsive";
import CardProductMobile from "../CardProductMobile/CardProductMobile"

const CardProdutoTela1 = () => {

    return (
        <PrincipalCard>
            <Title>
                <h1>Ofertas em destaque:</h1>
            </Title>


            <CardProduct>

                <ProductOne id="hide-mobile">
                    <ImgArea>
                        <Offer>
                            <p><b>XX%</b><br />
                 OFF</p>
                        </Offer>
                        <img src={t1FotoL} />

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

                <ProductTwo id="hide-mobile">
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
                <MediaQuery query="(min-device-width: 320px) and (max-device-width: 670px)">
                    <CardProductMobile />
                </MediaQuery>
            </CardProduct>
        </PrincipalCard>

    )
}

export default CardProdutoTela1;