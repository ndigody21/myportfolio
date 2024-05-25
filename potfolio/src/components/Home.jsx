import backgroundImage from "../../public/images/back.jpg";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div
        className="bg-image h-screen bg-cover"
        style={{
          backgroundImage: ` linear-gradient(to bottom right, rgba(9, 5, 54, 0.3), rgba(5, 4, 46, 0.7)), url(${backgroundImage})`,
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <MobileNav />
        <div className="bg-image h-screen bg-cover flex justify-center items-center text-white text-center">
          <div>
            <h1 className="uppercase font-semibold font-mono text-3xl">
              I am Mbemngong Godwill
            </h1>
            <h3 className="uppercase font-mono font-semibold text-2xl">
              A Front-end Developer/DeVops Engineer
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
