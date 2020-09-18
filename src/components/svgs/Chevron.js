import React from "react";
const Chevron = ({transform, HandleClick}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0"
      y="0"
      width="56"
      height="56"
      viewBox="0 0 444.531 444.531"
      xmlSpace="preserve"
      onClick={HandleClick}
    >
      <path
        transform={transform ? "scale (-1, 1)" : ""}
        transform-origin="center"
        d="M213.13 222.409L351.88 83.653c7.05-7.043 10.567-15.657 10.567-25.841 0-10.183-3.518-18.793-10.567-25.835l-21.409-21.416C323.432 3.521 314.817 0 304.637 0s-18.791 3.521-25.841 10.561L92.649 196.425c-7.044 7.043-10.566 15.656-10.566 25.841s3.521 18.791 10.566 25.837l186.146 185.864c7.05 7.043 15.66 10.564 25.841 10.564s18.795-3.521 25.834-10.564l21.409-21.412c7.05-7.039 10.567-15.604 10.567-25.697 0-10.085-3.518-18.746-10.567-25.978L213.13 222.409z"
        data-original="#fff"
        className="active-path"
        data-old_color="#fff"
        // fill="#fff"
      />
      <style id="stylish-2" type="text/css" />
    </svg>
  );
};

export default Chevron;
