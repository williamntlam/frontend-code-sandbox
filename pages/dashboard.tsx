export default function Dashboard() {
  return (
    <div>
      <aside>
        {/* Options: Projects, Folders, Recently Deleted */}
        {/* Can also display the User Icon + name, etc when user authentification is added. */}
        This is the sidebar.
        <section>Profile Section</section>
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
      <main>
        {/* Two pages to appear: Projects + Recently Deleted */}
        This is the main content that is displayed based on what is selected on
        the sidebar.
      </main>
    </div>
  );
}
