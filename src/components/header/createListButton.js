import { Button } from 'react-bootstrap';
import './Header.scss';
import { Link } from 'react-router-dom';
function createListButton() {
  return (
    <Button  className="createListButton linkEffect">
      <div className='button-padding '>Create a list</div>
       <svg className='button-padding' width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
<path d="M15.4375 8C15.4375 8.62191 14.9337 9.12535 14.3125 9.12535H9.25V14.1879C9.25 14.8098 8.74621 15.3125 8.125 15.3125C7.50379 15.3125 7 14.8098 7 14.1879V9.12535H1.9375C1.31629 9.12535 0.8125 8.62191 0.8125 8C0.8125 7.37809 1.31629 6.87535 1.9375 6.87535H7V1.81285C7 1.19094 7.50379 0.6875 8.125 0.6875C8.74621 0.6875 9.25 1.19094 9.25 1.81285V6.87535H14.3125C14.9348 6.875 15.4375 7.37773 15.4375 8Z"/>
</svg>
    </Button>
  );
}

export default createListButton;