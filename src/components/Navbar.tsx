const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 border-b border-gray-200">
      <div className="font-bold text-2xl tracking-widest">[Logo]</div>
      <ul className="flex gap-8 list-none m-0 p-0">
        <li>
          <a
            href="#"
            className="text-gray-500 no-underline border border-dashed border-gray-400 py-1 px-3 rounded-md text-base"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 no-underline border border-dashed border-gray-400 py-1 px-3 rounded-md text-base"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 no-underline border border-dashed border-gray-400 py-1 px-3 rounded-md text-base"
          >
            How It Works
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 no-underline border border-dashed border-gray-400 py-1 px-3 rounded-md text-base"
          >
            Contact
          </a>
        </li>
      </ul>
      <button className="border-2 border-dashed border-gray-400 bg-transparent text-gray-500 py-2 px-5 rounded-lg text-base cursor-pointer">
        [Button]
      </button>
    </nav>
  );
};

export default Navbar;
