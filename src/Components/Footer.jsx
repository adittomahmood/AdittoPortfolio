import React from "react";

import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 relative overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 bg-black z-0 animate-pulse-slow opacity-80">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: '2px',
              height: '2px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: 'twinkle 3s infinite alternate'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col items-center space-y-8 relative z-10">
        <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x">
          Let's Connect
        </h2>

        <div className="flex space-x-8 items-center justify-center">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/adittomahmood/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125 hover:rotate-6 hover:text-blue-400"
          >
            <FaLinkedin
              size={60}
              className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            />
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/adittoAwesome/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125 hover:-rotate-6 hover:text-blue-600"
          >
            <FaFacebook
              size={60}
              className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            />
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/adittomahmood"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125 hover:rotate-3 hover:text-purple-400"
          >
            <FaGithub
              size={60}
              className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            />
          </a>

    
        </div>

        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Aditto Mahmood. All Rights Reserved
        </div>
      </div>

      {/* Custom styles for starry background and gradient animation */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-pulse-slow {
          animation: pulse 5s infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;