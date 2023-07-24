import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex justify-around">
      <div className="flex">
        <Image
          src={"/images/original-51cc3dbf7f70e471591987e6211a2b95.jpg"}
          alt="logo"
          height={20}
          width={20}
        ></Image>
        <h1 className="font-bold text-xl">Tracker Mortgage</h1>
      </div>
    </div>
  );
};
