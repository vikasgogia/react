import React, { useState } from 'react';

const ExpenseForm = () => {

    const [description, setDescription] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState('');

    const onDescriptionChange = (e) => setDescription(e.target.value);
    const onNoteChange = (e) => setNote(e.target.value);
    const onAmountChange = (e) => {
        const amt = e.target.value;
        // ^\d* -> must start with digit and could be any length
        // ()? -> conditional
        // (\.\d{0,2})? -> conditional decimals upto 2 decimal place
        if(amt.match(/^\d*(\.\d{0,2})?$/)) {
            setAmount(amt);
        }
    }

    return (
        <div>
            <form>
                <input type='text' autoFocus={true} placeholder='Description' defaultValue={description} onChange={onDescriptionChange}/>
                <input type='text' placeholder='Amount' defaultValue={amount} onChange={onAmountChange}/>
                <textarea placeholder='Add a note (optional)' defaultValue={note} onChange={onNoteChange}/>
                <button>Add expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;