import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  url?: string;
  extraClassnames?: string;
  Icon?: ReactNode;
  label?: string;
};

export const CustomLink: NextPage<Props> = ({
  url,
  extraClassnames,
  Icon,
  label,
}) => {
  // * Router will handle the display of the classes if page is selected
  const router = useRouter();

  const isActive = router.pathname === url ? true : false;

  const CustomSpan = ({ children }: { children: ReactNode }) => (
    <span
      className={`${
        isActive ? "text-white font-bold" : "text-[#858A9D]"
      } flex-grow`}
    >
      {children}
    </span>
  );

  return (
    <Link href={url ? url : "/"} passHref>
      <div
        className={`${extraClassnames} cursor-pointer relative flex items-center justify-between space-x-5 py-3 pl-[15%] ${
          !isActive && "text-[#858A9D]"
        }`}
      >
        <span>{Icon}</span>
        {isActive && (
          <div className="absolute -left-5 top-0 w-3 h-11 rounded-r-lg bg-white " />
        )}
        <CustomSpan>{label}</CustomSpan>
      </div>
    </Link>
  );
};
