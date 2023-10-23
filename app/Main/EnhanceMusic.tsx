import Image from "next/image";
import React from "react";
import enhanceimage from "../../public/images/enhance.png";
const EnhanceMusic = () => {
  return (
    <div>
      <Image
        src={enhanceimage}
        alt="music product"
        width={600}
        height={400}
        className="w-[70em] "
      />
      <div className="bg-green-400 rounded-sm absolute top-[171em] left-[10em]">
        <button className="w-[10em] h-[4rem] text-white ">Buy Now!</button>
      </div>
    </div>
  );
};

export default EnhanceMusic;
