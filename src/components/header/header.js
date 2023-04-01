import './Header.scss';
import CreateButton from '../buttons/createButton';
function HeaderComponent() {
  return (
    <div className="HeaderComponent" >
      <h1>List</h1>
      <CreateButton/>
    </div>
  );
}

export default HeaderComponent;