import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-start">
      <div>
        {/* Social Icons */}
        <SocialIcon url="" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="" fgColor="gray" bgColor="transparent" />
      </div>

      <div className="flex flex-row">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <div className="uppercase hidden"></div>
      </div>
    </header>
  );
}
