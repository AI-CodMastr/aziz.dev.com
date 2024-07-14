import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook,} from "react-icons/fa"

const socials = [
  {icon: <FaGithub />, path: "https://github.com/Farhan-Zafar-Aziz"},
  {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/farhan-zafar-aziz-13b42128a/"},
  {icon: <FaWhatsapp />, path: "https://wa.me/+923183040822"},
  {icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100095317784169"},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return ( <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
        </Link>
        );
      })}
    </div>
  )
}

export default Social