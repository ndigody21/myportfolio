import { CiCalendarDate } from "react-icons/ci";
import { FaUniversity } from "react-icons/fa";
function Resume() {
  return (
    <>
      <h1 className="uppercase font-serif flex justify-center text-3xl text-stone-700 font-bold p-10 mb-37">
        resume
      </h1>
      <div className="flex font-serif flex-wrap sm:flex-wrap  md:flex-nowrap justify-center gap-20">
        <div className="mb-0">
          <img
            className="w-96 h-[30rem] transform  transition duration-300"
            src="../public/images/back.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col ml-10 mr-10 gap-12 text-center">
          <h1 className=" capitalize text-xl font-semibold text-stone-700">
            work experience
          </h1>
          <div className="flex flex-col gap-2 divide-y-2">
            <div className="flex flex-col gap-4 p-2">
              <div className="flex justify-between">
                <h1 className="capitalise font-semibold">
                  Senior Front End Developer
                </h1>
                <p className="uppercase bg-slate-100 p-2 rounded-full text-sm font-medium text-green-500">
                  part time
                </p>
              </div>
              <div className="flex gap-28 text-stone-500">
                <div className="flex gap-2 capitalize">
                  <span>facebook, inc</span>
                  <span>san francisco</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">
                    <CiCalendarDate />
                  </span>
                  <span className="capitalize">november 2019-present</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-2 ">
              <div className="flex justify-between">
                <h1 className="capitalise font-semibold">
                  Senior DeVops Engineer
                </h1>
                <p className="uppercase bg-slate-100 p-2 rounded-full text-sm font-medium text-green-500">
                  full time
                </p>
              </div>
              <div className="flex gap-28 text-stone-500">
                <div className="flex gap-2 capitalize">
                  <span>facebook, inc</span>
                  <span>san francisco</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">
                    <CiCalendarDate />
                  </span>
                  <span className="capitalize">november 2019-present</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-2">
              <div className="flex justify-between">
                <h1 className="capitalise font-semibold">
                  Senior Web Designer
                </h1>
                <p className="uppercase bg-slate-100 p-2 rounded-full text-sm font-medium text-green-500">
                  part time
                </p>
              </div>
              <div className="flex gap-28 text-stone-500">
                <div className="flex gap-2 capitalize ">
                  <span>facebook, inc</span>
                  <span>san francisco</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500">
                    <CiCalendarDate />
                  </span>
                  <span className="capitalize">november 2019-present</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col divide-y-2">
              <h1 className="capitalize mt-16 font-semibold text-2xl text-stone-700 p-5">
                education
              </h1>
              <div className="flex flex-col gap-2 p-2">
                <div className="flex gap-20 items-center justify-between">
                  <h1 className="capitalise font-semibold">
                    Master in Software Engineering
                  </h1>
                  <p className="uppercas p-2 text-sm font-medium text-green-500">
                    March 2020 - November 2022
                  </p>
                </div>
                <div className="flex gap-28 text-stone-500">
                  <div className="flex gap-2 items-center capitalize ">
                    <span className="text-green-500">
                      <FaUniversity />
                    </span>
                    <span>Harvard University</span>
                  </div>
                  <div className="flex gap-3"></div>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-2">
                <div className="flex gap-16 items-center justify-between">
                  <h1 className="capitalise font-semibold">
                    Batchelor in Software Engineering
                  </h1>
                  <p className="uppercas p-2  text-sm font-medium text-green-500">
                    March 2015 - November 2019
                  </p>
                </div>
                <div className="flex gap-28 text-stone-500">
                  <div className="flex gap-2 items-center capitalize ">
                    <span className="text-green-500">
                      <FaUniversity />
                    </span>
                    <span>Columbia University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
