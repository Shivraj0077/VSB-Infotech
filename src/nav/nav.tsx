import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react';

// Button component
interface ButtonProps {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-auto md:h-[72px] bg-[#1e1e1e] fixed top-0 left-0 z-50">
      <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[100px] md:w-[120px]">
              {/* Logo image placeholder */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="h-[72px] flex items-center px-2.5">
              <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica] tracking-[0] whitespace-nowrap cursor-pointer hover:text-[#00b2a9] transition-colors duration-300" onClick={() => window.location.href = '/about'}>
                AboutUs
              </div>
            </div>
            <div className="h-[72px] flex items-center px-2.5">
              <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica] tracking-[0] whitespace-nowrap cursor-pointer hover:text-[#00b2a9] transition-colors duration-300" onClick={() => window.location.href = '/products'}>
                Products
              </div>
            </div>
            {/* Let's Talk Button */}
            <Button 
              className="w-[150px] h-[42px] rounded-[20px] bg-[#00b2a9] border border-solid text-white hover:bg-[#00a29a] transition-colors duration-300 flex items-center justify-center" 
              onClick={() => window.location.href = '/contact'}
            >
              <span className="font-normal text-sm leading-6 font-['Inter',Helvetica]">
                LET&#39;S TALK
              </span>
              <ChevronRightIcon className="w-[13px] h-3 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2 hover:text-[#00b2a9] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`lg:hidden bg-[#1e1e1e] transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col py-4 border-t border-gray-700">
            <div className="py-3 px-4 cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-300">
              <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica] hover:text-[#00b2a9]" onClick={() => window.location.href = '/about'}>
                AboutUs
              </div>
            </div>
            <div className="py-3 px-4 cursor-pointer hover:bg-[#2a2a2a] transition-colors duration-300">
              <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica] hover:text-[#00b2a9]" onClick={() => window.location.href = '/products'}>
                Our Products
              </div>
            </div>
            {/* Let's Talk Button in Mobile Menu */}
            <div className="mx-4 mt-4">
              <Button 
                className="w-full h-[42px] rounded-[20px] bg-[#00b2a9] border border-solid text-white hover:bg-[#00a29a] transition-colors duration-300 flex items-center justify-center" 
                onClick={() => window.location.href = '/contact'}
              >
                <span className="font-normal text-sm leading-6 font-['Inter',Helvetica]">
                  LET&#39;S TALK
                </span>
                <ChevronRightIcon className="w-[13px] h-3 ml-2" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}