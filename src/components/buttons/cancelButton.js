import './Button.scss';
import { Button } from 'react-bootstrap';

function cancelButton() {
  return (
    <button className="doneButton" >
      <svg width="12" height="18" viewBox="0 0 12 18"  xmlns="http://www.w3.org/2000/svg">
<path d="M7.87507 16.875C7.58721 16.875 7.29921 16.7651 7.07983 16.5454L0.329834 9.79541C-0.109619 9.35596 -0.109619 8.64404 0.329834 8.20459L7.07983 1.45459C7.51928 1.01514 8.2312 1.01514 8.67065 1.45459C9.1101 1.89404 9.1101 2.60596 8.67065 3.04541L2.71589 9L8.67135 14.9555C9.11081 15.3949 9.11081 16.1068 8.67135 16.5463C8.45163 16.766 8.16335 16.875 7.87507 16.875Z" />
</svg>
      Cancel
    </button>
  );
}

export default cancelButton;