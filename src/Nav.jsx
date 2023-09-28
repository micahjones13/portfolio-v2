import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className=" text-lg flex items-center flex-col md:flex-row space-between text-black fixed w-full">
      {/*img here*/}
      <Link className="hover:text-[#8BC34A] m-2" to={"/"}>
        Micah Jones
      </Link>
      <ul className="list-none flex items-center p-0 mt-2 md:mt-0 md:mr-0 md:ml-auto m-auto">
        {/* <li className="flex mr-6 my-2">
          <Link className="hover:text-[#8BC34A]" to={"/about"}>
            About
          </Link>
        </li> */}
        <li className="flex mr-6">
          <Link className="hover:text-[#8BC34A]" to={"/blog"}>
            Blog
          </Link>
        </li>
        <li className="flex mr-6">
          <Link className="hover:text-[#8BC34A]" to={"/work"}>
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
