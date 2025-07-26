import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import VideoPlayer from '../components/VideoPlayer';
import { 
  BookOpen, 
  Heart, 
  Sprout, 
  Car, 
  Home,
  User,
  Calendar,
  Award,
  ArrowRight,
  Bell,
  Play,
  Video
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user, enrollInService } = useAuth();
  const [videoPlayerOpen, setVideoPlayerOpen] = React.useState(false);
  const [selectedServiceVideos, setSelectedServiceVideos] = React.useState<any[]>([]);

  if (!user) {
    return null;
  }

  const enrolledServices = services.filter(service => 
    user.enrolledServices.includes(service.id)
  );

  const enrolledServicesWithVideos = enrolledServices.filter(service => 
    service.videos && service.videos.length > 0
  );
  const recentServices = services.slice(0, 3);

  const openVideoPlayer = (videos: any[]) => {
    setSelectedServiceVideos(videos);
    setVideoPlayerOpen(true);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education': return <BookOpen className="h-5 w-5" />;
      case 'healthcare': return <Heart className="h-5 w-5" />;
      case 'agriculture': return <Sprout className="h-5 w-5" />;
      case 'travel': return <Car className="h-5 w-5" />;
      case 'living': return <Home className="h-5 w-5" />;
      default: return <Home className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education': return 'text-blue-600 bg-blue-100';
      case 'healthcare': return 'text-red-600 bg-red-100';
      case 'agriculture': return 'text-green-600 bg-green-100';
      case 'travel': return 'text-purple-600 bg-purple-100';
      case 'living': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-green-100 mb-4">
                From {user.village}, {user.state}
              </p>
              <div className="flex items-center text-green-100">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Member since {new Date(user.joinedDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/profile"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <User className="h-5 w-5 mr-2" />
                View Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Services Enrolled</h3>
                <p className="text-3xl font-bold text-blue-600">{user.enrolledServices.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Available Services</h3>
                <p className="text-3xl font-bold text-green-600">{services.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                <p className="text-3xl font-bold text-purple-600">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Enrolled Services */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Enrolled Services</h2>
              <Link
                to="/services"
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                Browse All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {enrolledServices.length > 0 ? (
              <div className="space-y-4">
                {enrolledServices.map((service) => (
                  <div key={service.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg ${getCategoryColor(service.category)} mr-3`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{service.provider}</p>
                          <p className="text-sm text-gray-500">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Enrolled
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No enrolled services yet</h3>
                <p className="text-gray-600 mb-4">Start exploring our services to improve your life and community</p>
                <Link
                  to="/services"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Browse Services
                </Link>
              </div>
            )}
          </div>

          {/* Recent Notifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">New Education Program Available</h4>
                <p className="text-sm text-gray-600">A new digital literacy program has been launched for rural communities.</p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">Health Camp Scheduled</h4>
                <p className="text-sm text-gray-600">Free health checkup camp will be organized in your area next week.</p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-medium text-gray-900">Agricultural Subsidy Update</h4>
                <p className="text-sm text-gray-600">New subsidies available for organic farming equipment.</p>
                <p className="text-xs text-gray-500 mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Learning Section */}
        {enrolledServicesWithVideos.length > 0 && (
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Video className="h-6 w-6 mr-2" />
                  Your Learning Videos
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {enrolledServicesWithVideos.map((service) => (
                  <div key={service.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg ${getCategoryColor(service.category)} mr-3`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.videos?.length} videos</p>
                      </div>
                    </div>
                    <button
                      onClick={() => openVideoPlayer(service.videos!)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Start Learning
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recommended Services */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
            <Link
              to="/services"
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onEnroll={enrollInService}
              />
            ))}
          </div>
        </div>

        {/* Video Player Modal */}
        <VideoPlayer
          videos={selectedServiceVideos}
          isOpen={videoPlayerOpen}
          onClose={() => setVideoPlayerOpen(false)}
        />
      </div>
    </div>
  );
};

export default DashboardPage;