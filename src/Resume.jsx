import React from 'react';

function Resume() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">📄 My Resume</h2>
      <p className="mb-8 text-gray-400">
        You can view or download my resume using the buttons below.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/Yug_Bothra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300"
        >
          👁️ View Resume
        </a>
        <a
          href="/Yug_Bothra_Resume.pdf"
          download
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
