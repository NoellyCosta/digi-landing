import React from "react"
import {HeaderContainer, ContentHeader, LogoMeliuz, Barra, FotoRegistro, ButtonHeader} from "./style"
import { useHistory } from "react-router-dom";
import {goToHomePage, goToHomePage2} from "../../routes/Coordinator"
import meliuzL1 from "../../images/tela1/meliuzL1.png"
import fotoRTela1 from "../../images/tela1/fotoRTela1.png"
import MediaQuery from "react-responsive"





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
            </ContentHeader>
            <ButtonHeader id="b-header"onClick={() => goToHomePage2(history)}>Ver Pagina2</ButtonHeader>
            <MediaQuery query="(min-device-width: 320px) and (max-device-width: 420px)">
                    <ButtonHeader />
                </MediaQuery>
        </HeaderContainer>
    )
}


export default Header;
