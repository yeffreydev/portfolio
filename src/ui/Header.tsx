export default function Header() {
  return (
    <div className="items-center flex h-[50px] border-gray-300 border-b">
      <div className="flex mx-auto md:w-9/12 lg:w-8/12 w-full">
        <div>
          <a href="#home">logo</a>
        </div>
        <nav className="flex-1 pr-3">
          <ul className="flex  w-ful justify-end gap-10">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
