export default function Navbar() {

  return (

    <nav className="bg-gray-900 text-white p-4 flex justify-between">

      <h1 className="text-2xl font-bold">
        Kajal.dev
      </h1>

      <ul className="flex gap-6">

        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>

      </ul>

    </nav>

  );
}