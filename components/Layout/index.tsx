import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { SideBar } from "./SideBar";

type Props = {};

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <SideBar />
      {/* Used 22px for the sidebar margin */}
      {children}
    </div>
  );
};
