import { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/#home" },
  { name: "About", to: "/#about" },
  { name: "Projects", to: "/#projects" },
  { name: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 md:px-8 lg:px-10"
      >
        <div className="flex flex-1">
          <Link to="/#home" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only md:not-sr-only md:text-sm font-semibold text-gray-100">
              Athish's Portfolio
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold leading-6 text-white hover:text-orange-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop “CTA” on the right (e.g., Resume) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/#resume"
            className="text-sm font-semibold leading-6 text-white hover:text-orange-300 transition-colors"
          >
            Resume <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu overlay + panel */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-over panel */}
          <div className="ml-auto h-full w-full max-w-xs bg-gray-900 p-6 shadow-xl ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <Link to="/#home" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-sm font-bold text-white">
                  AR
                </span>
                <span className="text-sm font-semibold text-gray-100">
                  Athish's Portfolio
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-4">
                <Link
                  to="/#resume"
                  onClick={() => setMobileOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
