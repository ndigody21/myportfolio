import { FaAws } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { MdOutlineDeveloperMode } from "react-icons/md";

function Services() {
  return (
    <>
      <h1 className="flex font-serif justify-center font-bold text-stone-700 text-3xl uppercase mt-24">
        services
      </h1>
      <div className="flex font-serif flex-wrap sm:flex-wrap md:flex-nowrap justify-evenly mt-10 gap-4 mr-20 ml-20 sm:mr-32 sm:ml-32">
        <div className="flex transition duration-300 hover:bg-green-200 flex-col gap-9 border rounded-md p-5 sm:p-10">
          <div className="text-green-50 pt-5 rounded-full w-20 h-20 mt-0 mb-0 ml-auto mr-auto  bg-green-700 text-[3rem] flex justify-center">
            <MdOutlineDeveloperMode />
          </div>
          <h1 className="uppercase font-semibold text-stone-700 flex justify-center">
            development
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="flex hover:bg-green-200 rounded-md transition duration-300 flex-col gap-9 border p-10">
          <div className="text-green-50 pt-5 rounded-full w-20 h-20 mt-0 mb-0 ml-auto mr-auto  bg-green-700 text-[3rem] flex justify-center">
            <DiPhotoshop />
          </div>
          <h1 className="uppercase font-semibold text-stone-700 flex justify-center">
            design
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="flex hover:bg-green-200 rounded-md transition duration-300 flex-col gap-9 border p-10">
          <div className="text-green-50 pt-5 rounded-full w-20 h-20 mt-0 mb-0 ml-auto mr-auto  bg-green-700 text-[3rem] flex justify-center">
            <FaAws />
          </div>
          <h1 className="uppercase font-semibold text-stone-700 flex justify-center">
            devops
          </h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
