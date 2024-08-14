import "../styles/profileCompact.css";

const ProfileCompact = ({imageLink, firstName, lastName}) => {
  return ( 
    <div className="profile__compact">
      <div className="profile__compact__photo">
        <img src={imageLink} alt="" />
      </div>
      <div className="profile__compact__names">
        <div className="profile__compact__names__firstname">{firstName}</div>
        <div className="profile__compact__names__lastname">{lastName}</div>
      </div>
    </div>
  );
}
 
export default ProfileCompact;