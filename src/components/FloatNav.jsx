import { BiHome } from "react-icons/bi";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { DiGithub } from "react-icons/di";
import { LiaLinkedinIn } from "react-icons/lia";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "@/Redux/feature/ThemeSlice";

const FloatNav = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(updateTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <div className="fixed bottom-6 flex left-1/2 transform -translate-x-1/2 p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full shadow-lg hover:shadow-xl transition-all ease-in-out">
      <a 
        href="#"
        className="flex justify-center items-center text-white text-xl hover:text-gray-800 bg-transparent rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
      >
        <BiHome />
      </a>
      <div className="border-l-2 border-gray-300 h-10 ml-2 mr-2"></div>
      <a 
        href="#"
        className="flex justify-center items-center text-white text-xl hover:text-gray-800 bg-transparent rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
      >
        <CiViewList />
      </a>
      <a 
        href="https://www.linkedin.com/in/prathmesh-bhopale-70b091212"
        className="flex justify-center items-center text-white text-xl hover:text-gray-800 bg-transparent rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
      >
        <LiaLinkedinIn />
      </a>
      <div className="border-l-2 border-gray-300 h-10 ml-2 mr-2"></div>
      <a 
        href="https://github.com/pratham107"
        className="flex justify-center items-center text-white text-xl hover:text-gray-800 bg-transparent rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
      >
        <DiGithub />
      </a>
      <a 
        onClick={toggleTheme}
        className="flex justify-center items-center text-white text-xl hover:text-gray-800 bg-transparent rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
      >
       {theme === 'light' ? <BsMoonStars /> : <BsSun/>}
      </a>
    </div>
  );
};

export default FloatNav;
