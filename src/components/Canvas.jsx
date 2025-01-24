import About from './About';
import FloatNav from './FloatNav'
import Info from './Info'



const Canvas = () => {
  return (
    <div className="min-h-screen relative">
        <Info />
        <div className="about mt-8">
            <About/>
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
