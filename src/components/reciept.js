import React from 'react'

import {Title,
        PercentText,
        Container,
        SingleReciept,
        ItemTitle,
        ItemPrice,
        HomeButton,
        ResumeButton,
        ButtonWrapper,
    } from './recieptElement'

export default function Reciept({productDataUpdate, setShowReciept, TOTALMONEY, money, showMoney, }) {

    const boughtItems = productDataUpdate.filter(item => item.amount > 0)


    return (
        <Container>
            <Title>খরচনামা</Title>

            <PercentText>আপনি এলন মাস্কের মোট সম্পত্তির <span style={{fontWeight: 'bold'}}>{((TOTALMONEY-money)/TOTALMONEY * 100).toFixed(4)}%</span> খরচ করেছেন!</PercentText>

            {boughtItems.map((item) => (
                <SingleReciept>
                    <ItemTitle>{item.title} x{item.amount} </ItemTitle>
                    <ItemPrice>Tk {showMoney(item.price*item.amount)}</ItemPrice>
                </SingleReciept>
            ))}

            <SingleReciept style={{borderTop: '2px solid #1a1a2e', paddingTop: 16}}>
                <ItemTitle>মোট খরচ</ItemTitle>
                <ItemPrice>Tk {showMoney(TOTALMONEY-money)}</ItemPrice>
            </SingleReciept>
            <SingleReciept>
                <ItemTitle>বাকি আছে</ItemTitle>
                <ItemPrice>Tk {showMoney(money)}</ItemPrice>
            </SingleReciept>

            

            <ButtonWrapper>
                <HomeButton to='/'
                >
                    Start Again
                </HomeButton>
                <ResumeButton 
                    onClick={() => setShowReciept(false)}
                >
                    Resume Shopping
                </ResumeButton>
            </ButtonWrapper>
            <p style={{textAlign: 'center'}}>© <a style={{background: 'none', color: '#1a1a2e', fontWeight: '500', padding: 0}} href=''>Mohaiminul Islam</a></p>
        </Container>
    ) 
}