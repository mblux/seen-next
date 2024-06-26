import React from "react"
import Image from "next/image"
import fireIcon from "../../public/fire.svg"
import listIcon from "../../public/listIcon.svg"
import accountIcon from "../../public/accountIcon.svg"

const Dash = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-700 mx-auto w-full min-h-[calc(100svh-96px)] -z-10">
      <div className="flex z-0">
        <h1 className="flex mx-auto text-white text-5xl font-bold py-20">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-wrap md:gap-16 justify-center z-0">
        <div className="z-0  hover:z-0 hover:cursor-pointer overflow-hidden flex flex-col sm:w-64 w-full  bg-red-950 hover:bg-red-100  duration-100 transition-all rounded-md shadow-md  m-6">
          <Image
            src={fireIcon}
            alt={"What's Hot?"}
            className="h-52 self-center pt-10"
          />
          <div className="bg-black">
            <h2 className=" text-white text-center font-semibold text-2xl px-2 py-5">
              What&apos;s Hot
            </h2>
            <p className="text-slate-300 p-3 mb-2 text-center">
              See which new movies were just released!
            </p>
          </div>
        </div>

        <div className="overflow-hidden hover:cursor-pointer flex flex-col sm:w-64 w-full  bg-red-950 hover:bg-red-100 duration-100 transition-all rounded-md shadow-md  m-6">
          <Image
            src={listIcon}
            alt={"Your Lists"}
            className="h-52 pt-5 self-center fill-white"
          />
          <div className="bg-black ">
            <h2 className=" text-white text-center font-semibold text-2xl px-2 py-5">
              My Lists
            </h2>
            <p className=" text-slate-300 p-3 mb-2 text-center">
              Curate personalized lists of movies
            </p>
          </div>
        </div>

        <div className="overflow-hidden flex hover:cursor-pointer flex-col sm:w-64 w-full  bg-red-950 hover:bg-red-100 duration-100 transition-all rounded-md shadow-md  m-6">
          <Image
            src={accountIcon}
            alt={"Account"}
            className="h-52 pt-5 self-center"
          />
          <div className="bg-black ">
            <h2 className=" text-white text-center font-semibold text-2xl px-2 py-5">
              Account
            </h2>
            <p className=" text-slate-300 p-3 mb-2  text-center">
              Update e-mail, password, and other settings
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dash
