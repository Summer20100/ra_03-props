import s from './Listing.module.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import List from './List/List'
import state from './store/etsy.json'

const Listing = () => {

  let items = [...state].filter(el => el.state.includes('active'))

  return (
    <Routes>
      <Route path='/listing' element={
        <div className={s.container}>
          <List state={items} />
        </div>
      } />
    </Routes>
  )
}

export default Listing 