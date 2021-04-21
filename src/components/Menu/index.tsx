import React from 'react'
import CardProduct from '../Card';
import Header from '../Header';

import { StyledMenu } from './styles';

export const Menu: React.FC = () =>{
    return(
        <>
            <Header/>

            <StyledMenu>
                <a href="/">
                    <span role="img" aria-label="about us"></span>
                    Pizzas
                </a>
                <a href="/">
                    <span role="img" aria-label="price"></span>
                    Salgados
                </a>
                <a href="/">
                    <span role="img" aria-label="contact"></span>
                    Contatos
                </a>
            </StyledMenu>
        </>
    );
}
