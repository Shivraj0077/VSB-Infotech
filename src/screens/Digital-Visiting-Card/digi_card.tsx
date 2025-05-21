import React from 'react';
import { QrCode, Share, Edit, Users, CheckCircle, CreditCard } from 'lucide-react';
import Navbar from '../../nav/nav';

// SuccessCard component with imageSrc and altText props
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

// Data for the Digital Visiting Card features (unchanged)
const features = [
  {
    icon: QrCode,
    title: 'Contactless Sharing',
    description: 'Share via QR code, link, NFC, or WhatsApp—no app required!',
  },
  {
    icon: Share,
    title: 'Multimedia Friendly',
    description: 'Add profile picture, company logo, video intro, product gallery, and more.',
  },
  {
    icon: Edit,
    title: 'Unlimited Edits',
    description: 'Update your information anytime without reprinting.',
  },
];

// Data for Ideal For (unchanged)
const idealFor = [
  'Entrepreneurs',
  'Freelancers',
  'Consultants',
  'Startups',
  'Retailers',
  'Service Providers',
  'Sales Executives',
];

// Data for Why Choose Us (unchanged)
const whyChooseUs = [
  'Professionally designed layouts',
  'Fast delivery & 100% mobile-friendly',
  'SEO-optimized for your brand name',
  'Custom domain option available (e.g., www.vinitbhansode.in)',
  'Lifetime hosting & support packages',
];

// Data for Pricing Plans (unchanged)
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
      'Custome Layout',
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

const Digi_card: React.FC = () => {
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
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Gg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header Section */}
      <div className="relative text-center max-w-5xl mx-auto mb-24">
        <h1
          className="text-6xl md:text-7xl font-light leading-tight mb-8"
          style={{ color: 'rgb(255, 245, 235)' }}
        >
          Digital Visiting Card <br />
          Smart, Stylish & Always with You
        </h1>
        <p className="text-xl font-light italic" style={{ color: '#FFF2E0' }}>
          A modern, eco-friendly, and professional way to share your business information.
        </p>
      </div>

      {/* Features Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
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
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: 'rgb(200, 201, 203)',
                      }}
                    >
                      {feature.description}
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

      {/* Success Card Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <h2
          className="text-3xl md:text-4xl font-light mb-8 text-center"
          style={{ color: 'rgb(255, 245, 235)' }}
        >
          Explore Our Card Designs
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-96">
          <div>
            <p
              className="text-base leading-relaxed mb-4 text-center"
              style={{
                fontFamily: '"Merriweather", serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '17px',
                lineHeight: '1.6em',
                color: 'rgb(188, 189, 191)',
              }}
            >
              Front Side
            </p>
            <SuccessCard imageSrc="/card-img.png" altText="Front Side of Digital Card" />
          </div>
          <div>
            <p
              className="text-base leading-relaxed mb-4 text-center"
              style={{
                fontFamily: '"Merriweather", serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '17px',
                lineHeight: '1.6em',
                color: 'rgb(188, 189, 191)',
              }}
            >
              Back Side
            </p>
            <SuccessCard imageSrc="/new-card-img.jpg" altText="Back Side of Digital Card" />
          </div>
        </div>
      </div>

      {/* Ideal For Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <h2
          className="text-3xl md:text-4xl font-light mb-8 text-center"
          style={{ color: 'rgb(255, 245, 235)' }}
        >
          Ideal For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {idealFor.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg"
              style={{
                backgroundColor: 'rgb(20, 20, 20)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <CheckCircle
                className="w-5 h-5 mr-2"
                style={{ color: 'rgb(255, 245, 225)' }}
              />
              <p
                className="text-base"
                style={{ color: 'rgb(200, 201, 203)' }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative max-w-5xl mx-auto mb-24">
        <h2
          className="text-3xl md:text-4xl font-light mb-8 text-center"
          style={{ color: 'rgb(255, 245, 235)' }}
        >
          Why Choose Us?
        </h2>
        <ul className="space-y-4">
          {whyChooseUs.map((item, index) => (
            <li
              key={index}
              className="flex items-center p-4 rounded-lg"
              style={{
                backgroundColor: 'rgb(20, 20, 20)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <CheckCircle
                className="w-5 h-5 mr-2"
                style={{ color: 'rgb(255, 245, 225)' }}
              />
              <p
                className="text-base"
                style={{ color: 'rgb(200, 201, 203)' }}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>
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
                  {plan.title.includes('One Time') ? '/one-time' : '/one-time'}
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
    </section>
    </div>
  );
};

export default Digi_card;