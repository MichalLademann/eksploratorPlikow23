import React, { useState } from 'react'
import FileTree from './FileTree'
import FileDetails from './FileDetails'
import { fileSystem } from '../data/fileSystem'


export default function FileExplorer() {
const [rozwinieteFoldery, ustawRozwinieteFoldery] = useState([])
const [wybranyElement, ustawWybranyElement] = useState(null)


return (
<div className="file-explorer">
<div className="panel tree-panel">
<FileTree
root={fileSystem}
rozwinieteFoldery={rozwinieteFoldery}
ustawRozwinieteFoldery={ustawRozwinieteFoldery}
ustawWybranyElement={ustawWybranyElement}
/>
</div>


<div className="panel details-panel">
<FileDetails item={wybranyElement} />
</div>
</div>
)
}