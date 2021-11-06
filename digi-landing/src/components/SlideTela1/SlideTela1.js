import React from "react"
import Carousel from "react-elastic-carousel"
import { Slide, Product, ImgArea, Offer, AreaInfo, TextInfo, Price, NewPrice, Title } from "./style"
import tela1Mais from "../../images/tela1/tela1Mais.png"
import posterPremium1 from "../../images/tela1/posterPremium1.png"
import card1 from "../../images/tela2/card1.png"
import calendar from "../../images/tela2/calendar.png"
import t1FotoL from "../../images/tela1/t1FotoL.png"
import t1Pack100 from "../../images/tela1/t1Pack100.png"
import ButtonStyle from "../Button/ButtonStyle"

const SlideTela1 = () => {

    const breackPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },



    ]

    return (
        <>
            <Title>
                <h1 id="h1-slide" style={{ textAlign: "center" }}>Demais ofertas:</h1>
            </Title>
            <Slide>
                <Carousel breakPoints={breackPoints}>
                    <Product>
                        <ImgArea>
                            <Offer>
                                <p><b>XX%</b><br />
                 OFF</p>
                            </Offer>
                            <img src={tela1Mais} />

                        </ImgArea>
                        <AreaInfo>
                            <TextInfo>
                                <h5>Foto<b id="classic">Retrô</b>
                                    <p id="A5">(A5 quadrado)</p></h5>
                            </TextInfo>
                            <Price>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                            </Price>
                            <NewPrice>
                                <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                            </NewPrice>
                        </AreaInfo>
                        <ButtonStyle id="b-slide">Eu quero!</ButtonStyle>
                    </Product>
                    <Product>
                        <ImgArea>
                            <Offer>
                                <p><b>XX%</b><br />
                 OFF</p>
                            </Offer>
                            <img src={posterPremium1} />
                        </ImgArea>
                        <AreaInfo>
                            <TextInfo>
                                <h5>Poster<b id="classic">Premium</b>
                                    <p id="A5">(A5 quadrado)</p></h5>
                            </TextInfo>
                            <Price>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                            </Price>
                            <NewPrice>
                                <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                            </NewPrice>
                        </AreaInfo>
                        

                    </Product>
                    <Product>
                        <ImgArea>
                            <Offer>
                                <p><b>XX%</b><br />
                 OFF</p>
                            </Offer>
                            <img src={card1} />
                        </ImgArea>
                        <AreaInfo>
                            <TextInfo>
                                <h5>Ímã<b id="classic">Quadrado</b>
                                    <p id="A5">(Kit com 9 un)</p></h5>
                            </TextInfo>
                            <Price>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                            </Price>
                            <NewPrice>
                                <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                            </NewPrice>
                        </AreaInfo>
                        <ButtonStyle id="b-slide">Eu quero!</ButtonStyle>

                    </Product>
                    <Product>
                        <ImgArea>
                            <Offer>
                                <p><b>XX%</b><br />
                 OFF</p>
                            </Offer>
                            <img src={calendar} />
                        </ImgArea>
                        <AreaInfo>
                        <TextInfo>
                                <h5>Calendário<b id="classic">2022</b>
                                    <p id="A5">(De mesa)</p></h5>
                            </TextInfo>
                            <Price>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                            </Price>
                            <NewPrice>
                                <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                            </NewPrice>
                        </AreaInfo>
                        <ButtonStyle id="b-slide">Eu quero!</ButtonStyle>


                    </Product>
                    <Product>
                        <ImgArea>
                            <Offer>
                                <p><b>XX%</b><br />
                 OFF</p>
                            </Offer>
                            <img src={t1FotoL} />

                        </ImgArea>
                        <AreaInfo>
                            <TextInfo>
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
                        <ButtonStyle id="b-slide">Eu quero!</ButtonStyle>

                    </Product>
                    <Product> <ImgArea>
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
                    <ButtonStyle id="b-slide">Eu quero!</ButtonStyle>

                    </Product>
                    <Product> <ImgArea>
                        <Offer>
                            <p><b>XX%</b><br />
                 OFF</p>
                        </Offer>
                        <img src={tela1Mais} />

                    </ImgArea>
                    <AreaInfo>
                            <TextInfo>
                                <h5>Foto<b id="classic">Retrô</b>
                                    <p id="A5">(A5 quadrado)</p></h5>
                            </TextInfo>
                            <Price>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">XX,XX</p></div>

                            </Price>
                            <NewPrice>
                                <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> XX,XX</p></div>

                            </NewPrice>
                        </AreaInfo>
                        <ButtonStyle id="b-slide">Eu quero!</ButtonStyle>

                    </Product>


                </Carousel>
            </Slide>
        </>

    )
}

export default SlideTela1