import { useState } from 'react/cjs/react.development';
import './Expenses.css' ; 
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../Card/Card';

const Expenses = props =>{

    const expenses = props.expenses
    const [filteredYear , setFilteredYear] = useState('')
    const filterExpenses = (filteredExpenses) =>{
        setFilteredYear(filteredExpenses)
        console.log(filteredExpenses)
    }
    return(
        <Card className='expenses'> 
        <ExpensesFilter
         OnFilterExpenses={filterExpenses}
         selected={filteredYear}
         /> 
        <h2>Let's get started!</h2>
        {
            expenses.map(item =>{
                return(
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                        />
                )
            })
        }
        </Card>
    )
}
export default Expenses ; 

  
        // <ExpenseItem
        //   title={expenses[0].title}
        //   amount={expenses[0].amount}
        //   date={expenses[0].date}
        //   />
  
        // <ExpenseItem
        //   title={expenses[1].title}
        //   amount={expenses[1].amount}
        //   date={expenses[1].date}
        //   />
  
        // <ExpenseItem
        //   title={expenses[2].title}
        //   amount={expenses[2].amount}
        //   date={expenses[2].date}
        //   />
  
        // <ExpenseItem
        //   title={expenses[3].title}
        //   amount={expenses[3].amount}
        //   date={expenses[3].date}
        // />
        