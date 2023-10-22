import React, { useState } from "react";

export default function Dropdown() {
  // Declaring state variables
  const dropdownItems = ["Select", "Yes", "Probably not"];
  const [isOpen, setIsOpen] = useState(false);
  const [changeText, setChangeText] = useState("Select");

  // Function to handle mouse hover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Function to handle item click and update the selected text
  const handleItemClick = (item) => {
    setChangeText(item);
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-screen flex flex-col gap items-center justify-center bg-gray-50">
        <div className="bg-white max-w-3xl p-8 rounded-lg flex flex-col gap-8">
          <h1 className="text-4xl">Should you use a dropdown</h1>
          <div className="relative inline-block text-left">
            <div>
              <button
                onMouseEnter={handleMouseEnter}
                type="button"
                className="inline-flex justify-left gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {changeText}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {isOpen && (
              <div
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {dropdownItems.map((item, index) => (
                    <a
                      href="#"
                      key={index}
                      onClick={() => handleItemClick(item)}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id={`menu-item-${index}`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
