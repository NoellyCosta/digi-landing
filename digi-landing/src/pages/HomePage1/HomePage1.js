import React from "react"
import Banner from "../../components/Banner/BannerComponent"
import Header from "../../components/Header/Header"
import DemaisOfertasT1 from "../DemaisOfertasTela1/DemaisOfertasT1"
import OfertasEmDestaque from "../OfertasEmDestaque/OfertasEmDestaque"
import {ContainerHome} from "./style"



function HomePage1() {


    return (
        <div>
            <ContainerHome>
            <Header />
           <Banner/>
           <OfertasEmDestaque/>
           <DemaisOfertasT1/>
           </ContainerHome>
           
        </div>
    )
}

export default HomePage1