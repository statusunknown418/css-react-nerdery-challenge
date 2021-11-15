import { NextPage } from "next";
import { IProjectCardProps } from "../ProjectCard";

export const AsideProjCard: NextPage<IProjectCardProps> = ({
  title,
  nOfDocs,
  color,
  size,
  createdAt,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 py-2 justify-between">
        <div className="flex gap-3">
          <span
            className="w-7 h-7 rounded-md"
            style={{ backgroundColor: color }}
          />
          <div className="flex flex-col capitalize">
            <p className="text-sm">{title}</p>
            <p className="text-[8px] text-gray-600">{nOfDocs} files</p>
          </div>
        </div>
        {size && (
          <span className="text-xs font-semibold px-2 bg-white rounded-sm">
            {size / 1000} GB
          </span>
        )}
      </div>
    </div>
  );
};
