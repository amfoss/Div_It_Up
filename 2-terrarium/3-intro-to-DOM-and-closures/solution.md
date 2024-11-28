## Assignment:


The HTMLCollection DOM Interface
The `HTMLCollection` is a DOM interface that represents a collection of HTML elements. These elements can be accessed by their index number or their `id` or `name` attribute.

An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed.

Let’s take the example of the Google homepage (https://www.google.com).

```javascript
const forms = document.forms;
console.log(forms);

```
If you run the above code, it returns an `HTMLCollection` containing all the `<form>` elements in the document. 

Developers often use it to:

- Access specific elements by their index.
- Dynamically update page content, such as - modifying attributes or styling.
- Handle events, like attaching event listeners to a set of elements.
In the case of Google, the HTMLCollection makes it easier to manage the interactive behavior of the search form and other form elements on the page.