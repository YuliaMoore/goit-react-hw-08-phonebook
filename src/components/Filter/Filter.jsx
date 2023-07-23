import { useSelector, useDispatch } from 'react-redux';
import { changeFilterRedux } from 'redux/filterSlice';
import { Label, Text, Input } from './Filter.styled';

function Filter() {
  const filterRedux = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changeFieldFilter = e =>
    dispatch(changeFilterRedux(e.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filterRedux} onChange={changeFieldFilter} />
    </Label>
  );
}

export default Filter;
