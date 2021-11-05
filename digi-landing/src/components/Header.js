import React from "react"
import meliuz from "../assets/images/meliuz-logo.png"
import {HeaderContainer, LogoMeliuz, Barra, FotoRegistro} from "./style"
import { useHistory } from "react-router-dom";
import {goToHomePage} from "../routes/Coordinator"
import fotoRegistro from "../assets/images/logo-fr.png"




const Header = () => {
    const history = useHistory();


    return(
        <HeaderContainer>
          
            <a onClick={() =>  goToHomePage(history)}>
                <LogoMeliuz src={meliuz}/> 
            </a>
            <Barra/>
         < FotoRegistro src={fotoRegistro} />
        </HeaderContainer>
    )
}

export default Header;