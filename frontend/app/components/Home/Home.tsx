import URLForm from "./URLForm";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* background  */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20    w-full h-screen -z-10"></div>
      <div className="container mx-auto custom-container">
        {/* text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-6xl font-bold text-gray-800">
            Make your links <span className="text-fuchsia-600">shorter</span>{" "}
            and smarter
          </h1>

          <p className="text-gray-700 mt-4">
            SnapURL helps you create clean, professional URLs that are easy to
            share and track. Perfect for social media, marketing campaigns, and
            personal use.
          </p>

          {/* url field */}
          <URLForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
