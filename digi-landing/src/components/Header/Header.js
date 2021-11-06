import React from "react"
import {HeaderContainer, ContentHeader, LogoMeliuz, Barra, FotoRegistro, ButtonHeader} from "./style"
import { useHistory } from "react-router-dom";
import {goToHomePage, goToHomePage2} from "../../routes/Coordinator"
import meliuzL1 from "../../images/tela1/meliuzL1.png"
import fotoRTela1 from "../../images/tela1/fotoRTela1.png"





const Header = () => {
    const history = useHistory();


    return(
        <HeaderContainer>
          <ContentHeader>
            <a onClick={() =>  goToHomePage(history)}>
                <LogoMeliuz src = {meliuzL1}/>
            </a>
            <Barra/>
            <FotoRegistro src={fotoRTela1}/>
            <ButtonHeader onClick={() => goToHomePage2(history)}>Ver Pagina2</ButtonHeader>
            </ContentHeader>
        </HeaderContainer>
    )
}


export default Header;
