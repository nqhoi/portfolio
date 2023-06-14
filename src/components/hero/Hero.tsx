"use client";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Nguyen Quoc Hoi",
      "I’m twenty-three years old",
      "",
      "My hometown is Quang Ngai",
    ],
    loop: 0,
    delaySpeed: 2000,
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://res.cloudinary.com/nqh34200/image/upload/v1686712308/demo/avatar_aelw6k.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Frontend Developer
        </h2>
        <h1 className="text-4xl lg:text6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about" onClick={handleScroll}>
            <button className="heroButton">About</button>
          </Link>
          <Link href="#workExperience" onClick={handleScroll}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills" onClick={handleScroll}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects" onClick={handleScroll}>
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact" onClick={handleScroll}>
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
