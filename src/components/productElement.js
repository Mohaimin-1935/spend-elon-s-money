import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
`

export const Header = styled.div`
    justify-content: center;
    align-items: center;
    padding: 6px;
    background-color: #ff005c;
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
    position: sticky;
    top: 0;
`

export const HeaderText = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: #f4f9f9;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 40px;

    @media (min-width: 620px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 1100px;
    }

`

export const Item = styled.div`
    padding: 12px;
    background-color: #fff;
    border-radius: 8px;
    margin: 16px auto;
    max-width: 250px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.3);

    @media (min-width: 620px) {
        margin: 16px;
    }
`

export const RecieptButton = styled.button`
    background-color: #16c79a;
    bottom: 0;
    position: sticky;
    padding: 8px 18px;
    border-radius: 0;
    width: 100%;

    @media (min-width: 620px) {
        right: 16px;
        float: right;
        bottom: 16px;
        width: 160px;
        border-radius: 8px;
    }
`