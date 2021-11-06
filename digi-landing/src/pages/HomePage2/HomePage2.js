import React from "react"
import Header from "../../components/Header/Header"
import Banner2 from "../../components/Banner2/Banner2"
import {ContainerHome2, } from "./style"
import DemaisOfertasT1 from "../DemaisOfertasTela1/DemaisOfertasT1"
import OfertasEmDestaque from "../OfertasEmDestaque/OfertasEmDestaque"


function HomePage2() {


    return (
        
         <ContainerHome2>
         <Header />
        <Banner2/>
        <OfertasEmDestaque/>
        <DemaisOfertasT1/>
        </ContainerHome2>
           
        
    )
}

export default HomePage2