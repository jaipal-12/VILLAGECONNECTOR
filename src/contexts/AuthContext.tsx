import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types/user';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('villageConnectUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (email: string, _password: string): Promise<boolean> => {
    // Simulate API call - in real app, this would call your backend
    const storedUsers = JSON.parse(localStorage.getItem('villageConnectUsers') || '[]');
    const foundUser = storedUsers.find((u: User) => u.email === email);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('villageConnectUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (userData: Omit<User, 'id' | 'enrolledServices' | 'joinedDate'>): Promise<boolean> => {
    // Simulate API call
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      enrolledServices: [],
      joinedDate: new Date().toISOString(),
    };

    const storedUsers = JSON.parse(localStorage.getItem('villageConnectUsers') || '[]');
    storedUsers.push(newUser);
    localStorage.setItem('villageConnectUsers', JSON.stringify(storedUsers));
    
    setUser(newUser);
    localStorage.setItem('villageConnectUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('villageConnectUser');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('villageConnectUser', JSON.stringify(updatedUser));
      
      // Update in users list
      const storedUsers = JSON.parse(localStorage.getItem('villageConnectUsers') || '[]');
      const updatedUsers = storedUsers.map((u: User) => 
        u.id === user.id ? updatedUser : u
      );
      localStorage.setItem('villageConnectUsers', JSON.stringify(updatedUsers));
    }
  };

  const enrollInService = (serviceId: string) => {
    if (user && !user.enrolledServices.includes(serviceId)) {
      const updatedUser = {
        ...user,
        enrolledServices: [...user.enrolledServices, serviceId]
      };
      updateProfile(updatedUser);
    }
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    updateProfile,
    enrollInService,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};