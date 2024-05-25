import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="font-serif md:ml-20 md:mr-20">
      <h1 className="flex justify-center text-3xl text-stone-700 font-bold m-20 capitalize">
        Contact Me
      </h1>
      <div className="flex flex-wrap sm:gap-20 sm:flex-wrap md:flex-nowrap justify-between ">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div className="flex ml-10 flex-col w-[10rem] md:w-[19rem]">
              <label className="capitalize text-stone-500" htmlFor="gody">
                first name
              </label>
              <input
                className="border-b outline-none border-stone-700 placeholder:capitalize "
                type="text"
                id="gody"
              />
            </div>
            <div className="flex flex-col w-[14rem] md:w-[20rem]">
              <label className="capitalize text-stone-500" htmlFor="gody">
                last name
              </label>
              <input
                className="border-b outline-none border-stone-700 placeholder:capitalize "
                type="text"
                id="godu"
              />
            </div>
          </div>
          <div className="flex flex-col ml-10 w-[25rem] md:w-[40rem]">
            <label className="capitalize text-stone-500" htmlFor="gody">
              email
            </label>
            <input
              className="border-b outline-none border-stone-700 placeholder:capitalize"
              type="text"
              id="gody"
            />
          </div>
          <textarea
            placeholder="description"
            name="text"
            id=""
            className="border-b md:w-[40rem] ml-10 w-[25rem] outline-none placeholder:uppercase border-stone-700"
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-green-400 p-2 ml-10  w-44 uppercase text-sm text-green-50 hover:bg-green-300 rounded-full">
            send message
          </button>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="flex sm:justify-center mt-6 justify-start font-semibold text-2xl capitalize">
            contact info
          </h1>
          <div className="flex gap-2 items-center">
            <span>icon</span>
            <h1 className="w-[26rem]">
              43 Raymouth Rd. Baltemoer, London 3910
            </h1>
          </div>
          <div className="flex gap-2 text-green-300 items-center">
            <span>
              <BsFillTelephoneFill />
            </span>
            <h1>+1(123)-456-7890</h1>
          </div>
          <div className="flex gap-2 items-center text-green-300">
            <span>
              <FaWhatsapp />
            </span>
            <h1>+1(123)-456-7890</h1>
          </div>
          <div className="flex gap-2 items-center text-green-300">
            <span>
              <MdAlternateEmail />
            </span>
            <h1>godyndi418@gmail.com</h1>
          </div>
          <div className="flex gap-2 items-center text-green-300">
            <span>
              <FaLinkedin />
            </span>
            <h1>https://Gody/</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
