import { Link } from 'react-router-dom';
import { useState } from 'react';
import { version } from '../../version';

export default function NewToolbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="flex items-center bg-zinc-800 min-h-[56px] relative">
      <div className="flex flex-1 bg-zinc-800 items-center mx-1">
        {/* Hamburger button for mobile */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            onClick={() => setShowMobileMenu((v) => !v)}
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <p className="fa-solid fa-bars"/>
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex">``
          <Link to="/">
            <button className="text-zinc-400 hover:bg-zinc-600 font-bold mx-1 my-2 py-2 px-4 rounded hover:cursor-pointer">Home</button>
          </Link>
          <Link to="/about">
            <button className="text-zinc-400 hover:bg-zinc-600 font-bold mx-1 my-2 py-2 px-4 rounded hover:cursor-pointer">About</button>
          </Link>
          <Link to="/social">
            <button className="text-zinc-400 hover:bg-zinc-600 font-bold mx-1 my-2 py-2 px-4 rounded hover:cursor-pointer">Social</button>
          </Link>
        </div>

        <div className="flex-1" />
        <div className="flex text-zinc-400 items-center justify-center" style={{ marginRight: 5 }}>Version: {version}</div>

        <a className="flex items-center justify-center mx-1 p-1" href="https://test-blog.axelsparkster.gg/" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-blog fa-lg text-zinc-400 hover:cursor-pointer"/>
        </a>
        <a className="flex items-center justify-center mx-1 p-1" href="https://axelsparkster.gg" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-bluesky fa-lg text-zinc-400 hover:cursor-pointer"/>
        </a>
        <a className="flex items-center justify-center mx-1 p-1" href="https://github.com/AxelSparkster" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-lg text-zinc-400 hover:cursor-pointer"/>
        </a>
        <a className="flex items-center justify-center mx-1 p-1" href="https://trello.com/b/CtYfAAPA/shootingintospace" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-trello fa-lg text-zinc-400 hover:cursor-pointer"/>
        </a>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 w-full bg-zinc-900 sm:hidden z-50">
          <Link to="/" onClick={() => setShowMobileMenu(false)}>
            <div className="block px-4 py-2 text-zinc-200 hover:bg-zinc-700">Home</div>
          </Link>
          <Link to="/about" onClick={() => setShowMobileMenu(false)}>
            <div className="block px-4 py-2 text-zinc-200 hover:bg-zinc-700">About</div>
          </Link>
          <Link to="/social" onClick={() => setShowMobileMenu(false)}>
            <div className="block px-4 py-2 text-zinc-200 hover:bg-zinc-700">Social</div>
          </Link>
        </div>
      )}
    </nav>
  );
}