import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ProductData from '../productData.json'
import ProductCard from './productCard'
import Reciept from './reciept'

import {
    Container,
    Header,
    HeaderText,
    ItemContainer,
    Item,
    RecieptButton
} from './productElement'


const TOTALMONEY = 15667000000000

export default function Product() {

    const [money, setMoney] = useState(TOTALMONEY)
    const [productDataUpdate, setProductDataUpdate] = useState(ProductData)
    const [showReciept, setShowReciept] = useState(false)

    function showMoney(number) {
        const text = number.toString()
        let x = text.length % 3
        let ret = ''
        ret += text[0]
        
        for (let i = 1; i < text.length; i++) {
            if (i%3 === x) {
                ret += ','
                ret += text[i]
            } else {
                ret += text[i]
            }
        }

        return ret
    }

    function handleAdd(key, amount) {
        productDataUpdate.map((item) => {
            if (key === item.key) {
                setMoney(prevMoney => prevMoney - amount*item.price)
            }
        })
        setProductDataUpdate(prevState => {
            return prevState.map(item => ({
                ...item,
                amount: item.key===key ? item.amount+amount : item.amount
            }))
        })
    }

    return (
        showReciept ? 
        
            <Reciept 
                productDataUpdate={productDataUpdate}
                setShowReciept={setShowReciept}
                TOTALMONEY={TOTALMONEY}
                money={money}
                showMoney={showMoney}
            /> :

            <Container>
                <Header>
                    <HeaderText>{showMoney(money)} Tk</HeaderText>
                </Header>

                <ItemContainer>
                    {productDataUpdate.map(item => (
                        <Item>
                            <ProductCard 
                                item={item}
                                handleAdd={handleAdd}
                                money={money}
                                showMoney={showMoney}
                            />
                        </Item>
                    ))}
                </ItemContainer>

            <Reciept 
                productDataUpdate={productDataUpdate}
                setShowReciept={setShowReciept}
                TOTALMONEY={TOTALMONEY}
                money={money}
                showMoney={showMoney}
            />

                <RecieptButton to='/reciept'
                    onClick={() => setShowReciept(true)}
                >
                    Show Reciept
                </RecieptButton>
            </Container>
        
    )
}

// const styles = {
//     container: {
//         position: 'relative',
//     },
//     header: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 6,
//         backgroundColor: '#ff005c',
//         marginBottom: 8,
//         textAlign: 'center',
//         width: '100%',
//         position: 'sticky',
//         top: 0,
//     },
//     headerText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#f4f9f9',
//     },
//     item: {
//         padding: 12,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         margin: '16px 32px',
//         boxShadow: '1px 1px 5px rgba(0,0,0,.3)',
//     },
//     button: {
//         backgroundColor: '#16c79a',
//         bottom: 0,
//         position: 'sticky',
//         padding: '4px 18px',
//         borderRadius: 0,
//         width: '100%',
//     }
// }