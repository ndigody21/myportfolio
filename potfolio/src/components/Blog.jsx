function Blog() {
  return (
    <>
      <h1 className="flex font-serif justify-center capitalize text-3xl font-bold p-10 text-stone-700">
        Read on Medium
      </h1>
      <div className="flex font-serif flex-col gap-10 divide-y-2 md:ml-44 mr-5 ml-5 sm:mr-10 sm:ml-10 md:mr-44">
        <div className="flex justify-between p-2">
          <div>
            <h1 className="text-stone-500 capitalize">june 28 2020</h1>
            <h1 className="capitalize w-56 sm:w-96 text-stone-700 font-semibold text-2xl">
              Front-end Developer Demands today
            </h1>
          </div>
          <div>
            <h1 className="uppercase text-stone-500">two mins read</h1>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <h1 className="text-stone-500 capitalize">june 28 2020</h1>
            <h1 className="capitalize text-stone-700 font-semibold text-2xl">
              I Used React JS
            </h1>
          </div>
          <div>
            <h1 className="uppercase text-stone-500">two mins read</h1>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div>
            <h1 className="text-stone-500 capitalize">june 28 2020</h1>
            <h1 className="capitalize w-56 sm:w-96 text-stone-700 font-semibold text-2xl">
              Why Front-end Developer So Important
            </h1>
          </div>
          <div>
            <h1 className="uppercase text-stone-500">two mins read</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
