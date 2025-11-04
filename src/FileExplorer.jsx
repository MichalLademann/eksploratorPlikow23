import Details from "./Details"
import Directory from "./Directory"

function FileExplorer({ fileSystem }) {
    return (
        <>
            {}
            <Directory key={fileSystem.id} name={fileSystem.name} type={fileSystem.type} children={fileSystem.children} />
        </>
    )
}

export default FileExplorer