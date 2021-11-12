import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  icon: SVGAElement | ReactNode;
  classNames: string;
}

export const CustomDropDownIcon: NextPage<Props> = ({ classNames, icon }) => {
  return (
    <DropdownMenuItem className={classNames}>
      <span>{icon}</span>
      <span className="flex-grow">Upload File</span>
    </DropdownMenuItem>
  );
};
