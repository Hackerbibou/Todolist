
import CancelButton from '../buttons/cancelButton';
import DoneButton from '../buttons/doneButton';
import { Link } from 'react-router-dom';
function HeaderCreate(props) {
  return (
    <div className="HeaderCreate">
      <Link to='/' className='linkDec'><CancelButton/></Link>
      <DoneButton i={props.i}/>

    </div>
  );
}

export default HeaderCreate