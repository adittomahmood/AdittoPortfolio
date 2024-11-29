import React from "react";

const Banner = () => {
  const downloadFileAtURL = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/sjCnsJx/464346236-450375494768469-5842341053293853921-n.jpg"
            className="max-w-sm max-lg:w-80 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="max-lg:mt-6 text-5xl font-bold">Hi,There!</h1>
            <p className="py-6">
              I am Tasneem Bin Mahmood. My nickname is Aditto and I work as a
              Front-End Web Developer. Currently, I'm developing my skills in
              Back-End development.
            </p>
            <button
              className="btn btn-warning"
              onClick={() =>
                downloadFileAtURL("/Resume.pdf", "Tasneem_Bin_Mahmood_CV.pdf")
              }
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
