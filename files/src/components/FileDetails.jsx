import React from 'react'


export default function FileDetails({ item }) {
if (!item) {
return <div className="file-details">Wybierz plik lub folder, aby zobaczyć szczegóły.</div>
}


return (
<div className="file-details">
<h3>Szczegóły</h3>
<p><strong>Nazwa:</strong> {item.name}</p>
<p><strong>Typ:</strong> {item.type}</p>
{item.type === 'file' && <p><strong>Rozmiar:</strong> {item.size}</p>}
{item.type === 'folder' && <p><strong>Liczba elementów:</strong> {item.children ? item.children.length : 0}</p>}
</div>
)
}