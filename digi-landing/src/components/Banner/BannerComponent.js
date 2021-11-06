import React from "react"
import {BannerContainer, Banner} from "./style"
import BannerT1 from "../../images/tela1/BannerT1.png"



const BannerComponent = () => {
    return (
        <>
        <BannerContainer>
            <Banner src={BannerT1} />
        </BannerContainer>
        </>
    )
}

export default BannerComponent;