import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white">
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

      <section className="text-center">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard/projects">
                <button className="hover:text-blue-600 transition-colors duration-900">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/starred-projects">
                <button className="hover:text-blue-600 transition-colors duration-900">
                  Starred Projects
                </button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/templates">
                <button className="hover:text-blue-600 transition-colors duration-900">
                  Templates
                </button>
              </Link>
            </li>
            <li>
              <Link href="recently-deleted">
                <button className="hover:text-blue-600 transition-colors duration-900">
                  Recently Deleted
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
