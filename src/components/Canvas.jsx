import About from './About';
import Blog from './Blog';
import Education from './Education';
import Experience from './Experience';
import FloatNav from './FloatNav'
import Footer from './Footer';
import Info from './Info'
import LinkedInPost from './LinkedInPost';
import Projects from './Projects';
import TechStack from './TechStack';




// eslint-disable-next-line react/prop-types
const Canvas = ({ theme }) => {
  return (
    <div className="min-h-screen relative">
            <Info theme={theme}/>
        <div className="about mt-8">
            <About theme={theme}/>
        </div>
         {/* 👇 Add 3D effect here */}
         {/* <div className="mt-12">
         <ThreeScene />
         </div> */}
        <div className="about mt-8">
            <Experience theme={theme}/>
        </div>
        <div className="about mt-8">
           <Education/>
        </div>
        
        <div className="about mt-8">
           <TechStack theme={theme}/>
        </div>
        <div className="about mt-8">
           <Projects theme={theme}/>
        </div>
        <div className="about mt-8">
           <LinkedInPost theme={theme}/>
        </div>
        <div className="about mt-8">
           <Blog theme={theme}/>
        </div>
        <div className="about mt-8">
           <Footer theme={theme}/>
        </div>
        {/* <div className="orbitingCircle mt-56">
            <OribitingCircle/>
        </div> */}

        

        {/* Align FloatNav at the bottom center and make it sticky */}
        <div className="flex justify-center items-end fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:mb-8">
          <FloatNav theme={theme} />
         </div>

    </div>
  )
}

export default Canvas;
