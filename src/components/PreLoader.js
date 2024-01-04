import React from "react";
import Image from 'next/image';

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <Image
          src="assets/images/loader.png"
          alt="loader"
          width={800}
          height={700}
        />
      </div>
    </div>
  );
};
export default PreLoader;
