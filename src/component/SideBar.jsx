import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, ChevronLeft, LogOut } from 'lucide-react'
import Icon from '../assets/icon.svg'
import Receipt from '../assets/receipt.svg'

function NavIcon({ to, children, exact = false }) {
  return (
    <NavLink to={to} end={exact}>
      {({ isActive }) => (
        <div className="relative flex flex-col items-center">
          {children}
          {isActive && (
            <span className="absolute -bottom-1 w-6 h-0.5 bg-white rounded" />
          )}
        </div>
      )}
    </NavLink>
  )
}

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-purple-600 text-white flex flex-col items-center py-4">

      <div className="w-10 h-10 rounded-full bg-white/20 grid place-items-center mb-6">
        <img src={Icon} alt="App icon" className="w-6 h-6" />
      </div>

      <div className="flex flex-col items-center gap-10">
        <NavIcon to="/" exact>
          <Home className="w-6 h-6" />
        </NavIcon>

        <div className="relative flex flex-col items-center">
          <ChevronLeft className="w-6 h-6" />
        </div>

        <NavIcon to="/patients/123">
          <img src={Receipt} alt="Receipt icon" className="w-5 h-5" />
        </NavIcon>
      </div>

      <div className="flex-1" />

      <button
        type="button"
        className="mb-2 hover:opacity-90 focus:outline-none"
        aria-label="Exit"
        onClick={() => console.log('Exit clicked')}
      >
        <LogOut className="w-6 h-6" />
      </button>
    </aside>
  )
}
