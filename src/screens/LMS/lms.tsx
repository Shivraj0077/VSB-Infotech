import React, { useState } from 'react';
import { BookOpen, Users, Award, Monitor, MessageSquare, CheckCircle, CreditCard } from 'lucide-react';
import Navbar from '../../nav/nav';

// SuccessCard component for showcasing LMS interface
const SuccessCard: React.FC<{ imageSrc: string; altText: string }> = ({ imageSrc, altText }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className="relative w-[90%] h-[85%] rounded-[8px] overflow-hidden flex justify-center items-center"
        style={{
          backgroundColor: 'rgb(28, 28, 28)',
          border: '1px solid rgba(255, 239, 212, 0.1)',
          boxShadow: `
            rgba(0, 0, 0, 0.65) 0px 0.602187px 0.48175px -1.25px,
            rgba(0, 0, 0, 0.57) 0px 2.28853px 1.83083px -2.5px,
            rgba(0, 0, 0, 0.23) 0px 10px 8px -3.75px
          `,
        }}
      >
        {/* Centered Image */}
        <img
          src={imageSrc}
          alt={altText}
          className="w-[90%] h-[90%] z-20 object-contain"
        />

        {/* Pixel Pattern Overlay */}
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            opacity: 1,
            zIndex: 10,
            backgroundImage: `url("https://framerusercontent.com/images/2ZTM81mdCXeMIbSWfvdh4X7JIGg.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />

        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgb(45, 87, 238) 0%, rgb(44, 51, 219) 66%, rgb(97, 31, 196) 66.01%, rgb(63, 15, 80) 100%)',
            filter: 'blur(90px)',
            opacity: 0.3,
            transform: 'rotate(-15deg)',
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

// Data for LMS Benefits
const benefits = [
  {
    icon: BookOpen,
    title: 'Streamlined Administration',
    description: 'Automate course enrolment, attendance tracking, and progress monitoring tasks.',
  },
  {
    icon: Monitor,
    title: 'Personalized Learning',
    description: 'Customize learning paths based on the needs of individuals or groups.',
  },
  {
    icon: Award,
    title: 'Enhanced Engagement',
    description: 'Interactive videos, quizzes, and live webinars motivate learners.',
  },
];

// Data for LMS Features
const lmsFeatures = [
  'Course Management: Create, organize, and deliver courses effortlessly.',
  'Assessment Tools: Design quizzes, assignments, and exams to evaluate learner progress.',
  'Gamification: Increase engagement with badges, leaderboards, and rewards.',
  'Multimedia Support: Upload videos, PDFs, presentations, and other resources.',
  'Collaboration Tools: Foster interaction through forums, chats, and discussion boards.',
  'Certification & Compliance: Issue certificates and track compliance requirements.',
];

// Data for Industries We Serve
const industries = [
  'Educational Institutions',
  'Corporate Training',
  'E-Learning Platforms',
  'Nonprofits & Government',
];

// Data for Why Choose Our LMS Software
const whyChooseUs = [
  'Centralized Learning Platform: Manage courses, track learner progress, and deliver engaging content all in one place.',
  'Customizable Solutions: Tailored features to align with your organizational goals and branding.',
  'User-Friendly Interface: Easy navigation for administrators, instructors, and learners.',
  'Anytime, Anywhere Access: Cloud-based access ensures seamless learning across devices and locations.',
  'Integration Capabilities: Sync with third-party tools like Zoom, Microsoft Teams, or HR systems.',
  'Data-Driven Insights: Generate detailed reports on learner performance, course effectiveness, and more.',
];

// Data for Advanced Features
const advancedFeatures = [
  'Mobile Learning: Deliver content optimized for smartphones and tablets, enabling learning on the go.',
  'Role-Based Access: Differentiate access for administrators, instructors, and learners to maintain security and efficiency.',
  'Blended Learning: Combine online and offline learning methods for a hybrid training approach.',
  'AI-Powered Recommendations: Suggest courses or materials based on learner preferences and progress.',
  'Social Learning: Encourage collaboration and peer learning through discussion forums and group projects.',
  'E-Commerce Integration: Monetize courses with built-in payment gateways for subscription-based access.',
];

// Data for Tailored LMS Solutions
const tailoredSolutions = [
  'Schools & Universities: Online classrooms, course management, and student progress tracking.',
  'Corporate Enterprises: Training employees, improving skills, and fostering talent development.',
  'Healthcare: Compliance training, certifications, and continued medical education.',
  'Retail & Sales: Product knowledge training and onboarding programs.',
  'NGOs & Community Projects: Skill development and awareness programs.',
];

// Data for Pricing Plans
const pricingPlans = [
  {
    title: 'Basic Card',
    price: '₹499',
    description: 'Perfect for individuals starting with a simple digital card.',
    features: [
      'Elegant Layout',
      'Silver Printing',
      'NFC Enabled',
      'Mat Black Card',
    ],
  },
  {
    title: 'Premium Card with Domain',
    price: '₹1,499',
    description: 'Ideal for professionals needing a custom domain and advanced features.',
    features: [
      'Custom Layout',
      'Single Colour Printing',
      'NFC Enabled',
      'Gloss White Card',
    ],
    isPopular: true,
  },
  {
    title: 'Business Pack (5 Cards)',
    price: '₹3,999',
    description: 'Best for teams and businesses scaling their digital presence.',
    features: [
      'All Premium Card features for 5 cards',
      'Team management dashboard',
      'Custom design system',
      'SEO-optimized multi-page designs',
      'Dedicated account manager',
      'Priority support',
    ],
  },
];

// Data for FAQs
const faqs = [
  {
    question: 'What is an LMS?',
    answer: 'An LMS (Learning Management System) is a platform designed to deliver, track, and manage educational content. It allows users to access courses, complete assignments, and monitor their progress anytime, anywhere.',
  },
  {
    question: 'Who is this LMS designed for?',
    answer: 'Our LMS is designed for students, professionals, and organizations seeking to enhance skills, provide training, or deliver educational content.',
  },
  {
    question: 'Is the LMS accessible on mobile devices?',
    answer: 'Yes, our LMS is fully responsive and accessible on desktops, tablets, and mobile devices for convenient learning on the go.',
  },
  {
    question: 'Are there any free courses available?',
    answer: 'Some courses may be available for free, while others require payment. Check our catalog for specific details.',
  },
];

const Lms: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
        <Navbar />
    <section className="text-white py-24 px-6 min-h-screen" style={{ backgroundColor: 'rgb(20, 20, 20)' }}>
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          opacity: 0.5,
          zIndex: 2,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header Section */}
      <div className="relative text-center max-w-5xl mx-auto mb-24">
        <h1
          className="text-6xl md:text-7xl font-light leading-tight mb-8"
          style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
        >
          Learning Management System <br />
          Transform the Way You Learn and Teach
        </h1>
        <p className="text-xl font-light italic" style={{ color: '#FFF2E0', fontFamily: '"Merriweather", serif' }}>
          A powerful, flexible platform to create, manage, and deliver engaging educational content online.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div
              key={index}
              className="relative rounded-2xl p-8 overflow-hidden"
              style={{
                backgroundColor: 'rgb(20, 20, 20)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: 'rgba(67, 31, 105, 0.25) 0px 1px 39px 0px',
                willChange: 'transform',
              }}
            >
              {/* Main content container */}
              <div className="relative z-10" style={{ borderRadius: '16px' }}>
                <div style={{ opacity: 1 }}>
                  <div style={{ opacity: 1 }}>
                    {/* Icon */}
                    <div
                      className="w-12 h-12 mb-6 flex items-center justify-center rounded-full"
                      style={{
                        border: '2px solid rgb(255, 245, 225)',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: 'rgb(255, 245, 225)' }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-4xl mb-4"
                      style={{
                        fontFamily: '"Urbanist Medium", sans-serif',
                        fontWeight: 500,
                        lineHeight: '1.4em',
                        color: 'rgb(255, 245, 235)',
                      }}
                    >
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: 'rgb(200, 201, 203)',
                        fontFamily: '"Lexend", sans-serif',
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Blur effect background */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, rgb(75, 117, 255) 0%, rgb(74, 81, 249) 66%, rgb(127, 61, 226) 66.01%, rgb(93, 45, 110) 100%)',
                  filter: 'blur(132px)',
                  opacity: 0.3,
                  transform: 'rotate(-15deg)',
                  zIndex: 1,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Showcase LMS Interface Section */}
      <div className="relative max-w-5xl mx-auto mb-48">
        <h2
          className="text-3xl md:text-4xl font-light mb-8 text-center"
          style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
        >
          Showcase Our LMS Interface
        </h2>
        <p
          className="text-base leading-relaxed mb-6 text-center"
          style={{
            fontFamily: '"Merriweather", serif',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: '1.6em',
            color: 'rgb(188, 189, 191)',
          }}
        >
          Discover the intuitive design of our LMS platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
          <div className="relative group">
            <h3
              className="text-2xl font-medium mb-4 text-center"
              style={{
                fontFamily: '"Urbanist Medium", sans-serif',
                fontSize: '24px',
                lineHeight: '1.4em',
                color: 'rgb(255, 245, 235)',
                letterSpacing: '-0.02em',
              }}
            >
              Graphology Complete Course
            </h3>
            <SuccessCard imageSrc="/graphology-course.jpg" altText="Graphology Complete Course Interface" />
            
            {/* Enhanced Popup - Modified positioning */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-[calc(100%+20px)] w-[95%] max-w-sm p-6 rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-30"
              style={{
                backgroundColor: 'rgb(28, 28, 28)',
                border: '1px solid rgba(255, 239, 212, 0.2)',
                boxShadow: `
                  rgba(0, 0, 0, 0.4) 0px 8px 32px,
                  rgba(67, 31, 105, 0.3) 0px 4px 16px,
                  inset rgba(255, 255, 255, 0.1) 0px 1px 0px
                `,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Animated gradient border effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(45, 87, 238) 0%, rgb(127, 61, 226) 50%, rgb(97, 31, 196) 100%)',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <BookOpen
                    className="w-5 h-5 mr-2"
                    style={{ color: 'rgb(255, 245, 225)' }}
                  />
                  <h4
                    className="text-lg font-medium"
                    style={{
                      fontFamily: '"Urbanist Medium", sans-serif',
                      color: 'rgb(255, 245, 235)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Course Overview
                  </h4>
                </div>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{
                    fontFamily: '"Lexend", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.6em',
                    color: 'rgb(200, 201, 203)',
                  }}
                >
                  Unlock the art and science of handwriting analysis with our comprehensive Graphology Complete Course.
                </p>
                <a
                  href="https://lmselite.com/home/course/graphology-complete-course/6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full py-3 px-6 mt-4"
                  style={{
                    backgroundColor: 'rgb(255, 239, 212)',
                    border: '2px solid rgb(255, 239, 212)',
                    borderRadius: '55px',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(50% 50% at 50% 50%, rgb(45, 87, 238) 0%, rgb(44, 51, 219) 66%, rgb(97, 31, 196) 66.01%, rgb(63, 15, 80) 100%)',
                      filter: 'blur(132px)',
                      opacity: 0.3,
                      transform: 'rotate(-15deg)',
                      zIndex: -1,
                    }}
                  />
                  <p
                    className="text-base"
                    style={{
                      fontFamily: '"Urbanist Regular", sans-serif',
                      color: 'rgb(0, 0, 0)',
                    }}
                  >
                    Checkout Course
                  </p>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <h3
              className="text-2xl font-medium mb-4 text-center"
              style={{
                fontFamily: '"Urbanist Medium", sans-serif',
                fontSize: '24px',
                lineHeight: '1.4em',
                color: 'rgb(255, 245, 235)',
                letterSpacing: '-0.02em',
              }}
            >
              Magic Of Branding Course
            </h3>
            <SuccessCard imageSrc="/branding-course.jpg" altText="Magic Of Branding Course Interface" />
            
            {/* Enhanced Popup - Modified positioning */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 top-[calc(100%+20px)] w-[95%] max-w-sm p-6 rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-30"
              style={{
                backgroundColor: 'rgb(28, 28, 28)',
                border: '1px solid rgba(255, 239, 212, 0.2)',
                boxShadow: `
                  rgba(0, 0, 0, 0.4) 0px 8px 32px,
                  rgba(67, 31, 105, 0.3) 0px 4px 16px,
                  inset rgba(255, 255, 255, 0.1) 0px 1px 0px
                `,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Animated gradient border effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(45, 87, 238) 0%, rgb(127, 61, 226) 50%, rgb(97, 31, 196) 100%)',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <Monitor
                    className="w-5 h-5 mr-2"
                    style={{ color: 'rgb(255, 245, 225)' }}
                  />
                  <h4
                    className="text-lg font-medium"
                    style={{
                      fontFamily: '"Urbanist Medium", sans-serif',
                      color: 'rgb(255, 245, 235)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Course Overview
                  </h4>
                </div>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{
                    fontFamily: '"Lexend", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.6em',
                    color: 'rgb(200, 201, 203)',
                  }}
                >
                  Unlock the Branding & Business analysis with our Magic of Branding Course.
                </p>
                <a
                  href="https://lmselite.com/home/course/magic-of-branding/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full py-3 px-6 mt-4"
                  style={{
                    backgroundColor: 'rgb(255, 239, 212)',
                    border: '2px solid rgb(255, 239, 212)',
                    borderRadius: '55px',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(50% 50% at 50% 50%, rgb(45, 87, 238) 0%, rgb(44, 51, 219) 66%, rgb(97, 31, 196) 66.01%, rgb(63, 15, 80) 100%)',
                      filter: 'blur(132px)',
                      opacity: 0.3,
                      transform: 'rotate(-15deg)',
                      zIndex: -1,
                    }}
                  />
                  <p
                    className="text-base"
                    style={{
                      fontFamily: '"Urbanist Regular", sans-serif',
                      color: 'rgb(0, 0, 0)',
                    }}
                  >
                    Checkout Course
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LMS Features Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <div className="relative">
          <h2
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
          >
            LMS Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lmsFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(28, 28, 28, 0.8)',
                  border: '1px solid rgba(255, 239, 212, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(255, 239, 212, 0.1)',
                      border: '1px solid rgba(255, 239, 212, 0.2)',
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: 'rgb(255, 245, 225)' }}
                    />
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'rgb(200, 201, 203)', fontFamily: '"Lexend", sans-serif' }}
                  >
                    {feature}
                  </p>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45, 87, 238, 0.1) 0%, rgba(127, 61, 226, 0.1) 100%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Serve Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <div className="relative">
          <h2
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
          >
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(28, 28, 28, 0.8)',
                  border: '1px solid rgba(255, 239, 212, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(255, 239, 212, 0.1)',
                      border: '1px solid rgba(255, 239, 212, 0.2)',
                    }}
                  >
                    <CheckCircle
                      className="w-6 h-6"
                      style={{ color: 'rgb(255, 245, 225)' }}
                    />
                  </div>
                  <p
                    className="text-base font-medium"
                    style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Medium", sans-serif' }}
                  >
                    {item}
                  </p>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45, 87, 238, 0.1) 0%, rgba(127, 61, 226, 0.1) 100%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our LMS Software Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <div className="relative">
          <h2
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
          >
            Why Choose Our LMS Software?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(28, 28, 28, 0.8)',
                  border: '1px solid rgba(255, 239, 212, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(255, 239, 212, 0.1)',
                      border: '1px solid rgba(255, 239, 212, 0.2)',
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: 'rgb(255, 245, 225)' }}
                    />
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'rgb(200, 201, 203)', fontFamily: '"Lexend", sans-serif' }}
                  >
                    {item}
                  </p>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45, 87, 238, 0.1) 0%, rgba(127, 61, 226, 0.1) 100%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailored LMS Solutions Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <div className="relative">
          <h2
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
          >
            Tailored LMS Solutions for Every Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tailoredSolutions.map((solution, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(28, 28, 28, 0.8)',
                  border: '1px solid rgba(255, 239, 212, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(255, 239, 212, 0.1)',
                      border: '1px solid rgba(255, 239, 212, 0.2)',
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: 'rgb(255, 245, 225)' }}
                    />
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'rgb(200, 201, 203)', fontFamily: '"Lexend", sans-serif' }}
                  >
                    {solution}
                  </p>
                </div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(45, 87, 238, 0.1) 0%, rgba(127, 61, 226, 0.1) 100%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="relative max-w-6xl mx-auto mb-24">
        <h2
          className="text-3xl md:text-4xl font-light mb-12 text-center"
          style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
        >
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                border: '1px solid rgba(158, 158, 158, 0.16)',
                borderRadius: '24px',
              }}
            >
              {/* Most Popular Tag */}
              {plan.isPopular && (
                <div
                  className="px-3 py-1 rounded-md mb-4"
                  style={{
                    backgroundColor: 'rgb(169, 77, 255)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: '"Merriweather", serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '14px',
                    width: 'fit-content',
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Title and Description */}
              <div className="mb-6">
                <h3
                  className="text-2xl md:text-3xl mb-2"
                  style={{
                    fontFamily: '"Urbanist Regular", sans-serif',
                    fontSize: '28px',
                    letterSpacing: '-0.03em',
                    color: 'rgb(216, 186, 245)',
                  }}
                >
                  {plan.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: '"Merriweather", serif',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '17px',
                    lineHeight: '1.6em',
                    color: 'rgb(188, 189, 191)',
                  }}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline mb-6">
                <h3
                  className="text-4xl md:text-5xl"
                  style={{
                    fontFamily: '"Urbanist Medium", sans-serif',
                    fontSize: '50px',
                    letterSpacing: '-0.03em',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  {plan.price}
                </h3>
                <h4
                  className="text-xl ml-2"
                  style={{
                    fontFamily: '"Urbanist Regular", sans-serif',
                    fontSize: '26px',
                    letterSpacing: '-0.03em',
                    color: 'rgba(255, 255, 255, 0.9)',
                  }}
                >
                  /one-time
                </h4>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle
                      className="w-5 h-5 mr-2"
                      style={{ color: 'rgb(255, 255, 255)', opacity: 0.5 }}
                    />
                    <p
                      className="text-base"
                      style={{
                        fontFamily: '"Lexend", sans-serif',
                        fontWeight: 300,
                        letterSpacing: '-0.03em',
                        lineHeight: '1.4em',
                        color: 'rgb(255, 255, 255)',
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
              <a
                href="/contact"
                rel="noopener"
                className="flex items-center justify-center rounded-full py-3 px-6"
                style={{
                  backgroundColor: 'rgb(255, 239, 212)',
                  border: '2px solid rgb(255, 239, 212)',
                  borderRadius: '55px',
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgb(45, 87, 238) 0%, rgb(44, 51, 219) 66%, rgb(97, 31, 196) 66.01%, rgb(63, 15, 80) 100%)',
                    filter: 'blur(132px)',
                    opacity: 0.3,
                    transform: 'rotate(-15deg)',
                    zIndex: -1,
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
                <p
                  className="text-base"
                  style={{
                    fontFamily: '"Urbanist Regular", sans-serif',
                    color: 'rgb(0, 0, 0)',
                  }}
                >
                  Book a Demo
                </p>
              </a>
              <p
                className="text-center mt-4 text-sm italic"
                style={{
                  fontFamily: '"Merriweather", serif',
                  fontWeight: 300,
                  fontSize: '14px',
                  lineHeight: '1.6em',
                  color: 'rgb(255, 255, 255)',
                }}
              >
                Quick chat. No pressure.
              </p>

              {/* Background Gradient */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, rgb(45, 87, 238) 0%, rgb(44, 51, 219) 66%, rgb(97, 31, 196) 66.01%, rgb(63, 15, 80) 100%)',
                  filter: 'blur(132px)',
                  borderRadius: '100%',
                  opacity: 0.3,
                  transform: 'rotate(-15deg)',
                  zIndex: -1,
                }}
              />
            </div>
          ))}
        </div>
        <p
          className="text-center mt-8 text-base italic"
          style={{ color: 'rgb(200, 201, 203)', fontFamily: '"Merriweather", serif' }}
        >
          Custom solutions available on request
        </p>
      </div>

      {/* FAQs Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <div className="relative">
          <h2
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            style={{ color: 'rgb(255, 245, 235)', fontFamily: '"Urbanist Regular", sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
            <div key={index} className="relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center space-x-4 w-full text-left"
              >
                {/* Button content */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium flex-1">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* The key part: conditional rendering of the answer */}
              {openIndex === index && (
                <p className="text-base leading-relaxed ml-14">{faq.answer}</p>
              )}
            </div>
          </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Lms;