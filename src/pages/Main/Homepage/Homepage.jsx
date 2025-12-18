import React from 'react'
import { useUIStore } from '../../../stores/ui.store'
import { api } from '../../../lib/axios'
import { NavLink } from 'react-router-dom'
import Button from '../../../components/ui/Button'


export default function Homepage() {
  const counter = useUIStore((state) => state.counter)
  const increment = useUIStore((state) => state.incrementCounter)
  const decrement = useUIStore((state) => state.decrementCounter)

  return (
    <main className=" ">


      <h1>Homepage</h1>


      <div className="text-lg">
        Counter: <span className="text-2xl font-semibold text-blue-600">{counter}</span>
      </div>

      <div className="flex gap-4">
        <Button
          onClick={decrement}
          w='120px'
        >
          Decrement
        </Button>
        <Button
          onClick={increment}
          w='120px'
        >
          Increment
        </Button>
      </div>

      <div className=' flex flex-col gap-2'>

        <NavLink to="/about" className=" hover:underline">About</NavLink>
        <NavLink to="/login" className=" hover:underline">auth/Login</NavLink>
        <NavLink to="/register" className=" hover:underline">auth/Register</NavLink>
        <NavLink to="/hyhello" className=" hover:underline">Not Found Page</NavLink>

      </div>
    </main>
  )
}


