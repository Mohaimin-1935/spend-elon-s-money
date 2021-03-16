import React from 'react'
import { useState } from 'react'
import {     
        Container, 
        Img,
        Title,
        Price,
        AmountControl,
        Input,
        Button,
    } from './productCardElement'

export default function ProductCard({ item, handleAdd, money, showMoney, }) {

    const [value, setValue] = useState(item.amount)
    const [disableAdd, setDisableAdd] = useState(false)
    const [disableRemove, setDisableRemove] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <Container>
            <Img 
                src={item.image}
                style={styles.img} 
            />
            <Title>{item.title}</Title>
            <Price>BDT {showMoney(item.price)}</Price>
            <AmountControl>
                <Button
                    style={disableRemove ? styles.buttonDisable : styles.buttonRemove}
                    onClick={() => {
                        if (item.amount > 0) {
                            setErrorMessage('')
                            setDisableRemove(false)
                            setDisableAdd(false)
                            setValue(item.amount - 1)
                            handleAdd(item.key, -1)

                            if (item.amount <= 1) {
                                setDisableRemove(true)
                            }
                        } else {
                            setDisableRemove(true)
                            setErrorMessage('Out of stock!')
                        }
                    }}
                >
                    -
                </Button>
                <Input
                    type='number' 
                    style={styles.input}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        if (e.target.value*item.price <= money && e.target.value >= 0) {
                            setErrorMessage('')
                            setDisableRemove(false)
                            handleAdd(item.key, e.target.value-item.amount)

                            if (item.price > money-item.price) {
                                setDisableAdd(true)
                            }
                        } else if (e.target.value*item.price > money) {
                            setErrorMessage('Not enought money!')
                        } else {
                            setDisableRemove(true)
                            setErrorMessage('Input positive number!')
                        }
                    }}
                />
                <Button
                    style={disableAdd ? styles.buttonDisable : styles.buttonAdd}
                    onClick={() => {
                        if (item.price <= money) {
                            setErrorMessage('')
                            setDisableAdd(false)
                            setDisableRemove(false)
                            setValue(item.amount + 1)
                            handleAdd(item.key,+1)

                            if (item.price > money-item.price) {
                                setDisableAdd(true)
                            }
                        } else {
                            setDisableAdd(true)
                            setErrorMessage('Not enough money!')
                        }
                    }}
                >
                    +
                </Button>
            </AmountControl>
            <p style={{color: '#ff005c'}}>{errorMessage}</p>
        </Container>
    )
}

const styles = {
    buttonAdd: {
        backgroundColor: 'blue',
        width: 50,
        padding: '0px',
        borderRadius: 4,
        backgroundColor: '#16c79a',
        fontSize: 24,
        fontWeight: '500',
    },
    buttonRemove: {
        backgroundColor: 'blue',
        width: 50,
        padding: '0px',
        borderRadius: 4,
        backgroundColor: '#ff005c',
        fontSize: 24,
        fontWeight: '500',
    },
    buttonDisable: {
        backgroundColor: 'blue',
        width: 50,
        padding: '0px',
        borderRadius: 4,
        backgroundColor: '#e7e6e1',
        color: '#1a1a2e',
        fontSize: 24,
        fontWeight: '500',
        cursor: 'not-allowed'
    },
}