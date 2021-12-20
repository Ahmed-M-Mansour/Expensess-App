import './NewExpense.css' ; 
import ExpenseFoem from '../ExpenseFoem/ExpenseFoem';
const NewExpense = props =>{
    const saveExpenseData = (enteredData)=>{
        const expenseData =  {
                ...enteredData , 
                id: Math.random().toString() 
               }
               props.onAddNewExpense(expenseData)
    }
    return (
            <div className='new-expense'> 
                <ExpenseFoem onSaveExpenseData={saveExpenseData} /> 
            </div>
        )
}
export default NewExpense ; 