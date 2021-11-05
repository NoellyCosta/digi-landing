import React from "react"
import Header from "../../components/Header/Header"
import bannerPrincipal from "../../assets/images/Banner-desktop.png"
import {BannerContainer, Banner} from "./style"



function HomePage1() {


    return (
        <div>
            <Header />
            <BannerContainer>
                <Banner src={bannerPrincipal} />
            </BannerContainer>
           
        </div>
    )
}

export default HomePage1