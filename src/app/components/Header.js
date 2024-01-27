import Image from "next/image";
const Header = () => {
  return (
    <header className="">
      <div className="flex justify-between justify-items-center">
        <div className="">
          <Image src="./RedLogo.svg" width={75} height={75} alt="Main Logo" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end p-2">
            <a>mechiranthan.y@gmail.com</a>
          </div>
          <div className="text-2xl">
            <ul className="flex justify-between">
              <li className="mx-3">About</li>
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
