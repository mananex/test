import { Link } from "react-router-dom";
import ProfileCompact from "./ProfileCompact";
import "../styles/profile.css";
import ItemList from "./ItemList";

const Profile = () => {
  return ( 
    <div className="profile">
      <div className="profile__information">
        <div className="profile__head">
          <ProfileCompact imageLink={"images/user.jpg"} firstName={"John"} lastName={"Doodle"}/>
        </div>
        <div className="profile__information__email field">
          <div className="profile__information__email__label">Email:</div>
          <input className="profile__information__email__input" type="email" placeholder="your email here"/>
        </div>
        <div className="profile__information__age field">
          <div className="profile__information__age__label">Age:</div>
          <input className="profile__information__age__input" type="number" placeholder="your email here"/>
        </div>
        <button className="profile__information__leave__button">Log out</button>
      </div>
      <div className="profile__active">
        <Link to="/additem" className="profile__active__add__item">+</Link>
        <header className="profile__active__header">
          <Link to="/" className="profile__active__header-link">
            <div className="box box1"></div>
            <div className="box box2"></div>
            Main page</Link>
          <Link to="/marketplace" className="profile__active__header-link">
            <div className="box box1"></div>
            <div className="box box2"></div>
            Marketplace
          </Link>
        </header>
        <div className="profile__active__items">
          {
            false && <div className="profile__active__items__noitems">
            <div className="profile__active__items__noitems__text">No items here :(</div>
            <Link to="#" className="profile__active__items__noitems__link">Add new item</Link>
            </div>
          }
          <ItemList></ItemList>
        </div>
      </div>
    </div>
  );
}
 
export default Profile;