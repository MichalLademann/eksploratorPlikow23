
function Directory({ name, type, children }) {
    return (
        <>
            <p>{name}, {type}</p>
            {type === 'folder' && children && children.map(
                (child) => (
                    <Directory
                        key={child.id ?? child.name}
                        name={child.name}
                        type={child.type}
                        children={child.children}
                    />
                )
            )}
        </>
    )
}
export default Directory