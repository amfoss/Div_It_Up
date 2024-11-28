The first line of an HTML file is its doctype.  It tells older browsers that the browser needs to render the page in a standard mode.

The second line should be the `<html>` tag's opening tag, followed right now by its closing tag `</html>`

The 'head' area of the HTML document includes crucial information about your web page, also known as metadata. We tell the web server to which this page will be sent to be rendered, these four things:

- The page's title
- page metadata including:
- the 'character set', telling about what character encoding is used in the page
browser information, including x-ua-compatible which indicates that the IE=edge browser is supported
- information about how the viewport should behave when it is loaded. Setting the viewport to have an initial scale of 1 controls the zoom level when the page is first loaded

Create your interface's body by adding a set of `<body>` tags inside the `<html>` tag pair