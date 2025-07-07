import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="flex mt-5 lg:mt-60 flex-col md:flex-row justify-between items-start lg:items-center gap-6 text-gray-400 text-sm">
      <div className="flex gap-6 items-center text-text-brown">
        <a
          href="https://github.com/prohayas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:github" className="size-10 " />
        </a>

        <a
          href="https://www.linkedin.com/in/melbienri-gabitan-368780324/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:linkedin" className="size-10" />
        </a>
        <a
          href="https://www.facebook.com/melbienrig"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:facebook" className="size-10" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
