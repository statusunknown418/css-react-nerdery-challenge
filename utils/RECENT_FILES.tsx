import { IRecentFileItemProps } from "../components/HomeComponents/RecentFileItem";

export const RECENT_FILES_ITEMS: IRecentFileItemProps = [
  {
    id: 1,
    title: "Travel Landing Page",
    members: ["Alvaro", "Emma", "Angie"],
    lastModified: new Date("12/10/2020"),
    tagColor: "blue",
  },
  {
    id: 2,
    title: "True Photos",
    members: ["Alvaro", "Emma"],
    lastModified: new Date("12/10/2020"),
    tagColor: "green",
  },
  {
    id: 3,
    title: "Dashboard Structure",
    members: ["Alvaro", "Emma", "Angie", "Juan", "Valeria"],
    lastModified: new Date("12/10/2020"),
    tagColor: "red",
  },
  {
    id: 4,
    title: "Character Illustration",
    members: ["Alvaro"],
    lastModified: new Date("12/10/2020"),
    tagColor: "yellow",
  },
];
