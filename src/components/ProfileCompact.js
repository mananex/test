import "../styles/profileCompact.css";

const ProfileCompact = ({profileID}) => {
  return ( 
    <div className="profile__compact">
      <div className="profile__compact__photo">
        <img src="images/user.jpg" alt="" />
      </div>
      <div className="profile__compact__names">
        <div className="profile__compact__names__firstname">John</div>
        <div className="profile__compact__names__lastname">Doodle</div>
      </div>
    </div>
  );
}
 
export default ProfileCompact;