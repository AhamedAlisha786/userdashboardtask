import { Link } from "react-router-dom";
import { Mail, Phone, Building2 } from "lucide-react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`} className="user-card">
      <div className="user-card-inner">
        <div className="user-card-header">
          <div className="user-avatar">{user.name.charAt(0)}</div>
          <div>
            <h3 className="user-name">{user.name}</h3>
            <p className="user-username">@{user.username}</p>
          </div>
        </div>
        <div className="user-card-info">
          <div className="user-info-row">
            <Mail />
            <span>{user.email}</span>
          </div>
          <div className="user-info-row">
            <Phone />
            <span>{user.phone}</span>
          </div>
          <div className="user-info-row">
            <Building2 />
            <span>{user.company.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
