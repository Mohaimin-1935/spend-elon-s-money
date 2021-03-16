import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    padding: 30px;

    @media (min-width: 620px) {
        max-width: 550px;
        margin: 0 auto;
    }
`

export const Title = styled.h1`
    text-align: center;
    text-decoration: underline;
    margin-bottom: 24px;
`

export const PercentText = styled.p`
    max-width: 350px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    background-color: #e7e6e1;
    padding: 16px;
    text-align: center;
    border-radius: 16px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.3);
    margin-bottom: 24px;

    @media (min-width: 620px) {
        margin-bottom: 42px;
    }
`

export const SingleReciept = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ItemTitle = styled.p`
    font-size: 18px;
`

export const ItemPrice = styled.p`
    font-size: 18px;
`

export const HomeButton = styled(Link)`
    padding: 8px 20px;
    margin: 24px auto;
    width: 180px;
    text-align: center;

    @media (min-width: 620px) {
        margin: 0;
    }
`

export const ResumeButton = styled.button`
    padding: 8px 20px;
    background-color: #16c79a;
    width: 180px;
    text-align: center;

`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px auto;

    @media (min-width: 620px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`