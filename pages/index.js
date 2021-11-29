import Hero from "@/pagesComponents/HomePage/Hero";
import CommunitySection from "@/pagesComponents/HomePage/CommunitySection";
import GoalSection from "@/pagesComponents/HomePage/GoalSetion";
import TasksSection from "@/pagesComponents/HomePage/TasksSection";
import { Fragment } from "react";
import Head from "next/head";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title> 100 jours à coder | Accueil </title>;
      </Head>
      <Hero />
      <CommunitySection />
      <GoalSection />
      <TasksSection />
    </Fragment>
  );
}
