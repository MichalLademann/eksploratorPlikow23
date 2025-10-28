import Details from "./Details"
import Directory from "./Directory"

function FileExplorer({ fileSystem }) {
    return (
        <>
            {/* Od tego momentu rozdzielamy odpowiedzialność na inne
            komponenty dzieci. Teraz FileExplorer już nie robi wszystkiego
            samodzielnie. On tylko przekazuje odpowiednie wartości 
            ze zmiennej fileSystem do komponentu Directory, który dalej
            deleguje odpowiedzialność za wyświetlanie do komponentu 
            Details i w zależności albo wyświetla następne foldery
            albo same szczegóły. */}
            <Directory key={fileSystem.id} name={fileSystem.name} type={fileSystem.type} children={fileSystem.children} />
        </>
    )
}

export default FileExplorer