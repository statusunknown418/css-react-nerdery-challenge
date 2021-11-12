import { NextPage } from "next";
import { CustomLink } from "../CustomLink";
// import { CustomDropdownMenuBtn } from "../CustomDropdownMenuBtn";
import { PAGE_LINKS } from "../../utils/LINKS";

import dynamic from "next/dynamic";

// ? This solves a Radix error
const DynamicDropdownMenu = dynamic<{}>(
  import("../CustomDropdownMenuBtn/index").then(
    (mod) => mod.CustomDropdownMenuBtn
  ),
  { ssr: false }
);

type Props = {};

export const SideBar: NextPage<Props> = () => {
  return (
    <aside
      className={`hidden bg-bgSideBar md:flex md:flex-col md:justify-between fixed inset-0 md:w-[clamp(192px,15vw,202px)] `}
    >
      <ul className="flex flex-col space-y-5 pt-28 pb-8 border-[#464C61] border-b">
        {PAGE_LINKS.map(({ href, icon, label }) => (
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
        {/* <CustomDropdownMenuBtn /> */}
        <DynamicDropdownMenu />
      </div>
    </aside>
  );
};
