import { Link } from 'react-router-dom';
import { version } from '../../version'

export default function NewToolbar(){
    return (
      <nav position="fixed" class="flex items-center bg-zinc-800 min-h-[56px]">
        <div class="flex flex-1 bg-zinc-800 items-center mx-1" >

          <div>
            <Link to="/">
              <button className="text-zinc-400 hover:bg-zinc-600 font-bold my-2 py-2 px-4 rounded hover:cursor-pointer">Home</button>
            </Link>
            <Link to="/about">
              <button className="text-zinc-400 hover:bg-zinc-600 font-bold my-2 py-2 px-4 rounded hover:cursor-pointer">About</button>
            </Link>
            <Link to="/social">
              <button className="text-zinc-400 hover:bg-zinc-600 font-bold my-2 py-2 px-4 rounded hover:cursor-pointer">Social</button>
            </Link>
          </div>
          
          <div class="flex-1"/>
          <div class="flex text-zinc-400 items-center justify-center" style={{ marginRight: 5 }}>Version: {version}</div> {/* TODO: hide the version better to not expose package.json? */}

            <a class="flex items-center justify-center mx-1 p-1" href="https://test-blog.axelsparkster.gg/" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-blog fa-lg text-zinc-400 hover:cursor-pointer"></i>
            </a>
            <a class="flex items-center justify-center mx-1 p-1" href="https://axelsparkster.gg" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-bluesky fa-lg text-zinc-400 hover:cursor-pointer"></i>
            </a>
            <a class="flex items-center justify-center mx-1 p-1" href="https://github.com/AxelSparkster" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github fa-lg text-zinc-400 hover:cursor-pointer"></i>
            </a>
            <a class="flex items-center justify-center mx-1 p-1" href="https://trello.com/b/CtYfAAPA/shootingintospace" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-trello fa-lg text-zinc-400 hover:cursor-pointer"></i>
            </a>
        </div>
      </nav>
    )};