import About from './About';
import Blog from './Blog';
import Experience from './Experience';
import FloatNav from './FloatNav'
import Footer from './Footer';
import Info from './Info'
import LinkedInPost from './LinkedInPost';
import Projects from './Projects';
import TechStack from './TechStack';



const Canvas = () => {
  return (
    <div className="min-h-screen relative">
          <Info />
        <div className="about mt-8">
            <About/>
        </div>
        <div className="about mt-8">
            <Experience/>
        </div>
        <div className="about mt-8">
           <TechStack/>
        </div>
        <div className="about mt-8">
           <Projects/>
        </div>
        <div className="about mt-8">
           <LinkedInPost/>
        </div>
        <div className="about mt-8">
           <Blog/>
        </div>
        <div className="about mt-8">
           <Footer/>
        </div>
        {/* <div className="orbitingCircle mt-56">
            <OribitingCircle/>
        </div> */}

        

        {/* Align FloatNav at the bottom center and make it sticky */}
        <div className="flex justify-center items-end fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:mb-8">
  <FloatNav />
</div>

    </div>
  )
}

export default Canvas;
