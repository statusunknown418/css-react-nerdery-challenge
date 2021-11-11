import { NextPage } from "next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FolderAddIcon, PlusIcon, UploadIcon } from "@heroicons/react/outline";

type Props = {};

export const CustomDropdownMenuBtn: NextPage<Props> = () => {
  const itemStyle = "";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild
        className="group bg-yellow-500 text-white px-4 py-2 rounded-lg "
      >
        <div className="flex gap-5 items-center justify-between">
          <span>Create new</span>
          <span className="w-6 h-6 transition-colors duration-150 group-hover:bg-yellow-400 p-1 rounded-md">
            <PlusIcon className="w-4" />
          </span>
        </div>
      </DropdownMenu.Trigger>

      {/* Content of the Btn */}

      <DropdownMenu.Content
        loop={true}
        sideOffset={10}
        className="bg-[#464C61] cursor-defaults rounded-lg w-40 transform-origin"
      >
        <DropdownMenu.Item className="dropdown-item transform-origin">
          <span>
            <UploadIcon className="w-4 mr-4" />
          </span>
          <span className="flex-grow">Upload File</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="dropdown-item transform-origin">
          <span>
            <FolderAddIcon className="w-4 mr-4" />
          </span>
          <span className="flex-grow">Upload Folder</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="dropdown-item transform-origin">
          <span>
            <FolderAddIcon className="w-4 mr-4" />
          </span>
          <span className="flex-grow">New Folder</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="dropdown-item transform-origin">
          <span>
            <PlusIcon className="w-4 mr-4" />
          </span>

          <span className="flex-grow">More</span>
        </DropdownMenu.Item>

        <DropdownMenu.Arrow className="transform-origin fill-current text-[#BEC0C8]" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
