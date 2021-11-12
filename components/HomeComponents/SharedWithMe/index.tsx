import { NextPage } from "next";
import { ProjectCard, TProjectCardArr } from "../ProjectCard";

interface Props {}

const SHARED_WITH_ME_PROJECTS: TProjectCardArr = [
  {
    id: 1,
    title: "Landing page",
    createdAt: "10/05/2021",
    nOfDocs: 10,
    isPrimary: true,
  },
  {
    id: 2,
    title: "Illustration Pack",
    createdAt: "10/05/2021",
    nOfDocs: 10,
    isPrimary: false,
  },
  {
    id: 3,
    title: "CV Design",
    createdAt: "10/05/2021",
    nOfDocs: 10,
    isPrimary: false,
  },
];

export const SharedWithMeSection: NextPage<Props> = () => {
  return (
    <article>
      <h3 className="text-lg font-bold">Shared with me</h3>
      <p className="text-xs text-[#858A9D]">
        You have
        <span className="font-bold mx-1">{SHARED_WITH_ME_PROJECTS.length}</span>
        projects shared with you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {SHARED_WITH_ME_PROJECTS.map(({ createdAt, nOfDocs, title, id }) => (
          <div key={id}>
            <ProjectCard
              createdAt={createdAt}
              nOfDocs={nOfDocs}
              title={title}
              isPrimary={false}
              extraClassnames="h-full gap-2"
            />
          </div>
        ))}
      </div>
    </article>
  );
};
