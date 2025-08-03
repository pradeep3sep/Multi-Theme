const About = () => {
  return (
    <div className="w-full min-h-screen bg-bk-50 dark:text-gray-100 text-gray-800 dark:text-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-tx-500">About This Project</h1>
          <p className="text-lg text-tx-500">
            A modern React application styled with Tailwind CSS, powered by Vite for blazing-fast development.
          </p>
        </header>

        <section className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-5 text-gray-700 dark:text-gray-200">
            <li>React 19 with React Router v7</li>
            <li>Tailwind CSS v4 (via @tailwindcss/vite)</li>
            <li>Axios for HTTP requests</li>
            <li>Vite v7 for fast dev builds</li>
            <li>TypeScript support</li>
            <li>ESLint with React + TypeScript plugins</li>
          </ul>
        </section>

        <section className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            This application serves as a scalable front-end foundation with support for strict linting, component-based development, and effortless styling. Ideal for dashboards, admin panels, or custom UI platforms.
          </p>
        </section>

        <footer className="text-center text-sm text-tx-500">
          &copy; {new Date().getFullYear()} Multi Theme. Built with ❤️ and open-source tools.
        </footer>
      </div>
    </div>
  );
};

export default About;
