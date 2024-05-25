function Navbar() {
  return (
    <div className="flex justify-between align-middle ml-8 sm:mr-28 sm:ml-28 pt-5">
      <div className="uppercase text-white ">logo</div>
      <div>
        <ul className="sm:flex hidden  gap-16 font-mono uppercase justify-center text-white font-semibold">
          <li className="transform transition duration-300 hover:translate-y-1 hover:scale-150">
            <a href="">home</a>
          </li>
          <li className="transform transition duration-300 hover:translate-y-1 hover:scale-150">
            <a href="">about</a>
          </li>
          <li className="transform transition duration-300 hover:translate-y-1 hover:scale-150">
            <a href="">services</a>
          </li>
          <li className="transform transition duration-300 hover:translate-y-1 hover:scale-150">
            <a href="">resume</a>
          </li>
          <li className="transform transition duration-300 hover:translate-y-1 hover:scale-150">
            <a href="">blog</a>
          </li>
          <li className="transform transition duration-300 hover:translate-y-1 hover:scale-150">
            <a href="">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
