import { Badge } from "@/components/ui/badge";
import { SiGithub } from "react-icons/si";

// eslint-disable-next-line react/prop-types
const Badges = ({ theme }) => {
  const githubClass =
    theme === 'dark'
      ? 'border border-white/10 bg-zinc-800 text-white hover:bg-zinc-700'
      : 'border border-slate-200 bg-slate-900 text-white hover:bg-slate-800'

  return (
    <div className="mt-1 flex flex-wrap justify-center gap-3 lg:justify-start">
      <Badge className={`h-11 w-36 justify-center rounded-md px-4 text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5 ${githubClass}`}>
        <a
          href="https://github.com/pratham107"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full w-full items-center justify-center gap-2"
        >
          <SiGithub className="text-lg" aria-hidden="true" />
          GitHub
        </a>
      </Badge>
    </div>
  );
};

export default Badges;