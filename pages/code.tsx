import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import FileTree from "@/components/code/FileTree";
import Header from "@/components/Header";

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

  // Function to handle code changes in the editor
  const handleEditorChange = (newCode: string | undefined) => {
    if (newCode !== undefined) {
      setCode(newCode); // Update the code state with the latest changes
    }
  };

  return (
    <main className="h-screen">
      <Header />
      <div className="flex">
        <section className="w-1/4">
          <FileTree />
        </section>
        <section className="w-2/4">
          <Editor
            height="100%"
            width="100%"
            theme="vs-dark"
            defaultLanguage="html" // Set the language to HTML
            value={code} // Bind the current code state to the editor
            onChange={handleEditorChange} // Update the code state on editor change
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
              srcDoc={code}
              style={{ width: "100%", height: "100%", border: "none" }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
