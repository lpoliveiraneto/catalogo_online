import React from 'react';

import { Containe, Footer, Header, Principal } from './styles'

const BoxOption: React.FC = () => {
    return(
        <Containe>
            <Header> Combo de Salgados</Header>
            <Principal>
                <img/>
                <strong>Escolha os Sabores</strong>
                <p>Coxinha</p>
                <p>Bolinha de pizza</p>
                <p>Bolinha de queijo</p>
                <p>Enroladinho de Salsicha</p>
                <p>Risole de carne</p>
                <p>Quibe</p>
                <p>Trouxinha de camarão</p>
                <p>Pastelzinho de carne seca</p>
            </Principal>

            <Footer>
                <button>Enviar</button>
                <button>Cancelar</button>
            </Footer>
        </Containe>
    )
}

export default BoxOption;
