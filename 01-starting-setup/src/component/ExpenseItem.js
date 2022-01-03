import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js'

function ExpenseItem(props) {
    return ( <
        div className = 'expense-item' >
        <
        ExpenseDate date = { props.date }
        /> <
        div >
        <
        h2 className = 'expense-item_description' > { props.title } < /h2> <
        div className = 'expense-item_price' > $ { props.amount } < /div> <
        /div> <
        /div>
    );
}

export default ExpenseItem;

// burada .toISOString() yazmazsak hata aliriz. js de date objesini okunabilir yaziya en guzel bu sekilde dokebiliriz.
// $ AMBLEMINI DE SUSLU PARANTEZIN icine almadik daha sebebini demedi ama sayidan once dolar amblemi koyunca degiskene number atamamisiz gibi oluyor. hata aliyoruz