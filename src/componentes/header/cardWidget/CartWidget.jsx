import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CartWidget() {
  return (
    <>
    
    <FontAwesomeIcon icon="fa-solid fa-shop" />
      <Button variant="primary">+</Button>{' '}
      <p>0</p>
      <Button variant="primary">+</Button>{' '}
    </>
  );
}

export default CartWidget;