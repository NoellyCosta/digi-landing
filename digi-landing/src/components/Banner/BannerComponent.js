import React from "react"
import { BannerContainer, Banner } from "./style"
import BannerT1 from "../../images/tela1/BannerT1.png"
import MediaQuery from "react-responsive";
import BannerMobile from "../BannerMobile/BannerMobile";



const BannerComponent = () => {
    return (
        <>
            <BannerContainer>
                <Banner src={BannerT1} />
                <MediaQuery query="(min-device-width: 320px) and (max-device-width: 420px)">
                    <BannerMobile />
                </MediaQuery>
            </BannerContainer>
        </>
    )
}

export default BannerComponent;