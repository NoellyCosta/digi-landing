import React from "react"
import SlideTela1 from "../../components/SlideTela1/SlideTela1"
import { SlideArea } from "./style"
import MediaQuery from "react-responsive";
import SlideMobile from "../../components/SlideMobile/SlideMobile"

const DemaisOfertasT1 = () =>{
    
    return (

        <SlideArea>
            <SlideTela1 />
            <MediaQuery query="(min-device-width: 320px) and (max-device-width: 420px)">
                    <SlideMobile />
                </MediaQuery>
        </SlideArea>

    )
}


export default DemaisOfertasT1