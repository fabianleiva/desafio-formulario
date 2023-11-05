import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SocialButton = ({ facebook, github, linkedin }) => {
  return (
    <>
      <div id="buttons">
        {facebook && <BsFacebook className="icon" />}
        {github && <BsGithub className="icon" />}
        {linkedin && <BsLinkedin className="icon" />}
      </div>
    </>
  );
};
export default SocialButton;
