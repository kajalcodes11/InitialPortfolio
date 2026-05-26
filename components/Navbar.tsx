export default function Navbar() {

  return (

    <nav className="bg-gray-900 text-white p-4 flex justify-between sticky top-0">

      <h1 className="text-2xl font-bold">
        Kajal.dev
      </h1>

      <ul className="flex gap-6">

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>

  );
}