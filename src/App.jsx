import React from "react"
import Sidebar from "./component/SideBar.jsx"
import Header from "./component/Header.jsx"
import PatientDetail from "./component/PatientDetail.jsx"
import BackgroundBlobs from "./component/BackgroundBlob.jsx"

const WIDTH = "w-[1280px]"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Sidebar />

      <div className="ml-20 relative">
        <BackgroundBlobs />

        <div className="sticky top-0 z-40 bg-white shadow">
          <div className={`${WIDTH} mx-auto px-6 py-4`}>
            <Header />
          </div>
        </div>

        <div className={`${WIDTH} mx-auto px-6 py-6`}>
          <PatientDetail />
        </div>
      </div>
    </div>
  )
}