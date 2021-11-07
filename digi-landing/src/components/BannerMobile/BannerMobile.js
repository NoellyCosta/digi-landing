import React from "react"
import {BannerContainerMobile, BannerArea2Mobile} from "./style"
import BG from "../../images/telaMobile/BG.png"



const BannerMobile = () => {
    return (
        <>
        <BannerContainerMobile>
            <BannerArea2Mobile src={BG} />
        </BannerContainerMobile>
        </>
    )
}

export default BannerMobile;