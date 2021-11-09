import React from "react"
import Banner from "../../components/Banner/BannerComponent"
import Header from "../../components/Header/Header"
import DemaisOfertasT1 from "../DemaisOfertasTela1/DemaisOfertasT1"
import OfertasEmDestaque from "../OfertasEmDestaque/OfertasEmDestaque"
import {ContainerHome} from "./style"
import "./home.css"


function HomePage1() {


    return (
        <div className="centerHome">
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