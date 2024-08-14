import '../styles/item.css';
import { Link } from 'react-router-dom';

const Item = ({itemLink, imageLink, itemName, shortDescription}) => {
  return ( 
    <Link to={itemLink} className="item">
      <div className="item__image">
        <img src={imageLink} alt="" />
      </div>
      <div className="item__information">
        <div className="item__information__name">{itemName}</div>
        <div className="item__information__shortdescr">{shortDescription}</div>
      </div>
    </Link>
  );
}
 
export default Item;