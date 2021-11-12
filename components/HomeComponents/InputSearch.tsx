import { SearchIcon } from "@heroicons/react/outline";
import { NextPage } from "next";

type Props = {};

export const InputSearch: NextPage<Props> = () => {
  return (
    <div className="my-5 relative transition-colors duration-200 focus-within:text-gray-400 text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon className="w-4" />
      </span>
      <input
        type="search"
        className="w-full transition-colors duration-200 py-2 text-sm focus:text-white focus:bg-[#343951] rounded-lg pl-10 focus:outline-none bg-white text-gray-900"
        placeholder="Search..."
      />
    </div>
  );
};
