import { NextPage } from "next";
import { RECENT_FILES_ITEMS } from "../../../utils/RECENT_FILES";
import { RecentFileItem } from "../RecentFileItem";

interface Props {}

export const RecentFilesSection: NextPage<Props> = () => {
  return (
    <section className="my-5">
      <h2 className="font-bold text-lg">Recent Files</h2>
      <header className="flex flex-col">
        <ul className="grid grid-cols-2 place-items-center justify-items-start gap-2 text-[#858A9D] text-xs sm:grid-cols-4">
          <li className="pl-3 sm:col-span-2 ">Name</li>
          <li className=" hidden sm:block">Members</li>
          <li className="place-self-end sm:place-self-auto pr-2">
            Last Modified
          </li>
        </ul>
      </header>
      <div className="flex flex-col gap-2">
        {RECENT_FILES_ITEMS.map(
          ({ id, lastModified, members, tagColor, title }) => (
            <div key={id}>
              <RecentFileItem
                id={id}
                lastModified={lastModified}
                members={members}
                tagColor={tagColor}
                title={title}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
