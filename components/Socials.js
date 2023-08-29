// next link
import Link from "next/link";
// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiDiscordLine,
  RiSteamLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.instagram.com/diego_esc45/?hl=es"}
        className="hover:text-emerald-400 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/diego.couba20/"}
        className="hover:text-emerald-400 transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={"https://discordapp.com/users/751245043117064302"}
        className="hover:text-emerald-400 transition-all duration-300"
      >
        <RiDiscordLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/diego-escalante-54898a237/"}
        className="hover:text-emerald-400 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://steamcommunity.com/profiles/76561198343965103/"}
        className="hover:text-emerald-400 transition-all duration-300"
      >
        <RiSteamLine />
      </Link>
      <Link
        href={"https://github.com/couba45"}
        className="hover:text-emerald-400 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
