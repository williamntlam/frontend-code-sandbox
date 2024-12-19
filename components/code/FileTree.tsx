import { useState, useEffect } from "react";

// Define types for File and Folder
interface FileItem {
  name: string;
  type: "file";
}

interface FolderItem {
  name: string;
  type: "folder";
  children: FileTreeStructure[];
}

type FileTreeStructure = FileItem | FolderItem;

// Props for FileTree Component
interface FileTreeProps {
  structure: FileTreeStructure[];
  onFileSelect: (file: FileItem) => void;
}

// Recursive Component for File Tree
function FileTree({ structure, onFileSelect }: FileTreeProps) {
  return (
    <ul className="pl-4">
      {structure.map((item) => (
        <li key={item.name}>
          {item.type === "folder" ? (
            <details>
              <summary className="cursor-pointer hover:text-blue-600">
                {item.name}
              </summary>
              <FileTree structure={item.children} onFileSelect={onFileSelect} />
            </details>
          ) : (
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => onFileSelect(item)}
            >
              {item.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function FileExplorerPage() {
  const [fileTree, setFileTree] = useState<FileTreeStructure[]>([]);
  const [currentFile, setCurrentFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string>("");

  // Mock Fetch File Tree (Replace with your S3 API Call)
  const fetchFileTree = async () => {
    const mockTree: FileTreeStructure[] = [
      {
        name: "folder1",
        type: "folder",
        children: [
          { name: "file1.txt", type: "file" },
          {
            name: "subfolder",
            type: "folder",
            children: [{ name: "file2.txt", type: "file" }],
          },
        ],
      },
      {
        name: "folder2",
        type: "folder",
        children: [{ name: "file3.txt", type: "file" }],
      },
    ];
    setFileTree(mockTree);
  };

  const fetchFileContent = async (fileKey: string) => {
    // Mock File Content Fetch (Replace with S3 File Retrieval)
    setFileContent(`Content of ${fileKey}`);
  };

  useEffect(() => {
    fetchFileTree();
  }, []);

  const handleFileSelect = (file: FileItem) => {
    setCurrentFile(file.name);
    fetchFileContent(file.name);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-gray-700">
      {/* File Tree */}
      <div className="flex-grow text-white">
        <h2 className="p-4 text-lg font-semibold">File Tree</h2>
        <FileTree structure={fileTree} onFileSelect={handleFileSelect} />
      </div>
    </div>
  );
}
