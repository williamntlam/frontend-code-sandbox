import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white fixed">
      {/* Options: Projects, Folders, Recently Deleted */}
      {/* Can also display the User Icon + name, etc when user authentification is added. */}
      <section className="text-center p-10">
        <div className="flex flex-col items-center">
          <Image
            src="/profile.png"
            width={350}
            height={350}
            alt="Profile Picture"
          />
          <h2 className="mt-4 text-xl font-semibold">Hello, William Lam!</h2>
        </div>
      </section>

      <section>
        Navigation Buttons
        <nav>
          <ul>
            <li>Projects</li>
            <li>Recently Deleted</li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
