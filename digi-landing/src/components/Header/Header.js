import React from "react"
import {HeaderContainer, LogoMeliuz, Barra, FotoRegistro} from "./style"
import { useHistory } from "react-router-dom";
import {goToHomePage} from "../../routes/Coordinator"




export default function Header () {
    const history = useHistory();


    return(
        <HeaderContainer>
          
            <a onClick={() =>  goToHomePage(history)}>
            </a>
            <Barra/>
        </HeaderContainer>
    )
}

