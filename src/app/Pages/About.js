const About = () => {
  const para = `Greetings! I'm Chiranthan Y, a developer with a passion for crafting digital experiences.\nMy journey in technology has been an exciting exploration of various tools and approaches.\nI specialize in creating engaging user interfaces and bringing applications to life.\n\nIn the realm of front-end development, I focus on crafting captivating experiences.\nMeanwhile, on the back end, I enjoy using technologies that breathe life into applications.\nBehind the scenes, different tools work together seamlessly to facilitate smooth data interactions.\n\nIn the world of design, I use design tools to create aesthetically pleasing and functional user interfaces.\nBeyond the web, I extend my skills to mobile development, creating solutions for both Android and iOS using cross-platform approaches.\n\nMy designs aim to be responsive, secure, and scalable, achieved through thoughtful design practices.\nI'm always ready to collaborate on the next digital masterpiece!`;
  return (
    <div
      className="flex flex-col justify-center justify-items-center h-screen"
      id="about"
    >
      <div className="text-left">
        <h1 className="text-8xl font-extrabold text-primaryred">About Me!</h1>
      </div>
      <div className="flex justify-end text-justify py-20">
        <p className="text-2xl font-normal">{para}</p>
      </div>
    </div>
  );
};

export default About;
