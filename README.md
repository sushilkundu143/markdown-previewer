# Markdown Previewer

## Objective
Build an app that is functionally similar to the Markdown Previewer available at [https://sushilkundu143.github.io/markdown-previewer/](https://sushilkundu143.github.io/markdown-previewer/).

## User Stories
1. **Editor Element**: I can see a `<textarea>` element with a corresponding `id="editor"`.
2. **Preview Element**: I can see an element with a corresponding `id="preview"`.
3. **Live Preview**: When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.
4. **Markdown Rendering**: When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type. (Hint: You can use the Marked library to parse markdown.)
5. **Default Markdown**: When the markdown previewer first loads, the default text in the `#editor` field should contain valid markdown representing at least one of each of the following elements:
   - A heading element (H1 size)
   - A subheading element (H2 size)
   - A link
   - Inline code
   - A code block
   - A list item
   - A blockquote
   - An image
   - Bolded text
6. **Initial Render**: When the markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

### Optional Bonus
- **Carriage Returns**: My markdown previewer interprets carriage returns and renders them as `<br>` (line break) elements.

## Technologies Used
- React
- Vite
- Marked Library for Markdown Parsing
- HTML
- CSS

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<username>/<repository-name>.git
   cd <repository-name>
   npm install
   npm run dev

## Testing
To ensure all user stories are met:

- Use the provided testable-projects-fcc link to run tests.
- Verify that all tests pass to confirm functionality.
   
