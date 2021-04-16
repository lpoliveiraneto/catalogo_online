import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.theme.red.background};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    border-radius: 0.25rem;

    @media(max-width:'576px'){
        width: 100%
    }

    a{
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: ${props => props.theme.white.primary};
        text-decoration: none;
        transition: color 0.3s linear;

        @media(max-width: '576px'){
            font-size: 1.5rem;
            text-align: center;
        }

        &hover{
            color: '#343078';
        }
    }

`;
