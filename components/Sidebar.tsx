import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gradient-to-br from-black via-gray-900 to-gray-700 text-white flex flex-col justify-between">
      {/* Options: Projects, Folders, Recently Deleted */}
      {/* Can also display the User Icon + name, etc when user authentication is added. */}
      <div>
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
                <Link href="/dashboard">
                  <button className="hover:text-blue-600 transition-colors duration-900">
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/starred-projects">
                  <button className="hover:text-blue-600 transition-colors duration-900">
                    Starred Projects
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/templates">
                  <button className="hover:text-blue-600 transition-colors duration-900">
                    Templates
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/recently-deleted">
                  <button className="hover:text-blue-600 transition-colors duration-900">
                    Recently Deleted
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/code">
                  <button className="hover:text-blue-600 transition-colors duration-900 font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                    Code Playground
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      <section className="text-center p-4">
        <Link href="/">
          <button className="hover:text-blue-600 transition-colors duration-900">
            UIPlayground
          </button>
        </Link>
      </section>
    </aside>
  );
}
