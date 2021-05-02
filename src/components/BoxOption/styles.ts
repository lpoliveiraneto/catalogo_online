import styled from 'styled-components'

export const Containe = styled.div`

    background:#fff;
    border-radius:2px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    text-align:center;

`;

export const Footer = styled.footer`
    padding:2rem 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button{
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: var(--white);

        font-size:1rem;
        font-weight: 600;

        transition: filter 0.2s;
    };
`;

export const Header = styled.header`
    font-weight: 600;
    font-size: 2rem;
    padding: 0 2rem 1rem;
    border-bottom: 0.5px solid ;
`;

export const Principal = styled.main`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    font-family:'PT Sans', sans-serif;

    strong{
        font-size: 1.5rem;
        font-weight: 600;
        color:  #2e384d;
        margin:0.5rem 0.5rem;
    };
    img{
        padding:1rem 1rem;
    };

    p{
        font-size: 1.25rem;
    };
`;
