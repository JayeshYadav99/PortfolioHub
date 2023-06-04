import React from "react";

function Certification() {
  const frameStyle = {
    borderImage:
      "url('//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/frame.png') 93 92 87 92 stretch stretch",
    borderColor: "#f4be52",
    borderStyle: "inset",
    borderWidth: "40px",
    display: "block",
    width: "50%", // Adjust the width here
    height: "auto",
    backgroundColor: "#ffe",
    margin: "0 auto",
  };

  const frameStyleMobile = {
    borderWidth: "0px",
    width: "100%",
  };
  return (
    <>
      <h2
        className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
        style={{ textAlign: "center" }}
      >
        Certification Section
      </h2>
      <div className="flex flex-row w-full">
        <div className="my-16">
          <img
            src="https://images.credly.com/size/680x680/images/6240e108-1407-4773-8621-cc2e4736d4e6/Web_Development_with_HTML-CSS-JavaScript_Essentials.png "
            alt="Example"
            style={frameStyle}
          />
        </div>
        <div className="my-16">
          <img
            src="https://media.licdn.com/dms/image/C4D1FAQGZVpx-Nx5Hmg/feedshare-document-cover-images_1280/0/1679155504682?e=1686484800&v=beta&t=Tk5f1EGPJhX3stnur43cGUqJJtrZnLZwOeTAatTkwlE"
            alt="Example"
            style={frameStyle}
          />
        </div>
        <div className="my-16">
          <img
            src="https://images.credly.com/images/23859131-d0ff-4f44-900f-bac86165b941/image.png"
            alt="Example"
            style={frameStyle}
          />
        </div>
        <style>
          {`
          @media all and (max-width: 500px) {
            img.frame { 
              border-width: 0px;
              width: 100%;
            }
          }
        `}
        </style>
      </div>
    </>
  );
}

export default Certification;
