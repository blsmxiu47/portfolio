import { Routes, Route } from 'react-router-dom'

import { NavMenuContextProvider } from './contexts/NavMenuContext'
import Layout from './components/Layout'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

export default function App() {

  return (
    <NavMenuContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </NavMenuContextProvider>
  )
}