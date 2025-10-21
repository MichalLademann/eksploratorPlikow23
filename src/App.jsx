import './App.css'
import FileExplorer from './FileExplorer'

const data = {
  id: 1,
  name: "root",
  type: "folder",
  children: [
    {
      id: 2,
      name: "Dokumenty",
      type: "folder",
      children: [
        {
          id: 2,
          name: "Dokumenty-w-środku",
          type: "folder",
          children: [
            { id: 3, name: "CV2.pdf", type: "file", size: "245 KB" },
            { id: 4, name: "List motywacyjny2.docx", type: "file", size: "128 KB" }
          ]
        },
        { id: 3, name: "CV.pdf", type: "file", size: "245 KB" },
        { id: 4, name: "List motywacyjny.docx", type: "file", size: "128 KB" }
      ]
    },
    {
      id: 5,
      name: "Zdjęcia",
      type: "folder",
      children: [
        { id: 6, name: "wakacje.jpg", type: "file", size: "2.1 MB" },
        { id: 7, name: "rodzina.png", type: "file", size: "1.8 MB" }
      ]
    },
    {
      id: 8,
      name: "readme.txt",
      type: "file",
      size: "1 KB"
    }
  ]
};

function App() {

  return (
    <>
      <FileExplorer fileSystem={data} />
    </>
  )
}

export default App
