function editorSetup (instance) {
    instance.on("init", () => instance.getBody().scrollTo(0, instance.getBody().scrollHeight))
    instance.on("change", () => instance.getBody().scrollTo(0, instance.getBody().scrollHeight))
    instance.on("keyup", () => instance.getBody().scrollTo(0, instance.getBody().scrollHeight))
}
const editorPlugins = [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "pagebreak",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
]
const toolBarOptions = "print | pagebreak | " + " undo redo | blocks | " + "bold italic forecolor | "
const editorContentStyles = "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; padding: 1rem;}  table { width: 100%; border-collapse: collapse; border: 2px solid white; border-color: white; } tbody, th, tr, td { border: 2px solid white; border-color: white; border-style: solid; } td {padding: 0.4rem;} h1,h2,h3,h4,h5,h6 {margin: 5px 5px;}"

export const editorConfig = {
    selector: "#myTextarea",
    height: 650,
    width: 700,
    content_css: "/src/tineContent.css",
    setup: editorSetup,
    menubar: false,
    plugins: editorPlugins,
    toolbar: toolBarOptions,
    content_style: editorContentStyles,
}
