import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { STYLE_DIMENSIONS } from "../../utils/constants/STYLE_DIMENSIONS";
import { SideBar } from "./SideBar";

type Props = {};

export const Layout: NextPage<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <SideBar />
      <main className={`ml-${STYLE_DIMENSIONS.NAVIGATION_SIDEBAR_WIDTH}`}>
        {children}
      </main>
    </div>
  );
};
