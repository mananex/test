import '../styles/item.css';
import { Link } from 'react-router-dom';
import ProfileCompact from './ProfileCompact';

const Item = ({itemID}) => {
  const itemLink = "#";
  const imageLink = "images/box1.jpg";
  const itemName = "Item1";
  const shortDescription = "Some short description";

  return ( 
    <Link to={itemLink} className="item">
      <div className="item__image">
        <img src={imageLink} alt="" />
      </div>
      <div className="item__information">
        <div className="item__information__name">{itemName}</div>
        <div className="item__information__shortdescr">{shortDescription}</div>
      </div>
      <ProfileCompact></ProfileCompact>
    </Link>
  );
}
 
export default Item;