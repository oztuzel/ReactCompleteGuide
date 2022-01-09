import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js' ;
import React, { useState } from 'react' ;

function ExpenseItem(props) {

    const[title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Clicked!!');
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div>
                <h2 className='expense-item_description'>{title}</h2>
                <div className='expense-item_price'>${props.amount} </div>
            </div>
            <button onClick = {clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;


