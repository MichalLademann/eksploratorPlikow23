import React from 'react'


export default function FileItem({ item, poziom = 0, rozwinieteFoldery, ustawRozwinieteFoldery, ustawWybranyElement }) {
const czyFolder = item.type === 'folder'
const czyRozwiniety = rozwinieteFoldery.includes(item.id)


function klikNaElement(e) {
// zapobiegamy "przepływowi" kliknięcia do rodzica
e.stopPropagation()


if (czyFolder) {
// toggle
ustawRozwinieteFoldery(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])
// ustawiamy jako wybrany (pokazanie szczegółów folderu)
ustawWybranyElement(item)
} else {
ustawWybranyElement(item)
}
}


return (
<div>
<div
className="file-item"
style={{ paddingLeft: `${poziom * 16}px` }}
onClick={klikNaElement}
>
<span className="arrow">{czyFolder ? (czyRozwiniety ? '▾' : '▸') : ''}</span>
<span className="icon">{czyFolder ? '📁' : '📄'}</span>
<span className="name">{item.name}</span>
</div>


{czyFolder && czyRozwiniety && item.children && (
<div className="children">
{item.children.map(child => (
<FileItem
key={child.id}
item={child}
poziom={poziom + 1}
rozwinieteFoldery={rozwinieteFoldery}
ustawRozwinieteFoldery={ustawRozwinieteFoldery}
ustawWybranyElement={ustawWybranyElement}
/>
))}
</div>
)}
</div>
)
}