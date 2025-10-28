import Details from "./Details"

function Directory({ name, type, children }) {

    return (
        <>
            {/* Wyświetl szczegóły pliku/folderu takie jak nazwa i typ */}
            <Details name={name} type={type} />
            {
                // jeśli napotkany plik będzie typu "folder", to znaczy,
                // że ma dzieci - wyświetli je za pomocą funkcji .map()
                type === "folder" &&
                // jeśli typ będzie inny, ten kod się nie wykona.
                children.map(
                    (child) => <Directory key={child.id} name={child.name} type={child.type} children={child.children} />
                )
            }
        </>
    )
}

export default Directory