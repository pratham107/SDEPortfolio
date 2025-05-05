import TypewriterEffect from "./TypeWriter";

const Info = () => {
    return (
      <div className="mt-4 flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-12 lg:mt-10 lg:items-center lg:gap-10">
        {/* Text Section */}
        <div className="nameInfo text-center lg:text-left space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Hi, I'm Prathmesh <span className="wave text-blue-500">👋</span>
          </h1>
          <h3 className="text-md text-gray-600 mt-2">
            Software Engineer turned Entrepreneur.
            I love building things and helping people.
            Very active on Twitter.
          </h3>
          <div className="mt-4">
            <TypewriterEffect />
          </div>
        </div>
  
        {/* Image Section */}
        <div className="image mt-6 lg:mt-0">
          <img
            src="https://i.ibb.co/v6pnmvH3/Chat-GPT-Image-Apr-24-2025-10-28-24-PM.png"
            alt="Profile Pic"
            className="rounded-full w-32 h-32 object-cover shadow-lg transition-all hover:scale-110 hover:shadow-xl ease-in-out duration-300"
          />
        </div>
      </div>
    );
};
  
export default Info;
