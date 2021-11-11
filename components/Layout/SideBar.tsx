import { NextPage } from "next";
import { CustomLink } from "../CustomLink";
import * as HeroIcons from "@heroicons/react/outline";
import { CustomDropdownMenuBtn } from "../CustomDropdownMenuBtn";

type Props = {};

const links = [
  {
    href: "/",
    label: "Home",
    icon: <HeroIcons.HomeIcon className="w-4" />,
  },
  {
    href: "/myFiles",
    label: "My Files",
    icon: <HeroIcons.DatabaseIcon className="w-4" />,
  },
  {
    href: "/recentFiles",
    label: "Recent Files",
    icon: <HeroIcons.RefreshIcon className="w-4" />,
  },
  {
    href: "/sharedFiles",
    label: "Shared Files",
    icon: <HeroIcons.ShareIcon className="w-4" />,
  },
  {
    href: "/fileRequest",
    label: "File Request",
    icon: <HeroIcons.ExclamationCircleIcon className="w-4" />,
  },
  {
    href: "/trash",
    label: "Trash",
    icon: <HeroIcons.TrashIcon className="w-4" />,
  },
];

export const SideBar: NextPage<Props> = () => {
  return (
    <aside
      className={`hidden bg-bgSideBar md:flex md:flex-col md:justify-between fixed inset-0 md:w-[clamp(192px,15vw,202px)] `}
    >
      <ul className="flex flex-col space-y-5 pt-28 pb-8 border-[#464C61] border-b">
        {links.map(({ href, icon, label }) => (
          <li key={href}>
            <CustomLink
              label={label}
              url={href}
              Icon={icon}
              extraClassnames="text-white capitalize text-sm"
            />
          </li>
        ))}
      </ul>
      <div className="flex mb-10 justify-center">
        <CustomDropdownMenuBtn />
      </div>
    </aside>
  );
};
