import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsOperation';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const Contacts = ({ contacts }) => {
  const dispatch = useDispatch()
  return (
    <ListGroup>
      {contacts.map(el => (
        <ListGroup.Item key={el.id} variant="dark" > 
        {`${el.name}: ${el.number}`}
        <Button variant="outline-danger" type='button' onClick={() => dispatch(removeContact(el.id))}>Delete</Button>
        </ListGroup.Item>
      ))}

    </ListGroup>
  );
};
// 

export default Contacts