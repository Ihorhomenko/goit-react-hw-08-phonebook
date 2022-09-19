import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import Form from 'react-bootstrap/Form';
import './filter.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInputFilter = e => {
    const filterValue = e.currentTarget.value;
    dispatch(addFilter(filterValue));
  };

  return (
    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={handleInputFilter}
      />
    </Form.Group>
  );
};

export default Filter;
