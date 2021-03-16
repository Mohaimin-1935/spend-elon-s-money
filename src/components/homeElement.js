import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 10%;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media (min-width: 1100px) {
        padding: 0;     
        max-width: 900px;
        margin: 0 auto;
    }
`
export const Img = styled.img`
    height: 150px;
    border-radius: 50%;
    border: 4px solid #16c79a;
    margin-bottom: 16px;
    position: relative;

    @media (min-width: 620px) {
        height: 180px;
        border-width: 6px;
    }
`
export const Title= styled.h1` 
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
    
    @media (min-width: 620px) {
        font-size: 32px;
    }
`
export const Paragraph= styled.p`
    text-align: center;
    margin-bottom: 24px;
    
    @media (min-width: 620px) {
        font-size: 18px;
    }
`
export const Button= styled(Link)` 
    display: inline-block;
    border: none;
    background: none;
    font: inherit;
    font-size: 16px;
    background-color: #ff005c;
    color: #f9f3f3;
    padding: 12px 24px;
    font-weight: 700;
    border-radius: 8px;
`