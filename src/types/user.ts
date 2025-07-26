export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  village: string;
  state: string;
  enrolledServices: string[];
  profilePicture?: string;
  joinedDate: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'education' | 'healthcare' | 'agriculture' | 'travel' | 'living';
  description: string;
  provider: string;
  duration: string;
  requirements: string[];
  benefits: string[];
  videos?: Video[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'enrolledServices' | 'joinedDate'>) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  enrollInService: (serviceId: string) => void;
}