export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between w-full bg-gradient-to-br from-black via-gray-900 to-gray-700">
      <section className="text-white font-bold">
        <button className="hover:text-blue-600 transition-colors duration-900">
          Home
        </button>
      </section>
      <section className="text-white font-bold">
        <button className="hover:text-blue-600 transition-colors duration-900">
          William Lam
        </button>
      </section>
    </header>
  );
}
