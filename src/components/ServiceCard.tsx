import React from 'react';
import { Service } from '../types/user';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, 
  Heart, 
  Sprout, 
  Car, 
  Home,
  Clock,
  Users,
  CheckCircle,
  Award,
  Play,
  Video
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onEnroll?: (serviceId: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEnroll }) => {
  const { user } = useAuth();
  const isEnrolled = user?.enrolledServices.includes(service.id) || false;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education': return <BookOpen className="h-6 w-6" />;
      case 'healthcare': return <Heart className="h-6 w-6" />;
      case 'agriculture': return <Sprout className="h-6 w-6" />;
      case 'travel': return <Car className="h-6 w-6" />;
      case 'living': return <Home className="h-6 w-6" />;
      default: return <Home className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education': return 'bg-blue-500';
      case 'healthcare': return 'bg-red-500';
      case 'agriculture': return 'bg-green-500';
      case 'travel': return 'bg-purple-500';
      case 'living': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg text-white ${getCategoryColor(service.category)}`}>
          {getCategoryIcon(service.category)}
        </div>
        {isEnrolled && (
          <div className="flex items-center text-green-600">
            <CheckCircle className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">Enrolled</span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>

      <div className="space-y-3 mb-6">
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-2" />
          <span>Provider: {service.provider}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>Duration: {service.duration}</span>
        </div>
        {service.videos && service.videos.length > 0 && (
          <div className="flex items-center text-sm text-gray-500">
            <Video className="h-4 w-4 mr-2" />
            <span>{service.videos.length} video{service.videos.length > 1 ? 's' : ''} available</span>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.requirements.map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
          <Award className="h-4 w-4 mr-1" />
          Benefits:
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {isEnrolled && service.videos && service.videos.length > 0 && (
        <button
          onClick={() => alert('Please go to your Dashboard to watch videos for enrolled services!')}
          className="w-full py-2 px-4 border border-green-600 text-green-600 hover:bg-green-50 rounded-md font-medium transition-colors flex items-center justify-center"
        >
          <Play className="h-4 w-4 mr-2" />
          Watch Videos ({service.videos.length})
        </button>
      )}

      {user && onEnroll && (
        <button
          onClick={() => onEnroll(service.id)}
          disabled={isEnrolled}
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            isEnrolled
              ? 'bg-green-100 text-green-700 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isEnrolled ? 'Already Enrolled' : 'Enroll Now'}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;