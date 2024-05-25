function Testimonials() {
  return (
    <div className=" bg-slate-50  font-serif mt-20">
      <h1 className="flex justify-center capitalize font-bold text-3xl text-stone-700 p-10">
        Happy Clients
      </h1>
      <div className="flex flex-col gap-10 sm:mr-20 sm:ml-20 p-10 text-stone-500">
        <div className="flex flex-wrap md:flex-nowrap sm:flex-wrap gap-3">
          <div className="flex">
            <div>
              <img
                className="border-white border-[.2rem] rounded-full sm:w-[17rem] md:w-[14rem] w-[19rem] h-14 object-cover
            shadow-md"
                src="../public/images/back.jpg"
                alt="image"
              />
            </div>
            <blockquote
              className="ml-4 hover:transform transition duration-300 hover:scale-105 p-10 flex flex-col gap-5 bg-white rounded-lg shadow-md relative @apply mb-4 pl-8 pr-8 border-l border-gray-400
"
            >
              <p>
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <cite>— Jeremy Winston, CEO XYZ Inc.</cite>
            </blockquote>
          </div>
          <div className="flex">
            <div>
              <img
                className="border-white border-[.2rem] rounded-full w-[19rem] sm:w-[17rem] md:w-[14rem] h-14 object-cover
        shadow-md"
                src="../public/images/back.jpg"
                alt="image"
              />
            </div>
            <blockquote
              className="ml-4 p-10 flex flex-col hover:transform transition duration-300 hover:scale-105 gap-5 bg-white rounded-lg shadow-md relative @apply mb-4 pl-8 pr-8 border-l border-gray-400
            "
            >
              <p>
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <cite>— Jeremy Winston, CEO XYZ Inc.</cite>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-wrap md:flex-nowrap gap-3">
          <div className="flex">
            <div>
              <img
                className="border-white border-[.2rem] rounded-full w-[19rem] sm:w-[17rem] md:w-[14rem] h-14 object-cover
              shadow-md"
                src="../public/images/back.jpg"
                alt="image"
              />
            </div>
            <blockquote
              className="ml-4 p-10 flex hover:transform transition duration-300 hover:scale-105 flex-col gap-5 bg-white rounded-lg shadow-md relative @apply mb-4 pl-8 pr-8 border-l border-gray-400
"
            >
              <p>
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <cite>— Jeremy Winston, CEO XYZ Inc.</cite>
            </blockquote>
          </div>
          <div className="flex">
            <div>
              <img
                className="border-white border-[.2rem] rounded-full w-[19rem] sm:w-[17rem] md:w-[14rem] h-14 object-cover
              shadow-md"
                src="../public/images/back.jpg"
                alt="image"
              />
            </div>
            <blockquote
              className="ml-4 p-10 hover:transform transition duration-300 hover:scale-105 flex flex-col gap-5 bg-white rounded-lg shadow-md relative @apply mb-4 pl-8 pr-8 border-l border-gray-400
            "
            >
              <p>
                “Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.”
              </p>
              <cite>— Jeremy Winston, CEO XYZ Inc.</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
