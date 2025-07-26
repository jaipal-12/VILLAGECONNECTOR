import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, 
  Heart, 
  Sprout, 
  Car, 
  Home,
  Users,
  ArrowRight,
  Shield,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  const services = [
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: 'Education',
      description: 'Digital literacy, adult education, and skill development programs',
      color: 'bg-blue-500',
      link: '/services?category=education'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Healthcare',
      description: 'Telemedicine, health insurance, and maternal care services',
      color: 'bg-red-500',
      link: '/services?category=healthcare'
    },
    {
      icon: <Sprout className="h-12 w-12" />,
      title: 'Agriculture',
      description: 'Modern farming techniques, crop insurance, and agricultural loans',
      color: 'bg-green-500',
      link: '/services?category=agriculture'
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: 'Travel',
      description: 'Village transport network and emergency medical transport',
      color: 'bg-purple-500',
      link: '/services?category=travel'
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: 'Living',
      description: 'Solar power, water purification, and financial literacy programs',
      color: 'bg-orange-500',
      link: '/services?category=living'
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '10,000+', label: 'Villagers Helped' },
    { icon: <Award className="h-8 w-8" />, value: '50+', label: 'Services Available' },
    { icon: <Shield className="h-8 w-8" />, value: '24/7', label: 'Support Available' },
    { icon: <Clock className="h-8 w-8" />, value: '3 Years', label: 'Serving Communities' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to VillageConnect
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Connecting rural communities with essential services for education, healthcare, agriculture, and daily living
            </p>
            {!user ? (
              <div className="space-x-4">
                <Link
                  to="/register"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            ) : (
              <Link
                to="/dashboard"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support across five key areas that matter most to rural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 group"
              >
                <div className={`w-20 h-20 ${service.color} rounded-lg flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <span className="text-green-600 font-medium group-hover:text-green-700 inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Rural Communities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                VillageConnect bridges the gap between rural communities and essential services. 
                We understand the unique challenges faced by people in villages and provide 
                simple, accessible solutions for education, healthcare, agriculture, travel, and daily living.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Easy-to-use platform designed for everyone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct connection to government and private services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 support and assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Free registration and enrollment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Join Our Community</h3>
              <p className="text-gray-600 mb-6">
                Ready to access services that can improve your life and your family's future? 
                Join thousands of villagers who are already benefiting from our platform.
              </p>
              {!user ? (
                <Link
                  to="/register"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <Link
                  to="/services"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;