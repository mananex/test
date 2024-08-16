import '../styles/additem.css';
import { useNavigate } from 'react-router-dom';
const AddItem = () => {
  const navigate = useNavigate()

  return ( 
    <div className="additem">
      <div className="additem__information">
        <div className="additem__information__photo">
          <div className="additem__information__photo__overlay">
            <div className="additem__information__photo__overlay__text">Upload product image</div>
          </div>
        </div>
        <input className="additem__information__name" type="text" placeholder="Product name"></input>
        <textarea className="additem__information__shortdescr" type="text" placeholder="Short description here"></textarea>
      </div>
      <div className="additem__data">
        <textarea className="additem__data__textarea" placeholder="Describe your product"></textarea>
        <button className="additem__data__submit button">Commit</button>
        <button className="additem__data__back button" onClick={() => (navigate(-1))}>Go back</button>
      </div>
    </div>
  );
}
 
export default AddItem;