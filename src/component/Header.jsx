import React from "react"
import BreadCrumb from "./BreadCrumb.jsx"
import { Button } from "./Button.jsx"
import { Pencil } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="mb-3">
          <BreadCrumb />
        </div>

        <div className="grid grid-cols-[1fr_minmax(480px,1fr)] gap-8 items-start">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 grid place-items-center font-semibold text-gray-700">
              WC
            </div>

            <div className="flex flex-col leading-tight">
              <div className="text-lg font-semibold text-gray-900">
                Wimtach Client
              </div>
              <div className="text-xs text-gray-500">
                Last Active: Mar 20, 2019 23:14
              </div>

              <Button className="self-start mt-2">
                Discharge Patient
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4 grid grid-cols-2 gap-x-6 gap-y-3 w-full">
              <div>
                <p className="text-sm text-gray-500">Phone:</p>
                <p className="font-medium">(555) 555-5555</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email:</p>
                <p className="font-medium break-words">wimtachclient@hotmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Injury Location:</p>
                <p className="font-medium">Right</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Diagnosis:</p>
                <p className="font-medium">
                  Other specified malignant neoplasm of skin, unspecified - C4499
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Edit"
              className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-sm"
            >
              <Pencil className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
