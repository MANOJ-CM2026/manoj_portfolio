import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center gap-2 group">
        <div className="flex items-center justify-center w-10 h-10 bg-primary text-black font-bold text-xl rounded-full group-hover:scale-105 transition-transform duration-300">
          M
        </div>
        <span className="text-xl font-bold tracking-wide">
          Manoj Anbalagan
        </span>
      </Link>
    </>
  );
};

export default Logo;
