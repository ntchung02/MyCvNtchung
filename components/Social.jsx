import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ntchung02",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/ntchung0610/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/tienchung0610",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ntcl.02/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
