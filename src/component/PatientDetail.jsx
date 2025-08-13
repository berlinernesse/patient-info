import React from "react"
import SampleImage from "../assets/samplepicture.png"

export default function PatientDetail() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[880px_360px] gap-6">
        <section className="bg-white rounded-[12px] shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-[18px] font-semibold text-gray-900">
              New HEP for Wimtach Client
            </h2>
            <p className="text-sm text-gray-500">Edited 16 hours ago</p>
          </div>
          <div className="border-t border-gray-200" />

          <div className="grid grid-cols-[1fr_1fr_200px]">
            <div className="px-6 py-8 flex flex-col items-center justify-center text-center">
              <p className="text-gray-500">Sessions per Day</p>
              <p className="mt-2 text-2xl font-semibold">5</p>
            </div>

            <div className="relative">
              <span className="absolute inset-y-8 left-0 w-px bg-gray-200" />
              <div className="h-full px-6 py-8 flex flex-col items-center justify-center text-center">
                <p className="text-gray-500">Total Reps</p>
                <p className="mt-2 text-2xl font-semibold">254</p>
              </div>
            </div>

            <div className="bg-[#D58BDF] flex items-center justify-center">
              <button type="button" className="text-white font-medium">
                Edit HEP
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-[1fr_140px] bg-white rounded-[12px] shadow-sm border border-gray-200 overflow-hidden min-h-[196px]">
          <div className="px-4 py-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[16px] font-semibold text-gray-900">Stats</h3>
              <p className="text-xs text-gray-500">Streaks</p>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">for Period 3</p>

            <div className="mt-3 flex items-center gap-2">
              {[0,1,2,3,4,5,6].map(i => (
                <span
                  key={i}
                  className={
                    "inline-block w-5 h-5 rounded-full border " +
                    (i === 5 ? "bg-blue-500 border-blue-500" : "border-gray-300")
                  }
                />
              ))}
            </div>

            <div className="mt-2 grid grid-cols-7 text-[10px] text-gray-500">
              {["Wed","Thu","Fri","Sat","Sun","Mon","Today"].map((d,i)=>(
                <span key={i} className="text-center">{d}</span>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 border-t border-gray-200 divide-x divide-gray-200">
              <div className="py-3 pr-3">
                <p className="text-xs text-gray-500">Weeks Enrolled</p>
                <p className="mt-1 text-lg font-semibold">9</p>
              </div>
              <div className="py-3 pl-3">
                <p className="text-xs text-gray-500">Compliance</p>
                <p className="mt-1 text-lg font-semibold">16/30</p>
              </div>
            </div>
          </div>

          <div className="bg-[#E39D37] text-white flex items-center justify-center">
            <button type="button" className="font-medium">View Stats</button>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-[880px_360px] gap-6">
        <div />
        <button
          type="button"
          className="h-12 rounded-[12px] bg-[#2E8AF0] text-white font-medium shadow-sm"
        >
          View Billing Details
        </button>
      </div>

      <div className="grid grid-cols-[880px_360px] gap-6">
        <section className="bg-white rounded-[12px] shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-[16px] font-semibold text-gray-900">Patient Education</h3>
          </div>

          <div className="px-6 py-6">
            <p className="text-gray-500 mb-4">Coming soon</p>
            <div className="rounded-lg border border-gray-200 p-4 bg-white">
              <img
                src={SampleImage}
                alt="Patient Education"
                className="w-full h-48 object-contain"
              />
            </div>
          </div>
        </section>
        <div />
      </div>
    </div>
  )
}
