import React from 'react'
import Card from './card';
import './expenselist.css';

const ExpenseList = () => {


    const list = [{
        title: "Made a Purchase",
        logo: "dsdsd",
        createdAt: Date.now(),
        amount : 1234
    },
    ]

    return (
        <>
            {
                list.length ? list.map((item) => {
                    return <Card item = {item}/>
                }) : null
            }
        </>
    )
}

export default ExpenseList
