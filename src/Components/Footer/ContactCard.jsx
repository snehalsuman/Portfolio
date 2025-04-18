import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/your-id" },
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/your-id" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/your-id" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com/your-id" },
  { name: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/your-id" },
  { name: "GFG", icon: <SiGeeksforgeeks />, url: "https://auth.geeksforgeeks.org/user/your-id" },
];

const ContactCard = () => {
  return (
    <div className="p-6 bg-[#1e1e2f] rounded-3xl shadow-md backdrop-blur-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
  My Profiles
</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-[#2b2b3c] text-white hover:shadow-[0_8px_30px_rgba(112,66,255,0.4)] transition duration-300"
          >
            <span className="text-lg">{profile.icon}</span>
            <span className="text-sm">{profile.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;