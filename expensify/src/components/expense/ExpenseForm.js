import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = ({ onFormSubmit, expense = {}}) => {

    const [description, setDescription] = useState(expense.description || '');
    const [note, setNote] = useState(expense.note || '');
    const [amount, setAmount] = useState(expense.amount || '');
    const [createdAt, setCreatedAt] = useState(expense.createdAt ? new Date(expense.createdAt) : new Date());

    const onDescriptionChange = (e) => setDescription(e.target.value);

    const onNoteChange = (e) => setNote(e.target.value);

    const onAmountChange = (e) => {
        const amt = e.target.value;
        // ^\d+ -> must start with digit and could be any length (min 1)
        // ()? -> conditional
        // (\.\d{0,2})? -> conditional decimals upto 2 decimal place
        if(!amt || amt.match(/^\d+(\.\d{0,2})?$/)) {
            setAmount(amt);
        }
    }

    const onCreatedAtChange = (date) => {
        if(date) setCreatedAt(date);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(amount && description) {
            // called through props
            onFormSubmit({
                id: uuid(),
                description,
                note,
                amount,
                createdAt: Math.floor(createdAt.getTime())
            });
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text' 
                    autoFocus={true} 
                    placeholder='Description' 
                    defaultValue={description} 
                    onChange={onDescriptionChange} />

                <input type='text' placeholder='Amount' defaultValue={amount} onChange={onAmountChange}/>
                <textarea placeholder='Add a note (optional)' defaultValue={note} onChange={onNoteChange}/>
                <DatePicker selected={createdAt} onChange={onCreatedAtChange} />
                <button>Add expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;