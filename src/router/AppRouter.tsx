import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Tasks from '../pages/tasks'
import List from '../pages/list'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/*"  element={<Home />} />
      <Route path="/home"  element={<Home />} />
      <Route path="/tasks"  element={<Tasks />} />
      <Route path="/list" element={<List />} />
    </Routes>
  )
}