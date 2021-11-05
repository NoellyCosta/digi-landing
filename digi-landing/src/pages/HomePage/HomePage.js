import React from "react"
import Header from "../../components/Header"
import bannerPrincipal from "../../assets/images/Banner-desktop.png"
import {BannerContainer, Banner} from "./style"



function HomePage() {


    return (
        <div>
            <Header />
            <BannerContainer>
                <Banner src={bannerPrincipal} />
            </BannerContainer>
        </div>
    )
}

export default HomePage