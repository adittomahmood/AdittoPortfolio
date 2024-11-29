import React, { useState } from "react";
import portfolioData from "../assets/portfolio.json";

const ProjectCard = ({ title, description, image, link, credentials }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="perspective-500 transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        card 
        h-full 
        bg-white 
        shadow-lg 
        border 
        border-gray-100 
        rounded-xl 
        overflow-hidden 
        transform 
        transition-all 
        duration-300 
        ${isHovered ? "rotate-y-2 shadow-xl" : ""}
      `}
      >
        {/* Image Section with Overlay Effect */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`
              absolute 
              inset-0 
              w-full 
              h-full 
              object-cover 
              transition-transform 
              duration-300 
              ${isHovered ? "scale-110" : "scale-100"}
            `}
          />
          <div
            className={`
            absolute 
            inset-0 
            bg-black 
            bg-opacity-0 
            hover:bg-opacity-20 
            transition-all 
            duration-300
          `}
          ></div>
        </div>

        {/* Card Body */}
        <div className="card-body p-4 flex flex-col justify-between">
          <div>
            <h2
              className={`
              card-title 
              text-lg 
              font-bold 
              mb-2 
              text-gray-800 
              transition-colors 
              duration-300 
              ${isHovered ? "text-blue-600" : ""}
            `}
            >
              {title}
            </h2>
            <p className="text-gray-600 text-sm mb-3">{description}</p>

            {credentials && (
              <div
                className={`
                bg-gray-50 
                p-2 
                rounded-lg 
                text-xs 
                transition-all 
                duration-300 
                ${
                  isHovered
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
              `}
              >
                <div className="flex items-center mb-1">
                  <span className="font-semibold mr-2 text-gray-700">
                    Email:
                  </span>
                  <span className="text-gray-900">{credentials.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2 text-gray-700">
                    Password:
                  </span>
                  <span className="text-gray-900">{credentials.password}</span>
                </div>
              </div>
            )}
          </div>

          {/* Visit Website Button */}
          <div className="card-actions justify-center mt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button
                className={`
                btn 
                btn-accent 
                w-full 
                py-2 
                rounded-lg 
                text-sm
                transition-all 
                duration-300 
                hover:scale-105 
                active:scale-95 
                ${isHovered ? "shadow-md" : "shadow-sm"}
              `}
              >
                Visit Website
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div
      className={`
      grid 
      grid-cols-3 
      gap-6 
      p-6 
      max-lg:grid-cols-1 
      max-lg:p-3
      transition-colors 
      duration-300
    `}
    >
      {portfolioData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
