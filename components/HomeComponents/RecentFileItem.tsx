import { NextPage } from "next";

interface RecentFileDetails {
  id: number;
  title: string;
  members: string[];
  lastModified: Date;
  tagColor: string;
}

export type IRecentFileItemProps = RecentFileDetails[];

export const RecentFileItem: NextPage<RecentFileDetails> = ({
  lastModified,
  members,
  tagColor,
  title,
}) => {
  return (
    <article className="grid grid-cols-4 text-xs items-center justify-center bg-white rounded-[10px] py-3 px-4">
      <div className="flex gap-2 items-center col-span-2">
        <span
          className={`w-2 h-2 rounded-full`}
          style={{ backgroundColor: tagColor }}
        />
        <h3 className="text-sm truncate">{title}</h3>
      </div>
      <div>
        <p className="hidden sm:block text-[#858A9D]">
          {members.length} Members
        </p>
      </div>
      <div>
        <p className="text-[#858A9D] place-self-center truncate">
          {lastModified
            .toUTCString()
            .slice(0, lastModified.toUTCString().length - 12)}
        </p>
      </div>
    </article>
  );
};
