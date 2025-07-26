import { Service } from '../types/user';

export const services: Service[] = [
  // Education Services
  {
    id: 'edu-1',
    title: 'Digital Literacy Program',
    category: 'education',
    description: 'Learn basic computer skills, internet usage, and digital tools for daily life.',
    provider: 'VillageConnect Education',
    duration: '4 weeks',
    requirements: ['Basic reading ability', 'Access to smartphone or computer'],
    benefits: ['Digital skills certification', 'Online banking knowledge', 'Government services access'],
    videos: [
      {
        id: 'edu-1-v1',
        title: 'Introduction to Smartphones',
        description: 'Learn the basics of using a smartphone for daily tasks',
        duration: '15:30',
        thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/hYB0mn5zh2c',
        category: 'Basic Skills'
      },
      {
        id: 'edu-1-v2',
        title: 'Online Banking Made Simple',
        description: 'Step-by-step guide to safe online banking',
        duration: '22:45',
        thumbnail: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/VV2g6zH9Vm4',
        category: 'Banking'
      },
      {
        id: 'edu-1-v3',
        title: 'Government Services Online',
        description: 'Access government services from your phone',
        duration: '18:20',
        thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/x5W8SkszjTk',
        category: 'Government Services'
      }
    ]
  },
  {
    id: 'edu-2',
    title: 'Adult Education Classes',
    category: 'education',
    description: 'Complete your school education with flexible timing for working adults.',
    provider: 'Rural Education Foundation',
    duration: '6 months',
    requirements: ['Basic literacy', 'Commitment to attend classes'],
    benefits: ['10th/12th grade certification', 'Better job opportunities', 'Government scheme eligibility'],
    videos: [
      {
        id: 'edu-2-v1',
        title: 'Mathematics Basics',
        description: 'Fundamental mathematics concepts for adult learners',
        duration: '35:15',
        thumbnail: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://youtu.be/CobQvtjL5gc?si=o5sWn715aNJJ6qBp',
        category: 'Mathematics'
      },
      {
        id: 'edu-2-v2',
        title: 'English Communication Skills',
        description: 'Improve your English speaking and writing skills',
        duration: '28:40',
        thumbnail: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://youtu.be/PzyKDZLO5Bk?si=nh-ZV9GHdZbKWTcw',
        category: 'Language'
      }
    ]
  },
  {
    id: 'edu-3',
    title: 'Skill Development Workshop',
    category: 'education',
    description: 'Learn practical skills like tailoring, handicrafts, and small business management.',
    provider: 'Skill India Initiative',
    duration: '3 months',
    requirements: ['Interest in learning new skills'],
    benefits: ['Skill certification', 'Employment opportunities', 'Business setup guidance'],
    videos: [
      {
        id: 'edu-3-v1',
        title: 'Basic Tailoring Techniques',
        description: 'Learn fundamental sewing and tailoring skills',
        duration: '42:30',
        thumbnail: 'https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/UOwRZn3YQlI',
        category: 'Tailoring'
      },
      {
        id: 'edu-3-v2',
        title: 'Small Business Management',
        description: 'Essential skills for running a small business',
        duration: '31:25',
        thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/g9aDizJpd_s',
        category: 'Business'
      }
    ]
  },

  // Agriculture Services with working video links
  {
    id: 'agri-1',
    title: 'Modern Farming Techniques',
    category: 'agriculture',
    description: 'Learn scientific farming methods to increase crop yield and reduce costs.',
    provider: 'Agricultural Extension Office',
    duration: '2 months',
    requirements: ['Own or lease farmland', 'Basic farming experience'],
    benefits: ['Higher crop yield', 'Reduced farming costs', 'Weather-resistant farming'],
    videos: [
      {
        id: 'agri-1-v1',
        title: 'Soil Testing and Preparation',
        description: 'Learn how to test and prepare soil for optimal crop growth',
        duration: '25:45',
        thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/Ac_T5U1edwI',
        category: 'Soil Management'
      },
      {
        id: 'agri-1-v2',
        title: 'Organic Fertilizer Making',
        description: 'Create effective organic fertilizers from farm waste',
        duration: '32:20',
        thumbnail: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/_3fAt14X6iI',
        category: 'Fertilizers'
      },
      {
        id: 'agri-1-v3',
        title: 'Water Conservation Techniques',
        description: 'Efficient irrigation and water saving methods',
        duration: '28:15',
        thumbnail: 'https://images.pexels.com/photos/1595105/pexels-photo-1595105.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/E3CP_L4grxI',
        category: 'Water Management'
      },
      {
        id: 'agri-1-v4',
        title: 'Pest Control Without Chemicals',
        description: 'Natural methods to protect crops from pests',
        duration: '24:50',
        thumbnail: 'https://images.pexels.com/photos/1595107/pexels-photo-1595107.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/OiIKu1Hgf6A',
        category: 'Pest Control'
      }
    ]
  },
  {
    id: 'agri-3',
    title: 'Agricultural Loan Assistance',
    category: 'agriculture',
    description: 'Get help with agricultural loans at low interest rates for farming needs.',
    provider: 'Rural Development Bank',
    duration: '1-2 weeks processing',
    requirements: ['Land documents', 'Income proof', 'Farming plan'],
    benefits: ['Low interest rates', 'Flexible repayment', 'Quick approval'],
    videos: [
      {
        id: 'agri-3-v1',
        title: 'Understanding Agricultural Loans',
        description: 'Complete guide to agricultural loan types and requirements',
        duration: '19:30',
        thumbnail: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/F8_K9D7tTOw',
        category: 'Finance'
      },
      {
        id: 'agri-3-v2',
        title: 'Loan Application Process',
        description: 'Step-by-step guide to applying for agricultural loans',
        duration: '16:45',
        thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
        videoUrl: 'https://www.youtube.com/embed/B35vE0u1Nzw',
        category: 'Application'
      }
    ]
  }
];
