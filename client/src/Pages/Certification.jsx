import React from "react";

function Certification() {
  const frameStyle = {
    borderImage:
      "url('//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/frame.png') 93 92 87 92 stretch stretch",
    borderColor: "#f4be52",
    borderStyle: "inset",
    borderWidth: "60px",
    display: "block",
    width: "40%",
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
      <div className="flex flex-col w-full">
        <div className="my-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3476/3476457.png"
            alt="Example"
            style={frameStyle}
          />
        </div>
        <div className="my-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3476/3476457.png"
            alt="Example"
            style={frameStyle}
          />
        </div>
        <div className="my-16">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3476/3476457.png"
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
