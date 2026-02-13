import { useState } from "react";
import { useUsers } from "@/context/UserContext.jsx";
import UserCard from "@/components/UserCard.jsx";
import CreateUserForm from "@/components/CreateUserForm.jsx";
import { Search, Plus, Users } from "lucide-react";
import "./index.css";

const Index = () => {
  const { filteredUsers, loading, error, searchQuery, setSearchQuery } = useUsers();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-header-inner">
          <div className="dashboard-title-row">
            <Users />
            <h1>User Dashboard</h1>
          </div>
          <button className="add-user-btn" onClick={() => setShowForm(true)}>
            <Plus size={16} /> Add User
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="search-wrapper">
          <Search />
          <input
            className="search-input"
            placeholder="Search users by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading && <div className="loading-text">Loading users...</div>}
        {error && <div className="error-text">{error}</div>}

        {!loading && !error && (
          <div className="user-grid">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
            {filteredUsers.length === 0 && (
              <div className="empty-text">No users found matching "{searchQuery}"</div>
            )}
          </div>
        )}
      </main>

      {showForm && <CreateUserForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Index;
