import type { NextPage } from "next";
import Head from "next/head";
import { AsideDetails } from "../components/HomeComponents/AsideDetails";
import { InputSearch } from "../components/HomeComponents/InputSearch";
import { ProjectCard } from "../components/HomeComponents/ProjectCard";
import { RecentFilesSection } from "../components/HomeComponents/RecentFiles";
import { SharedWithMeSection } from "../components/HomeComponents/SharedWithMe";
import { PROJECTS } from "../utils/PROJECTS";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Css Nerdery challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`flex`}>
        <div className="main-content-container flex flex-col w-full md:w-4/6">
          <InputSearch />
          <h1 className="font-bold text-xl text-left">Recently Used</h1>
          <div className="mt-4 grid place-items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  ">
            {PROJECTS.map(({ createdAt, id, nOfDocs, title }) => (
              <div key={id}>
                <ProjectCard
                  title={title}
                  createdAt={createdAt}
                  nOfDocs={nOfDocs}
                  id={id}
                  isPrimary={true}
                  extraClassnames="max-w-sm"
                />
              </div>
            ))}
          </div>

          <RecentFilesSection />
          <SharedWithMeSection />
        </div>
        <aside className="bg-[#F5F6FC] hidden md:block md:w-2/6">
          <AsideDetails />
        </aside>
      </main>
    </>
  );
};

export default Home;
