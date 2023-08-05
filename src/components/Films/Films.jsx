import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import s from './Films.module.css'
import Stars from './Stars/Stars'

const Films = () => {
  let [input, setInput] = useState([])

  const onInput = (val) => {
    setInput(val)
  }

  return (
    <Routes>
      <Route path='/films' element={
        <div className={s.container}>
          <input type="number" onChange={(ev) => onInput(ev.target.value)} className={ s.input } placeholder='Введите число... ' />
          <Stars count={ input }/>
        </div>
      } />
    </Routes>
  )
}

export default Films 