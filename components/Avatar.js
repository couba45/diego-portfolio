// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={
          "https://github.com/couba45/diego-portfolio/blob/28a8bb929a343d32931c002254feb4b55953509a/public/avatar-no-bg.png"
        }
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
