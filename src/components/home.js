import React from 'react'

import {
    Container,
    Img,
    Paragraph,
    Title,
    Button,
} from './homeElement'


export default function Home({  }) {

    return(
        <Container>
            <Img 
                src="/img/elon-mask.jpg" 
            />
            <Paragraph>
                SpaceX এবং Tesla Inc. এর এলন মাস্কের
                সম্পদের পরিমাণ 185 বিলিয়ন মার্কিন
                ডলার ছাড়িয়ে গেছে, বাংলাদেশি টাকায় যা প্রায় 
                15,667,348,450 টাকা।
            </Paragraph>
            <Title>
                আপনি এলন মাস্ক হলে কী করে খরচ করতেন এত টাকা?
            </Title>
            <Button to='/product'
                style={styles.button}
            >
                টাকা উড়ানো শুরু করুন
            </Button>
        </Container>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column', 
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img : {
        height: 150,
        width: 150,
        borderRadius: 150,
        border: '4px solid #ff005c',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 16,
        marginVertical: 16,
        textAlign: 'center',
        marginBottom: 16,
    },
    paragraph: {
        marginVertical: 16,
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        display: 'inline-block',
        border: 'none',
        background: 'none',
        font: 'inherit',
        fontSize: 16,
        backgroundColor: '#ff005c',
        color: '#f9f3f3',
        padding: '12px 24px',
        fontWeight: '700',
        borderRadius: '8px',
    }

}