import sneaker from "../../tools/sneakerhero.jpeg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-between px-30 bg-gradient-to-r from-blue-600 to-teal-400">
      {/* Left Side - Text Content */}
      <div className="max-w-lg text-white">
        <h1 className="text-5xl font-extrabold uppercase leading-tight">
        All-stoke
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          <span className="text-black">Experience the future of sneakers with unmatched comfort and style.</span>
        </p>
        <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white transition duration-300 px-6 py-3 rounded-full font-semibold shadow-lg">
          Shop Now
        </button>
      </div>

      {/* Right Side - Sneaker */}
      <div className="absolute right-10 bottom-3 max-w-sm md:w-1/3 bg-gradient-to-r from-blue-300 to-teal-400 p-3 rounded-lg">
        <img
          src={sneaker}
          alt="Sneaker"
          className="w-full animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default HeroSection;
