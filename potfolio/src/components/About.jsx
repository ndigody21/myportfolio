function About() {
  return (
    <div className="flex mr-10 ml-10 flex-wrap sm:ml-4 md:mr-32 md:ml-32 sm:mr-4 sm:flex-nowrap mt-4 gap-10 p-4">
      <div>
        <img
          className="rounded-xl h-[20rem] w-[105rem]"
          src="./public/images/back.jpg"
          alt="image"
        />
      </div>
      <div className="flex font-serif flex-col justify-evenly">
        <div>
          <h1 className="uppercase font-extrabold text-stone-800 mb-7 text-3xl">
            about me
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth
          </p>
        </div>
        <div className="flex justify-center">
          <button className="text-center mt-6 uppercase hover:bg-gradient-to-l bg-gradient-to-r from-green-500 to-green-700 w-60 p-3 text-green-50 font-semibold rounded-full">
            hire me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
