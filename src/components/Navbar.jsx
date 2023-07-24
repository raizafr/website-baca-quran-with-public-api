import { Link, useLocation } from "react-router-dom";
import quran from "../../public/pngwing.png";

const Navbar = () => {
  const location = useLocation().pathname;

  return (
    <nav className="sticky top-0 z-20 flex w-full flex-wrap items-center justify-between text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-70 lg:py-4 lg:px-20 bg-transparent backdrop-blur-md">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <a
            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0 space-x-2"
            href="#"
          >
            <img src={quran} alt="" className="w-9" />
            <span className="font-medium dark:text-neutral-200">
              Baca Qur'an
            </span>
          </a>
        </div>
        <div className="">
          <Link
            className={`rounded-lg hover:text-black text-white bg-primary hover:bg-blue-500 px-3 py-1 ${
              location == "/" ? "hidden" : ""
            }`}
            to={"/"}
          >
            kembali
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
