import React from "react";

const Footer = () => {
  return (
    <footer className="bg-grey-100 text-center lg:text-left">
      <div className="container mx-auto bg-pink-400 p-2 text-gray-800">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="mb-6 md:mb-0">
            <h5 className="font-medium mb-2 uppercase">Dummy text</h5>

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h5 className="font-medium mb-2 uppercase">Dummy text</h5>

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
        </div>
      </div>

      <div
        className="text-center container mx-auto p-2 text-gray-700 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <a className="text-green-600" href="https://tailwind-elements.com/">
          Tailwind Elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;
