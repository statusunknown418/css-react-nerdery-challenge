import { NextPage } from "next";
import { STYLE_DIMENSIONS } from "../../utils/constants/STYLE_DIMENSIONS";

type Props = {};

export const SideBar: NextPage<Props> = () => {
  return (
    <aside
      className={`bg-bgSideBar flex flex-col space-y-5 py-8 fixed inset-0 w-${STYLE_DIMENSIONS.NAVIGATION_SIDEBAR_WIDTH}`}
    >
      <h1>Sidebar</h1>
    </aside>
  );
};
