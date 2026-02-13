import { useParams, Link } from "react-router-dom";
import { useUsers } from "@/context/UserContext.jsx";
import { ArrowLeft, Mail, Phone, Globe, Building2, MapPin } from "lucide-react";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const { users, loading } = useUsers();
  const user = users.find((u) => u.id === Number(id));

  if (loading) {
    return <div className="center-message">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="center-message">
        <p>User not found</p>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }
  return (
    <div className="user-details">
      <header className="user-details-header">
        <div className="user-details-header-inner">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Dashboard
          </Link>
          <div className="user-details-profile">
            <div className="user-details-avatar">{user.name.charAt(0)}</div>
            <div>
              <h1 className="user-details-name">{user.name}</h1>
              <p className="user-details-username">@{user.username}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="user-details-main">
        <section className="details-section">
          <h2>Contact Information</h2>
          <div className="details-row">
            <Mail /> <span>{user.email}</span>
          </div>
          <div className="details-row">
            <Phone /> <span>{user.phone}</span>
          </div>
          <div className="details-row">
            <Globe /> <span>{user.website}</span>
          </div>
        </section>

        <section className="details-section">
          <h2>Company</h2>
          <div className="details-row">
            <Building2 /> <span>{user.company.name}</span>
          </div>
          <p className="details-sub-text italic">"{user.company.catchPhrase}"</p>
          <p className="details-sub-text">{user.company.bs}</p>
        </section>

        <section className="details-section">
          <h2>Address</h2>
          <div className="details-row">
            <MapPin />
            <span>{user.address.street}, {user.address.suite}</span>
          </div>
          <p className="details-sub-text">
            {user.address.city}, {user.address.zipcode}
          </p>
        </section>

        <section className="details-section">
          <h2>Geo Location</h2>
          <div className="geo-grid">
            <div className="geo-item">
              <span>Latitude</span>
              <p>{user.address.geo.lat}</p>
            </div>
            <div className="geo-item">
              <span>Longitude</span>
              <p>{user.address.geo.lng}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDetails;
