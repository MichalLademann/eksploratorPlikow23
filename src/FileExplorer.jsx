function FileExplorer({ fileSystem }) {
    function display(x) {
        if (x.type === "folder") {
            return (
                <>
                    <p>{x.name}, {x.type}</p>
                    {x.children.map(
                        (y) =>
                            display(y)

                    )}
                </>
            )
        } else {
            return (
                <>
                    <p>{x.name}, {x.type}</p>
                </>
            )
        }
    }

    return (
        <>
            <p>{fileSystem.name}, {fileSystem.type}</p>
            {fileSystem.children.map(
                (x) =>
                    display(x)

            )}
        </>
    )
}

export default FileExplorer