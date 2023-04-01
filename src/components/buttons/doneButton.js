import { Link } from 'react-router-dom';
import './Button.scss';
import { Button } from 'react-bootstrap';



function doneButton(props) {
  return (
  <button className="doneButton" onClick={props.i}>
      Done
    </button>
  );
}

export default doneButton;