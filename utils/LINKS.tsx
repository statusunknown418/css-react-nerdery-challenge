import * as HeroIcons from "@heroicons/react/outline";

export const PAGE_LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <HeroIcons.HomeIcon className="w-4" />,
  },
  {
    href: "/myFiles",
    label: "My Files",
    icon: <HeroIcons.DatabaseIcon className="w-4" />,
  },
  {
    href: "/recentFiles",
    label: "Recent Files",
    icon: <HeroIcons.RefreshIcon className="w-4" />,
  },
  {
    href: "/sharedFiles",
    label: "Shared Files",
    icon: <HeroIcons.ShareIcon className="w-4" />,
  },
  {
    href: "/fileRequest",
    label: "File Request",
    icon: <HeroIcons.ExclamationCircleIcon className="w-4" />,
  },
  {
    href: "/trash",
    label: "Trash",
    icon: <HeroIcons.TrashIcon className="w-4" />,
  },
];
