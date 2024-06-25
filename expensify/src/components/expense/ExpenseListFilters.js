import { useDispatch, useSelector } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../reducers/filters';

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

    return (
        <div>
            <input type="text" defaultValue={filters.text} onChange={onTextChange}/>
            <select value={filters.sortBy} onChange={onSortByChange} >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    );
};

export default ExpenseListFilters;