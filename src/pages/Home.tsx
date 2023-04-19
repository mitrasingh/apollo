import { TaskCard } from '../components/TaskCard'
import { SearchBar } from '../components/SearchBar'
import React from 'react'


export const Home = () => {
  return (
    <>
        <SearchBar />
        <TaskCard />
    </>
  )
}
