import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function CodePage() {
  const [code, setCode] = useState<string>(`<!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; }
            h1 { color: #ff6347; }
          </style>
        </head>
        <body>
          <h1>Hello World!</h1>
          <p>Edit this code and see the changes live!</p>
        </body>
        </html>`);

  return (
    <main className="flex h-screen">
      <section className="w-1/2">
        <Editor
          height="100%"
          width="100%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// Write your code here."
          options={{
            minimap: { enabled: true },
            automaticLayout: true,
          }}
        />
      </section>
      <section className="flex-grow">
        <div style={{ flex: 1 }}>
          <iframe
            title="Live Preview"
            srcDoc={code} // Dynamically injects the HTML, CSS, and JS code
            style={{ width: "100%", height: "100%", border: "none" }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </section>
    </main>
  );
}
