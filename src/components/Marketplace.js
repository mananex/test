import { Link } from "react-router-dom";
import '../styles/marketplace.css';
import ItemList from './ItemList';

const Marketplace = () => {
  return ( 
    <div className="marketplace">
      <div className="marketplace__search">
          <Link to="/profile" className="marketplace__search__back">Back to profile</Link>
          <div className="marketplace__search__input__title">Seperate keywords with ","</div>
          <input type="text" className="marketplace__search__input"/>
          <button className="marketplace__search__button">SEARCH</button>
      </div>
      <div className="marketplace__active">
        <div className="marketplace__active__list">
          <ItemList ></ItemList>
        </div>
      </div>
    </div>
  );
}
 
export default Marketplace;