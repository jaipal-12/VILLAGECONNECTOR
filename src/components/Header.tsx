import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, LogOut, Home } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8" />
            <span className="text-2xl font-bold">VillageConnect</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-green-200 transition-colors">
                  Dashboard
                </Link>
                <Link to="/services" className="hover:text-green-200 transition-colors">
                  Services
                </Link>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-green-200 transition-colors">
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-green-700 hover:bg-green-800 px-3 py-2 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-green-200 transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md transition-colors">
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;