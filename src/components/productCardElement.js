import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    margin-bottom: 8px;
    height: 150px;
    max-width: 220px;
`

export const Title = styled.p`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
`

export const Price = styled.p`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    /* color: ; */
`

export const AmountControl = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Input = styled.input`
    border: none;
    outline: none;
    border: 2px solid #1a1a2e;
    border-radius: 6px;
    width: 30%;
    height: 40px;
    text-align: center;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
    -moz-appearance: textfield;
    }
`

export const Button = styled.button`

`