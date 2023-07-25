import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-700">
      <div className="pt-5 flex justify-center">
        <div className="flex gap-4">
          <a href="https://github.com/raizafr">
            <AiFillGithub className="scale-150 hover:text-gray-500" />
          </a>
          <a href="mailto:mhdraizafarhan@gmail.com">
            <AiFillMail className="scale-150 hover:text-red-700" />
          </a>
          <a href="https://wa.me/6282268347830">
            <BsWhatsapp className="scale-125 hover:text-green-500" />
          </a>
        </div>
      </div>
      <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:{" "}
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="mailto:mhdraizafarhan@gmail.com"
        >
          Raiza
        </a>
      </div>
    </footer>
  );
};

export default Footer;
