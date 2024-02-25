const Home = () => {
  return (
    <div
      className="flex flex-col justify-center justify-items-center text-center h-screen"
      id="#Home"
    >
      <div className="py-2">
        <h1 className="text-5xl font-semibold">Welcome to My Portfolio.</h1>
      </div>
      <div className="py-2">
        <h1 className="text-5xl font-semibold">
          I'm
          <span className="text-6xl font-extrabold text-primaryred">
            Chiranthan Y
          </span>
          , a Full-stack Developer.
        </h1>
      </div>
      <div className="py-2">
        <p className="text-xl font-light">
          Crafting Seamless Digital Experiences Empowering Possibilities through
          Code
        </p>
      </div>
    </div>
  );
};

export default Home;
