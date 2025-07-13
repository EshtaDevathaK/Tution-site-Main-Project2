import { useState, useEffect } from 'react'; // React hooks for state and lifecycle management
import { Menu, X, BookOpen } from 'lucide-react'; // Lucide icons for UI elements
import { Button } from '@/components/ui/button'; // Custom button component

/* 
Header Component - Top navigation with logo, menu items, and theme toggle
Features: Responsive navigation, dark/light mode toggle, mobile hamburger menu
*/
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position for header styling

  /* Effect to handle scroll-based header styling changes */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set scrolled state when user scrolls past 50px
    };
    
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

 

  
  /* Function to toggle mobile menu visibility */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu state
  };

  /* Function to handle smooth scrolling to sections */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId); // Find target section element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' // Glassmorphism effect when scrolled
          : 'bg-background/70 backdrop-blur-sm' // Transparent when at top
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}
        <div className="flex items-center justify-between h-16"> {/* Header content layout */}
          
          {/* *********** Logo and brand section */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" /> {/* Book icon representing education */}
            <span className="text-xl font-bold text-foreground">Siran Tuition Centre</span> {/* Brand name */}
           </div>

          {/* Desktop navigation menu */}
          <nav className="hidden md:flex items-center space-x-8"> {/* Hidden on mobile, visible on medium+ screens */}
            <Button variant="outline" size="sm"  
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors duration-200" // Smooth color transition on hover
            >
              About
            </Button>
            <Button  variant="outline" size="sm"
              onClick={() => scrollToSection('parents')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              For Parents
            </Button>
            <Button  variant="outline" size="sm"
              onClick={() => scrollToSection('why-choose')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Why Choose Us
            </Button>
            <Button  variant="outline" size="sm"
              onClick={() => scrollToSection('subjects')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Subjects
            </Button>
            <Button  variant="outline" size="sm"
              onClick={() => scrollToSection('reviews')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Reviews
            </Button>
            <Button  variant="outline" size="sm"
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </Button>
          </nav>

          {/* Right side controls - theme toggle and mobile menu */}
          <div className="flex items-center space-x-4">
   

            {/* Mobile menu toggle button - only visible on mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="md:hidden p-2" // Hidden on medium+ screens
            >
              {isMobileMenuOpen ? ( // Conditional icon based on menu state
                <X className="h-5 w-5" /> // X icon when menu is open
              ) : (
                <Menu className="h-5 w-5" /> // Hamburger menu icon when menu is closed
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation menu - slides down when open */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border"> {/* Mobile menu container */}
            <nav className="flex flex-col space-y-3"> {/* Vertical navigation layout */}
              <Button 
               variant="ghost" size="lg" 
                onClick={() => scrollToSection('about')} 
                className="text-left py-2 text-foreground w-full justify-start hover:text-primary transition-colors duration-200"
              >
                About
              </Button>
              <Button 
              variant="ghost" size="lg" 
                onClick={() => scrollToSection('parents')} 
                className="text-left py-2 text-foreground  w-full justify-start  hover:text-primary transition-colors duration-200"
              >
                For Parents
              </Button>
              <Button 
              variant="ghost" size="lg" 
                onClick={() => scrollToSection('why-choose')} 
                className="text-left py-2 text-foreground  w-full justify-start  hover:text-primary transition-colors duration-200"
              >
                Why Choose Us
              </Button>
              <Button 
              variant="ghost" size="lg" 
                onClick={() => scrollToSection('subjects')} 
                className="text-left py-2 text-foreground  w-full justify-start  hover:text-primary transition-colors duration-200"
              >
                Subjects
              </Button>
              <Button 
              variant="ghost" size="lg" 
                onClick={() => scrollToSection('reviews')} 
                className="text-left py-2 text-foreground  w-full justify-start  hover:text-primary transition-colors duration-200"
              >
                Reviews
              </Button>
              <Button 
              variant="ghost" size="lg" 
                onClick={() => scrollToSection('contact')} 
                className="text-left py-2 text-foreground  w-full justify-start  hover:text-primary transition-colors duration-200"
              >
                Contact
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;