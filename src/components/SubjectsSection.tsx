import { Calculator, Atom, Globe, BookA, PenTool, Cpu } from 'lucide-react'; // Lucide icons for subjects

// Import background images for each subject card
import mathBg from '../assets/math-bg.jpg'; // Mathematics background with formulas
import physicsBg from '../assets/physics-bg.jpg'; // Physics background with scientific symbols  
import chemistryBg from '../assets/chemistry-bg.jpg'; // Chemistry background with molecular structures

import accountsBg from '../assets/accounts-bg.jpg'; // Hindi background with Devanagari script
import computerBg from '../assets/computer-bg.jpg'; // Computer Science background with code
import biologyBg from '../assets/biology-bg.jpg'; // English background with books and letters

import commerceBg from '../assets/commerce-bg.jpg'; // English background with books and letters
import economicsBg from '../assets/economics-bg.jpg'; // English background with books and letters
import businessMathBg from '../assets/businessMath-bg.jpg'; // English background with books and letters
import historyBg from '../assets/history-bg.jpg'; // English background with books and letters
import socialScienceBg from '../assets/socialScience-bg.jpg'; // English background with books and letters
/* 
SubjectsSection Component - Grid of available subjects
Features: Colorful subject cards, hover effects, responsive grid, subject icons
*/
const SubjectsSection = () => {

  /* Array of subjects with icons, colors, descriptions, and background images */
  const subjects = [
    {
      icon: Calculator, // Calculator icon for Mathematics
      title: "Mathematics", // Subject title
      description: "Algebra, Geometry, Calculus & More", // Subject description
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600", // Background gradient
      iconColor: "text-blue-100", // Icon color
      textColor: "text-white", // Text color
      bgImage: mathBg // Background image with mathematical formulas
    },
    {
      icon: Atom, // Atom icon for Physics
      title: "Physics",
      description: "Mechanics, Thermodynamics, Optics",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      iconColor: "text-purple-100",
      textColor: "text-white",
      bgImage: physicsBg // Background image with physics symbols
    },
    {
      icon: Globe, // Globe icon for Chemistry (representing molecular structures)
      title: "Chemistry",
      description: "Organic, Inorganic & Physical Chemistry",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      iconColor: "text-green-100",
      textColor: "text-white",
      bgImage: chemistryBg // Background image with molecular structures
    },
{
  icon: BookA,
  title: "Biology",
  description: "Human Anatomy, Genetics, Evolution",
  bgColor: "bg-gradient-to-br from-pink-500 to-pink-600",
  iconColor: "text-pink-100",
  textColor: "text-white",
  bgImage: biologyBg
},
{
  icon: BookA,
  title: "Commerce",
  description: "Finance, Business Studies, Accountancy",
  bgColor: "bg-gradient-to-br from-yellow-600 to-yellow-700",
  iconColor: "text-yellow-100",
  textColor: "text-white",
  bgImage: commerceBg
},
{
  icon: BookA,
  title: "Economics",
  description: "Micro & Macro Economics Concepts",
  bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-700",
  iconColor: "text-indigo-100",
  textColor: "text-white",
  bgImage: economicsBg
},
{
  icon: BookA,
  title: "Business Math",
  description: "Business Calculations & Statistics",
  bgColor: "bg-gradient-to-br from-lime-600 to-lime-700",
  iconColor: "text-lime-100",
  textColor: "text-white",
  bgImage: businessMathBg
},
{
  icon: BookA,
  title: "History",
  description: "Ancient, Medieval & Modern History",
  bgColor: "bg-gradient-to-br from-amber-600 to-amber-700",
  iconColor: "text-amber-100",
  textColor: "text-white",
  bgImage: historyBg
},
{
  icon: BookA,
  title: "Social Science",
  description: "Geography, Civics, & Culture",
  bgColor: "bg-gradient-to-br from-cyan-600 to-cyan-700",
  iconColor: "text-cyan-100",
  textColor: "text-white",
  bgImage: socialScienceBg
}
,
    {
      icon: PenTool, // PenTool icon for Hindi
      title: "Accounts",
      description: "Cool Accounts For Students TO Expertise Knowledge",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      iconColor: "text-orange-100",
      textColor: "text-white",
      bgImage: accountsBg // Background image with Devanagari script
    },
    {
      icon: Cpu, // Cpu icon for Computer Science
      title: "Computer Science",
      description: "Programming, Data Structures, Algorithms",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-100",
      textColor: "text-white",
      bgImage: computerBg // Background image with code patterns
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-secondary/30"> {/* Section with subtle background */}
      <div className="container mx-auto px-4 lg:px-6"> {/* Container with responsive padding */}

        {/* Section header */}
        <div className="text-center mb-16"> {/* Centered header with bottom margin */}

          {/* Section badge */}
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"> {/* Colored badge */}
              Subjects Offered
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"> {/* Responsive heading */}
            Comprehensive Subject
            <span className="text-primary block"> {/* Highlighted text on new line */}
              Coverage
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"> {/* Centered subtitle with max width */}
            Expert tuition across multiple subjects with specialized teaching methods
            tailored for each discipline's unique requirements.
          </p>
        </div>

        {/* Subjects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
          {subjects.map((subject, index) => { // Map through subjects array
            const IconComponent = subject.icon; // Extract icon component
            return (
              <div
                key={index}
                className={`subject-card group ${subject.bgColor} rounded-xl p-3 sm:p-5 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden relative`}
                style={{
                  backgroundImage: `url(${subject.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-[2] rounded-[10px]"></div>

                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10 z-[2]"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8 z-[2]"></div>

                {/* Card content */}
                <div className="relative z-[3]">

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${subject.iconColor}`} />
                  </div>

                  {/* Text box */}
                  <div className="bg-white/60 p-2 sm:p-4
                  
                  
                  rounded-[10px]">
                    <h3 className="text-base sm:text-3xl font-bold text-black mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {subject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black opacity-90 leading-snug">
                      {subject.description}
                    </p>
                  </div>

                  {/* Learn More hover (optional) */}
                  {/* <div className="mt-3 flex items-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium">Learn More</span>
                    <div className="w-0 group-hover:w-4 h-0.5 bg-white/60 ml-2 transition-all duration-300"></div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>


<h2 className="text-white text-3xl font-bold text-center mt-16 mb-6 tracking-wide">
  🌟 Add-On Courses To Upskill You
</h2>

<div className="flex flex-wrap justify-center items-center gap-8 px-4">
  {[
    "Career Guidance", "Spoken English", "HTML", "CSS", "JavaScript",
    "MS Office", "Python", "Canva", "SQL"
  ].map((course, i) => (
    <div
      key={i}
      className="w-[140px] h-[70px] rounded-2xl bg-gradient-to-br from-[#0ea5e9] via-[#3b82f6] to-[#6366f1]
                 p-[2px] shadow-lg hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] 
                 transform transition-all duration-500 hover:scale-110 relative group animate-floating-card"
    >
      <div className="flex items-center justify-center h-full w-full bg-black/80 rounded-2xl backdrop-blur-sm">
        <p className="text-white text-center px-2 text-md font-bold group-hover:text-sky-300 transition duration-300">
          {course}
        </p>
      </div>

      {/* Glowing Aura */}
      <div className="absolute -inset-1 rounded-2xl opacity-20 blur-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 z-[-1] group-hover:opacity-40 transition duration-300" />
    </div>
  ))}
</div>





        {/* Additional information section */}
        <div className="mt-16 text-center"> {/* Top margin and centered content */}

          {/* Additional info heading */}
          <h3 className="text-2xl font-bold text-foreground mb-4"> {/* Info heading */}
            All Boards Covered
          </h3>

          {/* Board information */}
          <div className="flex flex-wrap justify-center gap-4 mb-8"> {/* Flexbox for board badges */}

            {/* Board badges */}
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* CBSE badge */}
              CBSE
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* ICSE badge */}
              ICSE
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* State Board badge */}
              State Board
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-foreground font-medium shadow-sm"> {/* IB badge */}
              IB
            </span>
          </div>

          {/* Grade levels */}
          <p className="text-muted-foreground max-w-md mx-auto"> {/* Centered grade info */}
            Classes 6th to 12th • All competitive exam preparation including JEE, NEET, and Board Exams
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;