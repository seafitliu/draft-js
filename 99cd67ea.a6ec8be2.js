/*! For license information please see 99cd67ea.a6ec8be2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(9),a=(n(191),n(190)),c={id:"api-reference-editor-state",title:"EditorState"},i={id:"api-reference-editor-state",title:"EditorState",description:"EditorState is the top-level state object for the editor.",source:"@site/../docs/APIReference-EditorState.md",permalink:"/docs/api-reference-editor-state",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-EditorState.md",lastUpdatedBy:"Dominic Gannaway",lastUpdatedAt:1600963846,sidebar:"docs",previous:{title:"EditorChangeType",permalink:"/docs/api-reference-editor-change-type"},next:{title:"ContentState",permalink:"/docs/api-reference-content-state"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Common Instance Methods",id:"common-instance-methods",children:[{value:"<code>getCurrentContent</code>",id:"getcurrentcontent",children:[]},{value:"<code>getSelection</code>",id:"getselection",children:[]},{value:"<code>getCurrentInlineStyle</code>",id:"getcurrentinlinestyle",children:[]},{value:"<code>getBlockTree</code>",id:"getblocktree",children:[]}]},{value:"Static Methods",id:"static-methods",children:[{value:"<code>createEmpty</code>",id:"createempty",children:[]},{value:"<code>createWithContent</code>",id:"createwithcontent",children:[]},{value:"<code>create</code>",id:"create",children:[]},{value:"<code>push</code>",id:"push",children:[]},{value:"<code>undo</code>",id:"undo",children:[]},{value:"<code>redo</code>",id:"redo",children:[]},{value:"<code>acceptSelection</code>",id:"acceptselection",children:[]},{value:"<code>forceSelection</code>",id:"forceselection",children:[]},{value:"<code>moveSelectionToEnd</code>",id:"moveselectiontoend",children:[]},{value:"<code>moveFocusToEnd</code>",id:"movefocustoend",children:[]},{value:"<code>setInlineStyleOverride</code>",id:"setinlinestyleoverride",children:[]},{value:"<code>set</code>",id:"set",children:[]}]},{value:"Properties and Getters",id:"properties-and-getters",children:[{value:"<code>allowUndo</code>",id:"allowundo",children:[]},{value:"<code>currentContent</code>",id:"currentcontent",children:[]},{value:"<code>decorator</code>",id:"decorator",children:[]},{value:"<code>directionMap</code>",id:"directionmap",children:[]},{value:"<code>forceSelection</code>",id:"forceselection-1",children:[]},{value:"<code>inCompositionMode</code>",id:"incompositionmode",children:[]},{value:"<code>inlineStyleOverride</code>",id:"inlinestyleoverride",children:[]},{value:"<code>lastChangeType</code>",id:"lastchangetype",children:[]},{value:"<code>nativelyRenderedContent</code>",id:"nativelyrenderedcontent",children:[]},{value:"<code>redoStack</code>",id:"redostack",children:[]},{value:"<code>selection</code>",id:"selection",children:[]},{value:"<code>treeMap</code>",id:"treemap",children:[]},{value:"<code>undoStack</code>",id:"undostack",children:[]}]}],b={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," is the top-level state object for the editor."),Object(a.b)("p",null,"It is an Immutable\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.archive.org/web/20150623131347/http://facebook.github.io:80/immutable-js/docs/#/Record"}),"Record"),"\nthat represents the entire state of a Draft editor, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The current text content state"),Object(a.b)("li",{parentName:"ul"},"The current selection state"),Object(a.b)("li",{parentName:"ul"},"The fully decorated representation of the contents"),Object(a.b)("li",{parentName:"ul"},"Undo/redo stacks"),Object(a.b)("li",{parentName:"ul"},"The most recent type of change made to the contents")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note"),Object(a.b)("p",{parentName:"blockquote"},"You should not use the Immutable API when using EditorState objects.\nInstead, use the instance getters and static methods below.")),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Common instance methods")),Object(a.b)("p",null,"The list below includes the most commonly used instance methods for ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," objects."),Object(a.b)("ul",{class:"apiIndex"},Object(a.b)("li",null,Object(a.b)("a",{href:"#getcurrentcontent"},Object(a.b)("pre",null,"getCurrentContent(): ContentState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#getselection"},Object(a.b)("pre",null,"getSelection(): SelectionState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#getcurrentinlinestyle"},Object(a.b)("pre",null,"getCurrentInlineStyle(): DraftInlineStyle"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#getblocktree"},Object(a.b)("pre",null,"getBlockTree(): OrderedMap")))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Static Methods")),Object(a.b)("ul",{class:"apiIndex"},Object(a.b)("li",null,Object(a.b)("a",{href:"#createempty"},Object(a.b)("pre",null,"static createEmpty(?decorator): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#createwithcontent"},Object(a.b)("pre",null,"static createWithContent(contentState, ?decorator): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#create"},Object(a.b)("pre",null,"static create(config): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#push"},Object(a.b)("pre",null,"static push(editorState, contentState, changeType): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#undo"},Object(a.b)("pre",null,"static undo(editorState): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#redo"},Object(a.b)("pre",null,"static redo(editorState): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#acceptselection"},Object(a.b)("pre",null,"static acceptSelection(editorState, selectionState): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#forceselection"},Object(a.b)("pre",null,"static forceSelection(editorState, selectionState): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#moveselectiontoend"},Object(a.b)("pre",null,"static moveSelectionToEnd(editorState): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#movefocustoend"},Object(a.b)("pre",null,"static moveFocusToEnd(editorState): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#setinlinestyleoverride"},Object(a.b)("pre",null,"static setInlineStyleOverride(editorState, inlineStyleOverride): EditorState"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#set"},Object(a.b)("pre",null,"static set(editorState, EditorStateRecordType): EditorState")))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Properties")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note"),Object(a.b)("p",{parentName:"blockquote"},"Use the static ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," methods to set properties, rather than using\nthe Immutable API directly. This means using ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState.set")," to pass\nnew options to an EditorState instance."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Example")),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const editorState = EditorState.createEmpty();\nconst editorStateWithoutUndo = EditorState.set(editorState, {\n  allowUndo: false,\n});\n"))),Object(a.b)("ul",{class:"apiIndex"},Object(a.b)("li",null,Object(a.b)("a",{href:"#allowundo"},Object(a.b)("pre",null,"allowUndo"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#currentcontent"},Object(a.b)("pre",null,"currentContent"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#decorator"},Object(a.b)("pre",null,"decorator"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#directionmap"},Object(a.b)("pre",null,"directionMap"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#forceselection"},Object(a.b)("pre",null,"forceSelection"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#incompositionmode"},Object(a.b)("pre",null,"inCompositionMode"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#inlinestyleoverride"},Object(a.b)("pre",null,"inlineStyleOverride"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#lastchangetype"},Object(a.b)("pre",null,"lastChangeType"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#nativelyrenderedcontent"},Object(a.b)("pre",null,"nativelyRenderedContent"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#redostack"},Object(a.b)("pre",null,"redoStack"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#selection"},Object(a.b)("pre",null,"selection"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#treemap"},Object(a.b)("pre",null,"treeMap"))),Object(a.b)("li",null,Object(a.b)("a",{href:"#undostack"},Object(a.b)("pre",null,"undoStack")))),Object(a.b)("h2",{id:"common-instance-methods"},"Common Instance Methods"),Object(a.b)("h3",{id:"getcurrentcontent"},Object(a.b)("inlineCode",{parentName:"h3"},"getCurrentContent")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getCurrentContent(): ContentState\n")),Object(a.b)("p",null,"Returns the current contents of the editor."),Object(a.b)("h3",{id:"getselection"},Object(a.b)("inlineCode",{parentName:"h3"},"getSelection")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getSelection(): SelectionState\n")),Object(a.b)("p",null,"Returns the current cursor/selection state of the editor."),Object(a.b)("h3",{id:"getcurrentinlinestyle"},Object(a.b)("inlineCode",{parentName:"h3"},"getCurrentInlineStyle")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getCurrentInlineStyle(): DraftInlineStyle\n")),Object(a.b)("p",null,"Returns an ",Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet<string>"),' that represents the "current" inline style\nfor the editor.'),Object(a.b)("p",null,"This is the inline style value that would be used if a character were inserted\nfor the current ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," and ",Object(a.b)("inlineCode",{parentName:"p"},"SelectionState"),", and takes into account\nany inline style overrides that should be applied."),Object(a.b)("h3",{id:"getblocktree"},Object(a.b)("inlineCode",{parentName:"h3"},"getBlockTree")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getBlockTree(blockKey: string): List;\n")),Object(a.b)("p",null,"Returns an Immutable ",Object(a.b)("inlineCode",{parentName:"p"},"List")," of decorated and styled ranges. This is used for\nrendering purposes, and is generated based on the ",Object(a.b)("inlineCode",{parentName:"p"},"currentContent")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"decorator"),"."),Object(a.b)("p",null,"At render time, this object is used to break the contents into the appropriate\nblock, decorator, and styled range components."),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("h3",{id:"createempty"},Object(a.b)("inlineCode",{parentName:"h3"},"createEmpty")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static createEmpty(decorator?: DraftDecoratorType): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with an empty ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," and default\nconfiguration."),Object(a.b)("h3",{id:"createwithcontent"},Object(a.b)("inlineCode",{parentName:"h3"},"createWithContent")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static createWithContent(\n  contentState: ContentState,\n  decorator?: DraftDecoratorType\n): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object based on the ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," and decorator\nprovided."),Object(a.b)("h3",{id:"create"},Object(a.b)("inlineCode",{parentName:"h3"},"create")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static create(config: EditorStateCreationConfig): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object based on a configuration object. Use this\nif you need custom configuration not available via the methods above."),Object(a.b)("h3",{id:"push"},Object(a.b)("inlineCode",{parentName:"h3"},"push")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static push(\n  editorState: EditorState,\n  contentState: ContentState,\n  changeType: EditorChangeType\n): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the specified ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," applied\nas the new ",Object(a.b)("inlineCode",{parentName:"p"},"currentContent"),". Based on the ",Object(a.b)("inlineCode",{parentName:"p"},"changeType"),", this ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),"\nmay be regarded as a boundary state for undo/redo behavior."),Object(a.b)("p",null,"All content changes must be applied to the EditorState with this method."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"To be renamed.")),Object(a.b)("h3",{id:"undo"},Object(a.b)("inlineCode",{parentName:"h3"},"undo")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static undo(editorState: EditorState): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the top of the undo stack applied\nas the new ",Object(a.b)("inlineCode",{parentName:"p"},"currentContent"),"."),Object(a.b)("p",null,"The existing ",Object(a.b)("inlineCode",{parentName:"p"},"currentContent")," is pushed onto the ",Object(a.b)("inlineCode",{parentName:"p"},"redo")," stack."),Object(a.b)("h3",{id:"redo"},Object(a.b)("inlineCode",{parentName:"h3"},"redo")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static redo(editorState: EditorState): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the top of the redo stack applied as the new ",Object(a.b)("inlineCode",{parentName:"p"},"currentContent"),"."),Object(a.b)("p",null,"The existing ",Object(a.b)("inlineCode",{parentName:"p"},"currentContent")," is pushed onto the ",Object(a.b)("inlineCode",{parentName:"p"},"undo")," stack."),Object(a.b)("h3",{id:"acceptselection"},Object(a.b)("inlineCode",{parentName:"h3"},"acceptSelection")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static acceptSelection(\n  editorState: EditorState,\n  selectionState: SelectionState\n): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the specified ",Object(a.b)("inlineCode",{parentName:"p"},"SelectionState")," applied,\nbut without requiring the selection to be rendered."),Object(a.b)("p",null,"For example, this is useful when the DOM selection has changed outside of our\ncontrol, and no re-renders are necessary."),Object(a.b)("h3",{id:"forceselection"},Object(a.b)("inlineCode",{parentName:"h3"},"forceSelection")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static forceSelection(\n  editorState: EditorState,\n  selectionState: SelectionState\n): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the specified ",Object(a.b)("inlineCode",{parentName:"p"},"SelectionState")," applied,\nforcing the selection to be rendered."),Object(a.b)("p",null,"This is useful when the selection should be manually rendered in the correct\nlocation to maintain control of the rendered output."),Object(a.b)("h3",{id:"moveselectiontoend"},Object(a.b)("inlineCode",{parentName:"h3"},"moveSelectionToEnd")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static moveSelectionToEnd(editorState: EditorState): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the selection at the end."),Object(a.b)("p",null,"Moves selection to the end of the editor without forcing focus."),Object(a.b)("h3",{id:"movefocustoend"},Object(a.b)("inlineCode",{parentName:"h3"},"moveFocusToEnd")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static moveFocusToEnd(editorState: EditorState): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with selection at the end and forces focus."),Object(a.b)("p",null,"This is useful in scenarios where we want to programmatically focus the input\nand it makes sense to allow the user to continue working seamlessly."),Object(a.b)("h3",{id:"setinlinestyleoverride"},Object(a.b)("inlineCode",{parentName:"h3"},"setInlineStyleOverride")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static setInlineStyleOverride(editorState: EditorState, inlineStyleOverride: DraftInlineStyle): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with the specified ",Object(a.b)("inlineCode",{parentName:"p"},"DraftInlineStyle")," applied\nas the set of inline styles to be applied to the next inserted characters."),Object(a.b)("h3",{id:"set"},Object(a.b)("inlineCode",{parentName:"h3"},"set")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static set(editorState: EditorState, options: EditorStateRecordType): EditorState\n")),Object(a.b)("p",null,"Returns a new ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState")," object with new options passed in. The method is\ninherited from the Immutable ",Object(a.b)("inlineCode",{parentName:"p"},"record")," API."),Object(a.b)("h2",{id:"properties-and-getters"},"Properties and Getters"),Object(a.b)("p",null,"In most cases, the instance and static methods above should be sufficient to\nmanage the state of your Draft editor."),Object(a.b)("p",null,"Below is the full list of properties tracked by an ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),", as well as\ntheir corresponding getter methods, to better provide detail on the scope of the\nstate tracked in this object."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note"),Object(a.b)("p",{parentName:"blockquote"},"You should not use the Immutable API when using EditorState objects.\nInstead, use the instance getters and static methods above.")),Object(a.b)("h3",{id:"allowundo"},Object(a.b)("inlineCode",{parentName:"h3"},"allowUndo")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"allowUndo: boolean;\ngetAllowUndo();\n")),Object(a.b)("p",null,"Whether to allow undo/redo behavior in this editor. Default is ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("p",null,"Since the undo/redo stack is the major source of memory retention, if you have\nan editor UI that does not require undo/redo behavior, you might consider\nsetting this to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("h3",{id:"currentcontent"},Object(a.b)("inlineCode",{parentName:"h3"},"currentContent")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"currentContent: ContentState;\ngetCurrentContent();\n")),Object(a.b)("p",null,"The currently rendered ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),". See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#getcurrentcontent"}),"getCurrentContent()"),"."),Object(a.b)("h3",{id:"decorator"},Object(a.b)("inlineCode",{parentName:"h3"},"decorator")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"decorator: ?DraftDecoratorType;\ngetDecorator()\n")),Object(a.b)("p",null,"The current decorator object, if any."),Object(a.b)("p",null,"Note that the ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," is independent of your decorator. If a decorator\nis provided, it will be used to decorate ranges of text for rendering."),Object(a.b)("h3",{id:"directionmap"},Object(a.b)("inlineCode",{parentName:"h3"},"directionMap")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"directionMap: BlockMap;\ngetDirectionMap();\n")),Object(a.b)("p",null,"A map of each block and its text direction, as determined by UnicodeBidiService."),Object(a.b)("p",null,"You should not manage this manually."),Object(a.b)("h3",{id:"forceselection-1"},Object(a.b)("inlineCode",{parentName:"h3"},"forceSelection")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"forceSelection: boolean;\nmustForceSelection();\n")),Object(a.b)("p",null,"Whether to force the current ",Object(a.b)("inlineCode",{parentName:"p"},"SelectionState")," to be rendered."),Object(a.b)("p",null,"You should not set this property manually -- see\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#forceselection"}),Object(a.b)("inlineCode",{parentName:"a"},"forceSelection()")),"."),Object(a.b)("h3",{id:"incompositionmode"},Object(a.b)("inlineCode",{parentName:"h3"},"inCompositionMode")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"inCompositionMode: boolean;\nisInCompositionMode();\n")),Object(a.b)("p",null,"Whether the user is in IME composition mode. This is useful for rendering the\nappropriate UI for IME users, even when no content changes have been committed\nto the editor. You should not set this property manually."),Object(a.b)("h3",{id:"inlinestyleoverride"},Object(a.b)("inlineCode",{parentName:"h3"},"inlineStyleOverride")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"inlineStyleOverride: DraftInlineStyle;\ngetInlineStyleOverride();\n")),Object(a.b)("p",null,"An inline style value to be applied to the next inserted characters. This is\nused when keyboard commands or style buttons are used to apply an inline style\nfor a collapsed selection range."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DraftInlineStyle")," is a type alias for an immutable ",Object(a.b)("inlineCode",{parentName:"p"},"OrderedSet")," of strings,\neach of which corresponds to an inline style."),Object(a.b)("h3",{id:"lastchangetype"},Object(a.b)("inlineCode",{parentName:"h3"},"lastChangeType")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"lastChangeType: EditorChangeType;\ngetLastChangeType();\n")),Object(a.b)("p",null,"The type of content change that took place in order to bring us to our current\n",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),". This is used when determining boundary states for undo/redo."),Object(a.b)("h3",{id:"nativelyrenderedcontent"},Object(a.b)("inlineCode",{parentName:"h3"},"nativelyRenderedContent")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"nativelyRenderedContent: ?ContentState;\ngetNativelyRenderedContent()\n")),Object(a.b)("p",null,"During edit behavior, the editor may allow certain actions to render natively.\nFor instance, during normal typing behavior in the contentEditable-based component,\nwe can typically allow key events to fall through to print characters in the DOM.\nIn doing so, we can avoid extra re-renders and preserve spellcheck highlighting."),Object(a.b)("p",null,"When allowing native rendering behavior, it is appropriate to use the\n",Object(a.b)("inlineCode",{parentName:"p"},"nativelyRenderedContent")," property to indicate that no re-render is necessary\nfor this ",Object(a.b)("inlineCode",{parentName:"p"},"EditorState"),"."),Object(a.b)("h3",{id:"redostack"},Object(a.b)("inlineCode",{parentName:"h3"},"redoStack")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"redoStack: Stack<ContentState>;\ngetRedoStack()\n")),Object(a.b)("p",null,"An immutable stack of ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," objects that can be resurrected for redo\noperations. When performing an undo operation, the current ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," is\npushed onto the ",Object(a.b)("inlineCode",{parentName:"p"},"redoStack"),"."),Object(a.b)("p",null,"You should not manage this property manually. If you would like to disable\nundo/redo behavior, use the ",Object(a.b)("inlineCode",{parentName:"p"},"allowUndo")," property."),Object(a.b)("p",null,"See also ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#undostack"}),"undoStack"),"."),Object(a.b)("h3",{id:"selection"},Object(a.b)("inlineCode",{parentName:"h3"},"selection")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"selection: SelectionState;\ngetSelection();\n")),Object(a.b)("p",null,"The currently rendered ",Object(a.b)("inlineCode",{parentName:"p"},"SelectionState"),". See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#acceptselection"}),"acceptSelection()"),"\nand ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#forceselection"}),"forceSelection()"),"."),Object(a.b)("p",null,"You should not manage this property manually."),Object(a.b)("h3",{id:"treemap"},Object(a.b)("inlineCode",{parentName:"h3"},"treeMap")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"treeMap: OrderedMap<string, List>;\n")),Object(a.b)("p",null,"The fully decorated and styled tree of ranges to be rendered in the editor\ncomponent. The ",Object(a.b)("inlineCode",{parentName:"p"},"treeMap")," object is generated based on a ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," and an\noptional decorator (",Object(a.b)("inlineCode",{parentName:"p"},"DraftDecoratorType"),")."),Object(a.b)("p",null,"At render time, components should iterate through the ",Object(a.b)("inlineCode",{parentName:"p"},"treeMap")," object to\nrender decorated ranges and styled ranges, using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#getblocktree"}),"getBlockTree()"),"\nmethod."),Object(a.b)("p",null,"You should not manage this property manually."),Object(a.b)("h3",{id:"undostack"},Object(a.b)("inlineCode",{parentName:"h3"},"undoStack")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"undoStack: Stack<ContentState>;\ngetUndoStack()\n")),Object(a.b)("p",null,"An immutable stack of ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," objects that can be restored for undo\noperations."),Object(a.b)("p",null,"When performing operations that modify contents, we determine whether the\ncurrent ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),' should be regarded as a "boundary" state that the user\ncan reach by performing an undo operation. If so, the ',Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," is pushed\nonto the ",Object(a.b)("inlineCode",{parentName:"p"},"undoStack"),". If not, the outgoing ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," is discarded."),Object(a.b)("p",null,"You should not manage this property manually. If you would like to disable\nundo/redo behavior, use the ",Object(a.b)("inlineCode",{parentName:"p"},"allowUndo")," property."),Object(a.b)("p",null,"See also ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#redostack"}),Object(a.b)("inlineCode",{parentName:"a"},"redoStack")),"."))}d.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),d=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,j=u["".concat(c,".").concat(s)]||u[s]||p[s]||a;return n?o.a.createElement(j,i(i({ref:t},b),{},{components:n})):o.a.createElement(j,i({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,b=o?Symbol.for("react.profiler"):60114,d=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,s=o?Symbol.for("react.suspense"):60113,j=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}function S(){}function C(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=g.prototype;var N=C.prototype=new S;N.constructor=C,r(N,g.prototype),N.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)w.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var b=Array(l),d=0;d<l;d++)b[d]=arguments[d+2];o.children=b}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:v.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var I=/\/+/g,R=[];function x(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+D(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var b=0;b<t.length;b++){var d=n+D(i=t[b],b);l+=e(i,d,r,o)}else if(null===t||"object"!=typeof t?d=null:d="function"==typeof(d=O&&t[O]||t["@@iterator"])?d:null,"function"==typeof d)for(t=d.call(t),b=0;!(i=t.next()).done;)l+=e(i=i.value,d=n+D(i,b++),r,o);else if("object"===i)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function _(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(I,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(I,"$&/")+"/"),M(e,U,t=x(t,a,r,o)),P(t)}var $={current:null};function q(){var e=$.current;if(null===e)throw Error(m(321));return e}var B={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,_,t=x(null,null,t,n)),P(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(m(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=b,t.PureComponent=C,t.StrictMode=l,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=v.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(d in t)w.call(t,d)&&!E.hasOwnProperty(d)&&(o[d]=void 0===t[d]&&void 0!==b?b[d]:t[d])}var d=arguments.length-2;if(1===d)o.children=n;else if(1<d){b=Array(d);for(var u=0;u<d;u++)b[u]=arguments[u+2];o.children=b}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:j,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),b=1;b<arguments.length;b++){for(var d in n=Object(arguments[b]))o.call(n,d)&&(l[d]=n[d]);if(r){i=r(n);for(var u=0;u<i.length;u++)a.call(n,i[u])&&(l[i[u]]=n[i[u]])}}return l}}}]);