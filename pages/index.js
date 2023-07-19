import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
      <ContainerBlock
          title="Suhel Kapadia"
          description="Suhel is a final year student pursuing CSE from SCET Surat. He has been GDSC Lead of SCET for 2022-23. He is a full stack web3 developer, who has won a lot of hackathons and is now doing an internship for a startup, Clamp."
      >
        <Hero />
        <FavouriteProjects />
        <LatestCode repositories={repositories} />
      </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  // console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
