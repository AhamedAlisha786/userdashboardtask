import { useState } from "react";
import { useUsers } from "@/context/UserContext.jsx";
import { X } from "lucide-react";
import "./CreateUserForm.css";

const CreateUserForm = ({ onClose }) => {
  const { addUser } = useUsers();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    companyName: "",
    street: "",
    city: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      name: form.name,
      username: form.username,
      email: form.email,
      phone: form.phone,
      website: form.website,
      company: { name: form.companyName, catchPhrase: "", bs: "" },
      address: {
        street: form.street,
        suite: "",
        city: form.city,
        zipcode: form.zipcode,
        geo: { lat: "0", lng: "0" },
      },
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create New User</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form-body">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username *</label>
            <input id="username" name="username" value={form.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" value={form.website} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input id="companyName" name="companyName" value={form.companyName} onChange={handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input id="city" name="city" value={form.city} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zipcode</label>
              <input id="zipcode" name="zipcode" value={form.zipcode} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input id="street" name="street" value={form.street} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-btn">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
