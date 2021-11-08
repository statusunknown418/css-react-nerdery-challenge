import { NextPage } from "next";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  url?: string;
  extraClassnames?: string;
  Icon?: ReactNode;
};

export const CustomLink: NextPage<Props> = ({ url, extraClassnames, Icon }) => {
  return (
    <Link href={url ? url : "/"} passHref>
      <div className={`${extraClassnames} cursor-pointer flex gap-5`}>
        {Icon}
        <span>{url ? url : "/"}</span>
      </div>
    </Link>
  );
};
