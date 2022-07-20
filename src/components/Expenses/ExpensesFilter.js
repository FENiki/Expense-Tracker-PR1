
import React from "react";
import './ExpensesFilter.css'

const ExpensesFilter = (props) =>{
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
     return (
         <div className="expenses-filter">
             <div className="expense-filter__control">
                 <label>Filter by Year</label>
                 <select vlaue={props.selected} onchnage={dropdownChangeHandler}>
                     <option value='2019'>2019</option>
                     <option value='2020'>2020</option>
                     <option value='2021'>2021</option>
                     <option value='2022'>2022</option>
                 </select>
             </div>
         </div>
     );
};

export default ExpensesFilter;