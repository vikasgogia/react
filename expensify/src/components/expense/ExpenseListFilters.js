import { useDispatch, useSelector } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../reducers/filters';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseListFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const onTextChange = (e) => dispatch(setTextFilter(e.target.value));

    const onSortByChange = (e) => {
        if(e.target.value === "date") {
            dispatch(sortByDate());
        }
        else if(e.target.value === "amount") {
            dispatch(sortByAmount());
        }
    }

    const onStartDateChange = (date) => {
        if(date) {
            dispatch(setStartDate(Math.floor(date.getTime())));
        }
    }

    const onEndDateChange = (date) => {
        if(date) {
            dispatch(setEndDate(Math.floor(date.getTime())));
        }
    }

    return (
        <div>
            <input type="text" defaultValue={filters.text} onChange={onTextChange}/>
            <select value={filters.sortBy} onChange={onSortByChange} >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            
            <span>Start Date:</span>
            <DatePicker
                selected={filters.startDate ? new Date(filters.startDate) : null} 
                onChange={onStartDateChange} 
                placeholderText="Select Start Date"/>

            <span>End Date:</span>
            <DatePicker 
                selected={filters.endDate ? new Date(filters.endDate) : null} 
                onChange={onEndDateChange} 
                placeholderText="Select End Date"/>
        </div>
    );
};

export default ExpenseListFilters;