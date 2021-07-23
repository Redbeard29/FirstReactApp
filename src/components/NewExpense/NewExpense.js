import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

let x = 5;

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: 'e' + (x.toString())
        };
        x++;
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;