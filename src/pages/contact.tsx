import React from "react";

const Contact = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header className="bg-gray-800 text-white py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TDD Example</h1>
          <nav>
            <ul className="flex">
              <li className="ml-4">
                <a href="/">Home</a>
              </li>
              <li className="ml-4">
                <a href="/about">About</a>
              </li>
              <li className="ml-4">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>This is the Contact page content.</p>
      </main>
      <footer className="bg-gray-800 text-white py-4 px-8 mt-auto">
        <div className="container mx-auto">
          <p className="text-center">
            © 2024 TDD Example. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
