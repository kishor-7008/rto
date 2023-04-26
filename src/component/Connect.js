import React from 'react'
import Dashboard from './Dashboard'
import LeftSider from './LeftSider'
import Home from '../home/Home'

export default function Connect() {
  return (
    <>
    <Home/>
    <div className='main-container'>
    <LeftSider/>
    <Dashboard/>
    </div>
    </>
  )
}
