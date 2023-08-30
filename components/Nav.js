// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: `${process.env.NEW_PATH_IMG}/`, icon: <HiHome /> },
  {
    name: "about",
    path: `${process.env.NEW_PATH_IMG}/about`,
    icon: <HiUser />,
  },
  {
    name: "services",
    path: `${process.env.NEW_PATH_IMG}/services`,
    icon: <HiRectangleGroup />,
  },
  {
    name: "projects",
    path: `${process.env.NEW_PATH_IMG}/work`,
    icon: <HiViewColumns />,
  },

  {
    name: "contact",
    path: `${process.env.NEW_PATH_IMG}/contact`,
    icon: <HiEnvelope />,
  },
];

// next links
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className=" flex flex-col items-center  xl:justify-center gap-y-4 fixed  h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
      {/* Inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center bg-gray-900 gap-y-10 px-4 md:px-40 xl:py-4 xl:px-0 h-[80px] xl:h-max backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "bg-emerald-200 text-black rounded-xl"
              } relative group hover:bg-emerald-400 hover:text-black p-4 rounded-3xl hover:rounded-xl bg-gray-800 transition-all`}
            >
              <div className="">{link.icon}</div>
              <span className="absolute w-auto p-2   xl:bottom-3 xl:origin-right left-[50%] translate-x-[-50%] xl:left-auto bottom-20  xl:translate-x-0 xl:right-16 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 group-hover:scale-100">
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
