import React from "react"
import { CardSlide, ButtonSlide, ImgProduct, PriceProduct, AreaButton, InfoProduct, Title, AreaText, Products, NewPrice, Offer, Product, AreaImgOffer, AreaImg } from "./style"
import tela1Mais from "../../images/tela1/tela1Mais.png"
import posterPremium1 from "../../images/tela1/posterPremium1.png"
import card1 from "../../images/tela2/card1.png"

const SlideMobile = () => {
    return (

        <CardSlide>
            <Title>
                <h1> Demais ofertas:</h1>
            </Title>

            <Products>
                <Product>


                    <AreaImgOffer>


                        <ImgProduct >
                            <img className="photo" src={tela1Mais} />
                        </ImgProduct>
                        <AreaImg >


                            <Offer>
                                <p><b>XX%</b><br />OFF</p>
                            </Offer>

                        </AreaImg>
                        <AreaText>
                            <InfoProduct>
                                <h5>Foto<b id="classic">Retrô</b>
                                    <p id="A5">(Kit com 20 un)</p></h5>
                            </InfoProduct>
                            <PriceProduct>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">139,90</p></div>
                                <NewPrice>
                                    <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> 50,00</p></div>

                                </NewPrice>
                            </PriceProduct>
                            <AreaButton>
                                <ButtonSlide >Eu quero!</ButtonSlide>

                            </AreaButton>
                        </AreaText>

                    </AreaImgOffer>


                </Product>


                <Product>

                    <AreaImgOffer>


                        <ImgProduct >
                            <img className="photo" src={posterPremium1} />
                        </ImgProduct>
                        <AreaImg >


                            <Offer>
                                <p><b>65%</b><br />OFF</p>
                            </Offer>

                        </AreaImg>
                        <AreaText id="info1">
                            <InfoProduct >
                                <h5>Poster<b id="classic">Premium</b></h5>
                            </InfoProduct>
                            <PriceProduct>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">139,90</p></div>
                                <NewPrice>
                                    <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> 50,00</p></div>

                                </NewPrice>
                            </PriceProduct>
                            <AreaButton>
                                <ButtonSlide >Eu quero!</ButtonSlide>

                            </AreaButton>
                        </AreaText>

                    </AreaImgOffer>

                </Product>
                <Product>

                    <AreaImgOffer>


                        <ImgProduct >
                            <img className="photo" src={card1} />
                        </ImgProduct>
                        <AreaImg >


                            <Offer>
                                <p><b>65%</b><br />OFF</p>
                            </Offer>

                        </AreaImg>
                        <AreaText id="info1">
                            <InfoProduct >
                                <h5>Ímã<b id="classic">Quadrado</b>
                                    <p id="A5">(Kit com 9 un)</p></h5>

                            </InfoProduct>
                            <PriceProduct>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">139,90</p></div>
                                <NewPrice>
                                    <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> 50,00</p></div>

                                </NewPrice>
                            </PriceProduct>
                            <AreaButton>
                                <ButtonSlide >Eu quero!</ButtonSlide>

                            </AreaButton>
                        </AreaText>

                    </AreaImgOffer>

                </Product>


                <Product>

                    <AreaImgOffer>


                        <ImgProduct >
                            <img className="photo" src={posterPremium1} />
                        </ImgProduct>
                        <AreaImg >


                            <Offer>
                                <p><b>65%</b><br />OFF</p>
                            </Offer>

                        </AreaImg>
                        <AreaText id="info1">
                            <InfoProduct id="calendar" >
                                <h5>Calendário<br/> <b id="classic">2022</b></h5>
                            </InfoProduct>
                            <PriceProduct>
                                <div class="ancient"> <p id="de">De</p> <p id="rs">R$</p> <p id="rs">139,90</p></div>
                                <NewPrice>
                                    <div class="div-new"> <p class="por">Por</p>  <p id="new">R$</p><p id="new"> 50,00</p></div>

                                </NewPrice>
                            </PriceProduct>
                            <AreaButton>
                                <ButtonSlide >Eu quero!</ButtonSlide>

                            </AreaButton>
                        </AreaText>

                    </AreaImgOffer>

                </Product>
            </Products>

        </CardSlide>
    )
}

export default SlideMobile