import AuthCard from "./AuthCard";

const Auth = () => {
  return (
    <section className=" relative">
      {/* background  */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20    w-full h-screen"></div>
      {/* container */}
      <div className="container mx-auto custom-container h-screen relative">
        <AuthCard />
      </div>
    </section>
  );
};

export default Auth;
