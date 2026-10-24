import About from './About';
import Blog from './Blog';
import Education from './Education';
import Experience from './Experience';
import FloatNav from './FloatNav'
import Footer from './Footer';
import Info from './Info'
import Projects from './Projects';
import TechStack from './TechStack';
import React from 'react';



// eslint-disable-next-line react/prop-types
const Canvas = ({ theme }) => {

   const [showFloatNav, setShowFloatNav] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      setShowFloatNav(!nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen relative">
      <header>
        <Info theme={theme} />
      </header>
      <main>
        <div className="about mt-8" id="about">
          <About theme={theme} />
        </div>
        <div className="about mt-8" id="experience">
          <Experience theme={theme} />
        </div>
        <div className="about mt-8" id="education">
          <Education theme={theme} />
        </div>
        <div className="about mt-8" id="skills">
          <TechStack theme={theme} />
        </div>
        <div className="about mt-8" id="projects">
          <Projects theme={theme} />
        </div>
        <div className="about mt-8" id="blog">
          <Blog theme={theme} />
        </div>
      </main>
      <Footer theme={theme} />

        <div className="flex justify-center items-end fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:mb-8">
          {showFloatNav &&<FloatNav theme={theme} />}
         </div>

    </div>
  )
}

export default Canvas;
