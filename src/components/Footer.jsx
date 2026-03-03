import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="mb-4">© 2026 TaskFlow. All rights reserved.</p>

      <div className="flex justify-center gap-6 text-xl">
        <FaFacebook className="hover:text-indigo-400 cursor-pointer" />
        <FaTwitter className="hover:text-indigo-400 cursor-pointer" />
        <FaInstagram className="hover:text-indigo-400 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;