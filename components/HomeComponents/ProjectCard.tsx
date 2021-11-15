import { CheckCircleIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { IMenuOptProps } from "../CustomDropdownMenuBtn";
import Image from "next/image";
interface IProjectCardProps {
  id?: number;
  title: string;
  createdAt: string | Date;
  nOfDocs: number;
  extraClassnames?: string;
  isPrimary?: boolean;
}

export type TProjectCardArr = IProjectCardProps[];

import dynamic from "next/dynamic";

const NoSSRCustomDropdownMenu = dynamic<IMenuOptProps>(
  () =>
    import("../CustomDropdownMenuBtn/index").then(
      (mod) => mod.CustomDropdownMenuBtn
    ),
  { ssr: false }
);

export const ProjectCard: NextPage<IProjectCardProps> = ({
  title,
  createdAt,
  nOfDocs,
  extraClassnames,
  id,
  isPrimary,
}) => {
  // ? Custom Dropdown Menu icons and styling for the tooltip
  const dropdownMenuOverride: IMenuOptProps = {
    override: {
      setNewIcon: <DotsVerticalIcon className="w-4" />,
      setNewTriggerClassnames: "text-[#c4c4c4]",
      setNewItemClassnames:
        "text-xs bg-white/70 filter backdrop-blur-md text-gray-600 rounded-md flex items-center gap-5 focus:outline-none cursor-default focus:bg-yellow-100 focus:font-bold p-2",
    },
  };

  return (
    <div
      className={`py-4 px-4 ${
        extraClassnames ? extraClassnames : "min-h-full  space-y-[20px]"
      } bg-white rounded-xl flex flex-col shadow-md text-xs md:text-sm`}
      onClick={() => console.log("clicked " + id)}
    >
      <header className="place-self-end">
        {isPrimary && (
          <NoSSRCustomDropdownMenu override={dropdownMenuOverride.override} />
        )}
      </header>

      <section className="flex items-center gap-4">
        <Image alt="" src={"/OverlayedRectangles.svg"} width={35} height={31} />
        {/* <div className="w-[30px] h-[26px] bg-[#FF9F00]" /> */}
        <div>
          {nOfDocs > 2 ? (
            <div className="flex relative text-xs">
              <Image
                alt=""
                src={"/PlusDocumentsCircles.svg"}
                width={42}
                height={18}
              />
              <span className="absolute top-px right-1 text-[8px] text-[#343951]">
                +{nOfDocs - 2}
              </span>
            </div>
          ) : (
            <Image alt="" src={"/Circles.svg"} width={30} height={18} />
          )}
        </div>
      </section>

      <section className="flex flex-col space-y-[10px]">
        <h2 className="capitalize text-[#343951]">{title}</h2>
        <p className="text-[8px] text-[#858A9D] md:text-xs">
          Created at: {createdAt}
        </p>
      </section>
    </div>
  );
};
