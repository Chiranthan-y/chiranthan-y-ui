"use client"; // This is a client component 👈🏽
import About from "./Pages/About";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
export default function Index() {
  return (
    <div>
      <head>
        <title>Chiranthan Y</title>
        <link rel="icon" href="./RedLogo.svg" sizes="any" />
      </head>
      <Main>
        <Home />
        <About />
      </Main>
    </div>
  );
}
