function Footer() {
  return (
    <div className="p-20 mt-14 font-mono bg-slate-50">
      <div className="flex flex-wrap sm:flex-nowrap gap-10  ">
        <div className="flex flex-col gap-5">
          <h1 className="capitalize font-semibold">about gody</h1>
          <h1 className="capitalize text-stone-500 w-96">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </h1>
          <h1 className="capitalize">connect</h1>
          <div className="flex items-center gap-2">
            <span>f</span>
            <span>t</span>
            <span>i</span>
            <span>l</span>
            <span>p</span>
            <span>g</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="capitalize font-semibold">navigation</h1>
          <div className="uppercase text-stone-500 flex flex-col gap-2">
            <h1>HTML 5</h1>
            <h1>CSS 3</h1>
            <h1>j query</h1>
            <h1>bootstrap</h1>
            <h1>javascript</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="capitalize font-semibold">services</h1>
          <div className="uppercase text-stone-500 flex flex-col gap-2">
            <h1>web design</h1>
            <h1>devops</h1>
            <h1>web developement</h1>
            <h1>e-commerce</h1>
            <h1>tutor</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="capitalize font-semibold">contact</h1>
          <div className=" capitalize text-stone-500 flex flex-col gap-2">
            <h1>43 Raymouth Rd. Baltemoer, London 3910</h1>
            <h1>+1(123)-456-7890</h1>
            <h1>+1(123)-456-7890</h1>
            <h1>godyndi418@gmail.com</h1>
          </div>
        </div>
      </div>
      <h1 className="flex justify-center capitalize font-semibold text-stone-500 mt-20 text-sm">
        Copyright ©2024 All rights reserved | This template is made with ❤ by
        gody
      </h1>
    </div>
  );
}

export default Footer;
