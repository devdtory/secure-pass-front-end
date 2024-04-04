import Link from "next/link";

interface NavigationLink {
  children: React.ReactNode;
  name: string;
  link: string;
}

export const NavigationLink = ({ children, name, link }: NavigationLink) => {
  return (
    <Link
      href={link ?? "/"}
      className="px-6 flex items-center justify-start rounded h-[60px] cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-[#A0A0A0]  place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit overflow-clip whitespace-nowrap  text-[16px]">
        {name}
      </p>
    </Link>
  );
};
