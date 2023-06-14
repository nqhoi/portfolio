"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

function ContactMe() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have get just what you need{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">0911903477</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">nguyenquochoi342000@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">Ha Huy Tap, Thanh Khe, Da Nang</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <SocialIcon
              network="github"
              fgColor="#F7AB0A"
              bgColor="transparent"
            />
            <p className="text-2xl">https://github.com/nqhoi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
