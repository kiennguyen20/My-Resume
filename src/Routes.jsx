import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { path } from './constants/path'
import MainLayout from './pages/MainLayout/MainLayout'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Exp from './components/Exp/Exp'
import Edu from './components/Edu/Edu'

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path={path.home}
        render={() => {
          return <Redirect to={path.about}></Redirect>
        }}
      />
      <Route path={path.about}>
        <MainLayout>
          <AboutMe />
        </MainLayout>
      </Route>
      <Route path={path.myskills}>
        <MainLayout>
          <Skills />
        </MainLayout>
      </Route>
      <Route path={path.experience}>
        <MainLayout>
          <Exp />
        </MainLayout>
      </Route>
      <Route path={path.education}>
        <MainLayout>
          <Edu />
        </MainLayout>
      </Route>
    </Switch>
  )
}
