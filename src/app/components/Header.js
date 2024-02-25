import { useState, useEffect } from "react";
import Image from "next/image";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const rotationFactor = 0.5;
      const newRotateDegree = scrollY * rotationFactor;

      const image = document.getElementById("rotatingImage");
      if (image) {
        image.style.transform = `rotate(${newRotateDegree}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-10 mx-20 py-4">
      <div className="flex justify-between justify-items-center">
        <div className="">
          <Image
            id="rotatingImage"
            src={scrolled ? "WhiteLogo.svg" : "./RedLogo.svg"}
            width={75}
            height={75}
            alt="Main Logo"
            className="transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end p-2">
            <a>mechiranthan.y@gmail.com</a>
          </div>
          <div className="text-2xl">
            <ul className="flex justify-between">
              <li className="mx-3">
                <a href="#about">About</a>
              </li>
              <li className="mx-3">Experience</li>
              <li className="mx-3">Works</li>
              <li className="mx-3">Social</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
