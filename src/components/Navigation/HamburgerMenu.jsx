"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Services",
      subMenu: [
        { name: "Consulting", link: "#" },
        { name: "Development", link: "#" },
      ],
    },
    { name: "Products", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        {/* Hamburger Icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <nav className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 text-black">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                {item.subMenu ? (
                  <details className="group">
                    <summary className="cursor-pointer flex justify-between items-center">
                      {item.name}
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <ul className="mt-1 pl-4">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-1 hover:bg-gray-200">
                          <a href={subItem.link}>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a href={item.link}>{item.name}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </div>
  );
};

export default HamburgerMenu;
