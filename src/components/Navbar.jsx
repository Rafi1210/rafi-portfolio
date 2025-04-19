
import logo from "../assets/portfolio-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" bg-red-400 mb-20 flex items-center justify-between py-6">
    <div className="container flex flex-shrink-0 items-center">
        <img className="h-12" src={logo} alt="" />
    </div>

  </nav>
}

export default Navbar
