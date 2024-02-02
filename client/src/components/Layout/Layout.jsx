import { Navbar, Sidebar } from 'flowbite-react'
import React from 'react'

function Layout({children}) {
  return (
    <div>
      <Navbar/>
        <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
