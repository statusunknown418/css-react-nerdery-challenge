import { NextPage } from "next";
import Image from "next/image";
import { PROJECTS } from "../../../utils/PROJECTS";
import { AsideProjCard } from "./AsideProjCard";

const SEED_PROJECT_USAGE = 420200;

interface Props {
  user: IAsideDetailsProps;
}

export type IAsideDetailsProps = {
  name: string;
  email?: string;
  profilePicUrl?: string;
  tier: "free" | "pro" | "enterprise";
};

export const AsideDetails: NextPage<Props> = ({ user }) => {
  return (
    <section className="flex flex-col gap-2 pt-5 px-5 fixed top-0 min-h-full">
      <header className="flex flex-row-reverse items-center gap-4 ">
        <span className="text-xs"> {user.name} </span>
        <div className="rounded-full overflow-hidden">
          <Image
            src={
              user.profilePicUrl
                ? user.profilePicUrl
                : "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            }
            width={28}
            height={28}
            alt=""
          />
        </div>
      </header>
      <hr className="bg-gray-600" />

      <h2 className="text-lg font-bold">Storage</h2>

      <div className="place-self-center relative flex mt-5">
        <p className="flex flex-col absolute top-[35%] left-[35%]">
          <span className="text-lg">85%</span>
          <span className="text-[#858A9D] text-sm">Used</span>
        </p>
        <Image alt="" src={"/storageCircles.svg"} width={140} height={140} />
      </div>
      <span className="place-self-center text-xs text-gray-400 mt-2">
        {user.tier === "pro" ? (
          <span>{SEED_PROJECT_USAGE / 1000} GB of 500 GB</span>
        ) : user.tier === "enterprise" ? (
          <span>{SEED_PROJECT_USAGE / 1000} GB of 1 TB</span>
        ) : (
          <span>{SEED_PROJECT_USAGE / 1000} GB of 1 GB</span>
        )}{" "}
        used
      </span>

      <div className="flex flex-col gap-1 mt-5">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <AsideProjCard
              createdAt={project.createdAt}
              size={project.size}
              nOfDocs={project.nOfDocs}
              color={project.color}
              title={project.title}
            />

            <hr />
          </div>
        ))}
      </div>

      <div className=" bg-white gap-2 px-5 py-10 rounded-2xl flex flex-col items-center  my-auto">
        <div className="w-32 h-20 rounded-xl bg-gradient-to-r from-primaryClrOrange via-[#FF6860] to-[#689FF8]" />
        <p className="flex flex-col items-center">
          <p className="text-sm font-bold">Buy more space</p>
          <p className="text-xs text-[#858A9D]">Upgrade to cloud premium</p>
        </p>
        <button className="bg-primaryClrOrange text-[11px] rounded-md py-2 px-4 text-white">
          Upgrade Account
        </button>
      </div>
    </section>
  );
};
