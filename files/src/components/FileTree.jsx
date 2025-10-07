import React from 'react'
import FileItem from './FileItem'


export default function FileTree({ root, rozwinieteFoldery, ustawRozwinieteFoldery, ustawWybranyElement }) {
return (
<div className="file-tree">
<FileItem
key={root.id}
item={root}
poziom={0}
rozwinieteFoldery={rozwinieteFoldery}
ustawRozwinieteFoldery={ustawRozwinieteFoldery}
ustawWybranyElement={ustawWybranyElement}
/>
</div>
)
}