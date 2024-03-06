import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Copy = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-primary ">
      <div className="flex justify-center md:justify-between items-center gap-10 flex-wrap mx-2 sm:mx-6 ">
        <div className="flex justify-center items-center gap-2 text-white py-8 border-t-[1px] border-[#212741] ">
          <FaRegCopyright size={30} />
          <p>{currentYear} Redshift. All right reserved.</p>
        </div>
        <div>
          <Link to="https://heldertechnologies.com/">
            <p className="text-white">Powered by Helder Technologies.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copy;
