function Directory(name, type, children) {
    return (
        <>
                    <p>{x.name}, {x.type}</p>
                    {x.children.map(
                        (child) => <Directory name={child.name} type={child.type} children={child.children}></Directory>

                    )}
                </>
    )
}

export default Directory