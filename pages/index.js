import Hero from '@/pagesComponents/HomePage/Hero'
import CommunitySection from '@/pagesComponents/HomePage/CommunitySection'
import GoalSection from '@/pagesComponents/HomePage/GoalSetion'
import TasksSection from '@/pagesComponents/HomePage/TasksSection'
import { Fragment } from 'react'
export default function Home() {
  return <Fragment>
    <Hero />
    <CommunitySection />
    <GoalSection />
    <TasksSection />
  </Fragment>
}
