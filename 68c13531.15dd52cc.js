/*! For license information please see 68c13531.15dd52cc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),c=(n(191),n(190)),o={id:"api-reference-content-state",title:"ContentState"},l={id:"api-reference-content-state",title:"ContentState",description:"ContentState is an Immutable",source:"@site/../docs/APIReference-ContentState.md",permalink:"/docs/api-reference-content-state",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-ContentState.md",lastUpdatedBy:"Dominic Gannaway",lastUpdatedAt:1600963846,sidebar:"docs",previous:{title:"EditorState",permalink:"/docs/api-reference-editor-state"},next:{title:"ContentBlock",permalink:"/docs/api-reference-content-block"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Static Methods",id:"static-methods",children:[{value:"<code>createFromText()</code>",id:"createfromtext",children:[]},{value:"<code>createFromBlockArray()</code>",id:"createfromblockarray",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>getEntityMap()</code>",id:"getentitymap",children:[]},{value:"<code>getBlockMap()</code>",id:"getblockmap",children:[]},{value:"<code>getSelectionBefore()</code>",id:"getselectionbefore",children:[]},{value:"<code>getSelectionAfter()</code>",id:"getselectionafter",children:[]},{value:"<code>getBlockForKey()</code>",id:"getblockforkey",children:[]},{value:"<code>getKeyBefore()</code>",id:"getkeybefore",children:[]},{value:"<code>getKeyAfter()</code>",id:"getkeyafter",children:[]},{value:"<code>getBlockBefore()</code>",id:"getblockbefore",children:[]},{value:"<code>getBlockAfter()</code>",id:"getblockafter",children:[]},{value:"<code>getBlocksAsArray()</code>",id:"getblocksasarray",children:[]},{value:"<code>getFirstBlock()</code>",id:"getfirstblock",children:[]},{value:"<code>getLastBlock()</code>",id:"getlastblock",children:[]},{value:"<code>getPlainText()</code>",id:"getplaintext",children:[]},{value:"<code>getLastCreatedEntityKey()</code>",id:"getlastcreatedentitykey",children:[]},{value:"<code>hasText()</code>",id:"hastext",children:[]},{value:"<code>createEntity()</code>",id:"createentity",children:[]},{value:"<code>getEntity()</code>",id:"getentity",children:[]},{value:"<code>mergeEntityData()</code>",id:"mergeentitydata",children:[]},{value:"<code>replaceEntityData()</code>",id:"replaceentitydata",children:[]},{value:"<code>addEntity()</code>",id:"addentity",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>blockMap</code>",id:"blockmap",children:[]},{value:"<code>selectionBefore</code>",id:"selectionbefore",children:[]},{value:"<code>selectionAfter</code>",id:"selectionafter",children:[]}]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," is an Immutable\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Record"}),"Record"),"\nthat represents the full state of:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The entire ",Object(c.b)("strong",{parentName:"li"},"contents")," of an editor: text, block and inline styles, and entity ranges."),Object(c.b)("li",{parentName:"ul"},"Two ",Object(c.b)("strong",{parentName:"li"},"selection states")," of an editor: before and after the rendering of these contents.")),Object(c.b)("p",null,"The most common use for the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," object is via ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState.getCurrentContent()"),",\nwhich provides the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," currently being rendered in the editor."),Object(c.b)("p",null,"An ",Object(c.b)("inlineCode",{parentName:"p"},"EditorState")," object maintains undo and redo stacks comprised of ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState"),"\nobjects."),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Static Methods")),Object(c.b)("ul",{class:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"#createfromtext"},Object(c.b)("pre",null,"static createFromText(text: string): ContentState"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#createfromblockarray"},Object(c.b)("pre",null,"static createFromBlockArray(blocks: Array<ContentBlock>): ContentState")))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Methods")),Object(c.b)("ul",{class:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"#getentitymap"},Object(c.b)("pre",null,"getEntityMap()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getblockmap"},Object(c.b)("pre",null,"getBlockMap()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getselectionbefore"},Object(c.b)("pre",null,"getSelectionBefore()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getselectionafter"},Object(c.b)("pre",null,"getSelectionAfter()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getblockforkey"},Object(c.b)("pre",null,"getBlockForKey(key)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getkeybefore"},Object(c.b)("pre",null,"getKeyBefore(key)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getkeyafter"},Object(c.b)("pre",null,"getKeyAfter(key)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getblockbefore"},Object(c.b)("pre",null,"getBlockBefore(key)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getblockafter"},Object(c.b)("pre",null,"getBlockAfter(key)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getblocksasarray"},Object(c.b)("pre",null,"getBlocksAsArray()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getfirstblock"},Object(c.b)("pre",null,"getFirstBlock()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getlastblock"},Object(c.b)("pre",null,"getLastBlock()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getplaintext"},Object(c.b)("pre",null,"getPlainText(delimiter)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getlastcreatedentitykey"},Object(c.b)("pre",null,"getLastCreatedEntityKey()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#hastext"},Object(c.b)("pre",null,"hasText()"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#createentity"},Object(c.b)("pre",null,"createEntity(...)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#getentity"},Object(c.b)("pre",null,"getEntity(...)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#mergeentitydata"},Object(c.b)("pre",null,"mergeEntityData(...)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#replaceentitydata"},Object(c.b)("pre",null,"replaceEntityData(...)"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#addentity"},Object(c.b)("pre",null,"addEntity(...)")))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Properties")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Map"}),"Immutable Map API")," to\nset properties."),Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Example")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const editorState = EditorState.createEmpty();\nconst contentState = editorState.getCurrentContent();\nconst contentStateWithSelectionBefore = contentState.set(\n  'selectionBefore',\n  SelectionState.createEmpty(contentState.getBlockForKey('1pu4d')),\n);\n"))),Object(c.b)("ul",{class:"apiIndex"},Object(c.b)("li",null,Object(c.b)("a",{href:"#blockmap"},Object(c.b)("pre",null,"blockMap"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#selectionbefore"},Object(c.b)("pre",null,"selectionBefore"))),Object(c.b)("li",null,Object(c.b)("a",{href:"#selectionafter"},Object(c.b)("pre",null,"selectionAfter")))),Object(c.b)("h2",{id:"static-methods"},"Static Methods"),Object(c.b)("h3",{id:"createfromtext"},Object(c.b)("inlineCode",{parentName:"h3"},"createFromText()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static createFromText(\n  text: string,\n  delimiter?: string\n): ContentState\n")),Object(c.b)("p",null,"Generates a ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," from a string, with a delimiter to split the string\ninto ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects. If no delimiter is provided, '",Object(c.b)("inlineCode",{parentName:"p"},"\\n"),"' is used."),Object(c.b)("h3",{id:"createfromblockarray"},Object(c.b)("inlineCode",{parentName:"h3"},"createFromBlockArray()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static createFromBlockArray(\n  blocks: Array<ContentBlock>,\n  entityMap: ?OrderedMap\n): ContentState\n")),Object(c.b)("p",null,"Generates a ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," from an array of ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects. The default\n",Object(c.b)("inlineCode",{parentName:"p"},"selectionBefore")," and ",Object(c.b)("inlineCode",{parentName:"p"},"selectionAfter")," states have the cursor at the start of\nthe content."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getentitymap"},Object(c.b)("inlineCode",{parentName:"h3"},"getEntityMap()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getEntityMap(): EntityMap\n")),Object(c.b)("p",null,"Returns an object store containing all ",Object(c.b)("inlineCode",{parentName:"p"},"DraftEntity")," records that have been\ncreated. In upcoming v0.11.0 the map returned will be an Immutable ordered map\nof ",Object(c.b)("inlineCode",{parentName:"p"},"DraftEntity")," records."),Object(c.b)("p",null,"In most cases, you should be able to use the convenience methods below to target\nspecific ",Object(c.b)("inlineCode",{parentName:"p"},"DraftEntity")," records or obtain information about the state of the\ncontent."),Object(c.b)("h3",{id:"getblockmap"},Object(c.b)("inlineCode",{parentName:"h3"},"getBlockMap()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getBlockMap(): BlockMap\n")),Object(c.b)("p",null,"Returns the full ordered map of ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects representing the state\nof an entire document."),Object(c.b)("p",null,"In most cases, you should be able to use the convenience methods below to target\nspecific ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects or obtain information about the state of the content."),Object(c.b)("h3",{id:"getselectionbefore"},Object(c.b)("inlineCode",{parentName:"h3"},"getSelectionBefore()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getSelectionBefore(): SelectionState\n")),Object(c.b)("p",null,"Returns the ",Object(c.b)("inlineCode",{parentName:"p"},"SelectionState")," displayed in the editor before rendering ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap"),"."),Object(c.b)("p",null,"When performing an ",Object(c.b)("inlineCode",{parentName:"p"},"undo")," action in the editor, the ",Object(c.b)("inlineCode",{parentName:"p"},"selectionBefore")," of the current\n",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," is used to place the selection range in the appropriate position."),Object(c.b)("h3",{id:"getselectionafter"},Object(c.b)("inlineCode",{parentName:"h3"},"getSelectionAfter()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getSelectionAfter(): SelectionState\n")),Object(c.b)("p",null,"Returns the ",Object(c.b)("inlineCode",{parentName:"p"},"SelectionState")," displayed in the editor after rendering ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap"),"."),Object(c.b)("p",null,"When performing any action in the editor that leads to this ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap")," being rendered,\nthe selection range will be placed in the ",Object(c.b)("inlineCode",{parentName:"p"},"selectionAfter")," position."),Object(c.b)("h3",{id:"getblockforkey"},Object(c.b)("inlineCode",{parentName:"h3"},"getBlockForKey()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getBlockForKey(key: string): ContentBlock\n")),Object(c.b)("p",null,"Returns the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," corresponding to the given block key."),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"var {editorState} = this.state;\nvar startKey = editorState.getSelection().getStartKey();\nvar selectedBlockType = editorState\n  .getCurrentContent()\n  .getBlockForKey(startKey)\n  .getType();\n")),Object(c.b)("h3",{id:"getkeybefore"},Object(c.b)("inlineCode",{parentName:"h3"},"getKeyBefore()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getKeyBefore(key: string): ?string\n")),Object(c.b)("p",null,"Returns the key before the specified key in ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap"),", or null if this is the first key."),Object(c.b)("h3",{id:"getkeyafter"},Object(c.b)("inlineCode",{parentName:"h3"},"getKeyAfter()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getKeyAfter(key: string): ?string\n")),Object(c.b)("p",null,"Returns the key after the specified key in ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap"),", or null if this is the last key."),Object(c.b)("h3",{id:"getblockbefore"},Object(c.b)("inlineCode",{parentName:"h3"},"getBlockBefore()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getBlockBefore(key: string): ?ContentBlock\n")),Object(c.b)("p",null,"Returns the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," before the specified key in ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap"),", or null if this is\nthe first key."),Object(c.b)("h3",{id:"getblockafter"},Object(c.b)("inlineCode",{parentName:"h3"},"getBlockAfter()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getBlockAfter(key: string): ?ContentBlock\n")),Object(c.b)("p",null,"Returns the ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock")," after the specified key in ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap"),", or null if this is the last key."),Object(c.b)("h3",{id:"getblocksasarray"},Object(c.b)("inlineCode",{parentName:"h3"},"getBlocksAsArray()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getBlocksAsArray(): Array<ContentBlock>\n")),Object(c.b)("p",null,"Returns the values of ",Object(c.b)("inlineCode",{parentName:"p"},"blockMap")," as an array."),Object(c.b)("p",null,"You generally won't need to use this method, since ",Object(c.b)("inlineCode",{parentName:"p"},"getBlockMap")," provides an ",Object(c.b)("inlineCode",{parentName:"p"},"OrderedMap")," that you should use for iteration."),Object(c.b)("h3",{id:"getfirstblock"},Object(c.b)("inlineCode",{parentName:"h3"},"getFirstBlock()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getFirstBlock(): ContentBlock\n")),Object(c.b)("p",null,"Returns the first ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("h3",{id:"getlastblock"},Object(c.b)("inlineCode",{parentName:"h3"},"getLastBlock()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getLastBlock(): ContentBlock\n")),Object(c.b)("p",null,"Returns the last ",Object(c.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(c.b)("h3",{id:"getplaintext"},Object(c.b)("inlineCode",{parentName:"h3"},"getPlainText()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getPlainText(delimiter?: string): string\n")),Object(c.b)("p",null,"Returns the full plaintext value of the contents, joined with a delimiter. If no\ndelimiter is specified, the line feed character (",Object(c.b)("inlineCode",{parentName:"p"},"\\u000A"),") is used."),Object(c.b)("h3",{id:"getlastcreatedentitykey"},Object(c.b)("inlineCode",{parentName:"h3"},"getLastCreatedEntityKey()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getLastCreatedEntityKey(): string\n")),Object(c.b)("p",null,"Returns the string key that can be used to reference the most recently created\n",Object(c.b)("inlineCode",{parentName:"p"},"DraftEntity")," record. This is because entities are referenced by their string\nkey in ContentState. The string value should be used within CharacterMetadata\nobjects to track the entity for annotated characters."),Object(c.b)("h3",{id:"hastext"},Object(c.b)("inlineCode",{parentName:"h3"},"hasText()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"hasText(): boolean\n")),Object(c.b)("p",null,"Returns whether the contents contain any text at all."),Object(c.b)("h3",{id:"createentity"},Object(c.b)("inlineCode",{parentName:"h3"},"createEntity()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"createEntity(\n  type: DraftEntityType,\n  mutability: DraftEntityMutability,\n  data?: Object\n): ContentState\n")),Object(c.b)("p",null,"Returns ",Object(c.b)("inlineCode",{parentName:"p"},"ContentState")," record updated to include the newly created ",Object(c.b)("inlineCode",{parentName:"p"},"DraftEntity")," record in it's ",Object(c.b)("inlineCode",{parentName:"p"},"EntityMap"),". Call ",Object(c.b)("inlineCode",{parentName:"p"},"getLastCreatedEntityKey")," to get the key of the newly created ",Object(c.b)("inlineCode",{parentName:"p"},"DraftEntity")," record."),Object(c.b)("h3",{id:"getentity"},Object(c.b)("inlineCode",{parentName:"h3"},"getEntity()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getEntity(key: string): DraftEntityInstance\n")),Object(c.b)("p",null,"Returns the DraftEntityInstance for the specified key. Throws if no instance exists for that key."),Object(c.b)("h3",{id:"mergeentitydata"},Object(c.b)("inlineCode",{parentName:"h3"},"mergeEntityData()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"mergeEntityData(\n  key: string,\n  toMerge: {[key: string]: any}\n): ContentState\n")),Object(c.b)("p",null,"Since DraftEntityInstance objects are immutable, you cannot update an entity's\nmetadata through typical mutative means."),Object(c.b)("p",null,"The mergeData method allows you to apply updates to the specified entity."),Object(c.b)("h3",{id:"replaceentitydata"},Object(c.b)("inlineCode",{parentName:"h3"},"replaceEntityData()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"replaceEntityData(\n  key: string,\n  newData: {[key: string]: any}\n): ContentState\n")),Object(c.b)("p",null,"The replaceData method is similar to the mergeData method, except it will totally discard the existing data value for the instance and replace it with the specified newData."),Object(c.b)("h3",{id:"addentity"},Object(c.b)("inlineCode",{parentName:"h3"},"addEntity()")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"addEntity(instance: DraftEntityInstance): ContentState\n")),Object(c.b)("p",null,"In most cases, you will use contentState.createEntity(). This is a convenience\nmethod that you probably will not need in typical Draft usage."),Object(c.b)("p",null,"The add function is useful in cases where the instances have already been\ncreated, and now need to be added to the Entity store. This may occur in cases\nwhere a vanilla JavaScript representation of a ContentState is being revived for\nediting."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Map"}),"Immutable Map API")," to\nset properties.")),Object(c.b)("h3",{id:"blockmap"},Object(c.b)("inlineCode",{parentName:"h3"},"blockMap")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getBlockMap()"),"."),Object(c.b)("h3",{id:"selectionbefore"},Object(c.b)("inlineCode",{parentName:"h3"},"selectionBefore")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getSelectionBefore()"),"."),Object(c.b)("h3",{id:"selectionafter"},Object(c.b)("inlineCode",{parentName:"h3"},"selectionAfter")),Object(c.b)("p",null,"See ",Object(c.b)("inlineCode",{parentName:"p"},"getSelectionAfter()"),"."))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return n?a.a.createElement(f,l(l({ref:t},b),{},{components:n})):a.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,u=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,j=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function k(){}function C(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var N=C.prototype=new k;N.constructor=C,r(N,g.prototype),N.isPureReactComponent=!0;var v={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!E.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var b=Array(i),p=0;p<i;p++)b[p]=arguments[p+2];a.children=b}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:c,type:e,key:o,ref:l,props:a,_owner:v.current}}function B(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var x=/\/+/g,A=[];function M(e,t,n,r){if(A.length){var a=A.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case o:i=!0}}if(i)return r(a,t,""===n?"."+T(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var b=0;b<t.length;b++){var p=n+T(l=t[b],b);i+=e(l,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=O&&t[O]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),b=0;!(l=t.next()).done;)i+=e(l=l.value,p=n+T(l,b++),r,a);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?_(e,r,n,(function(e){return e})):null!=e&&(B(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function _(e,t,n,r,a){var c="";null!=n&&(c=(""+n).replace(x,"$&/")+"/"),R(e,I,t=M(t,c,r,a)),P(t)}var F={current:null};function $(){var e=F.current;if(null===e)throw Error(h(321));return e}var K={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return _(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,D,t=M(null,null,t,n)),P(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return _(e,t,null,(function(e){return e})),t},only:function(e){if(!B(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=l,t.Profiler=b,t.PureComponent=C,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var a=r({},e.props),o=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=v.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(p in t)S.call(t,p)&&!E.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==b?b[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){b=Array(p);for(var u=0;u<p;u++)b[u]=arguments[u+2];a.children=b}return{$$typeof:c,type:e.type,key:o,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=B,t.lazy=function(e){return{$$typeof:j,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,i=o(e),b=1;b<arguments.length;b++){for(var p in n=Object(arguments[b]))a.call(n,p)&&(i[p]=n[p]);if(r){l=r(n);for(var u=0;u<l.length;u++)c.call(n,l[u])&&(i[l[u]]=n[l[u]])}}return i}}}]);