import { Badge } from "@/components/ui/badge";
import { SiGithub, SiLeetcode } from "react-icons/si";

const Badges = () => {
  return (
    <div className="flex gap-4 mt-4 flex-wrap">
      <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all">
        <a
          href="https://leetcode.com/u/Prathamesh28/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <SiLeetcode className="text-xl" />
          leetcode/prathamesh28
        </a>
      </Badge>

      <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 transition-all">
        <a
          href="https://github.com/pratham107"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <SiGithub className="text-xl" />
          github/pratham107
        </a>
      </Badge>
    </div>
  );
};

export default Badges;