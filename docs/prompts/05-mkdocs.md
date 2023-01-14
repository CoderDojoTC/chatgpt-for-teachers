# Mkdoc Configuration File

You want to generate a mkdocs configuration file that includes:

1. Navigation
2. Custom footer with license

## Prompt

```
I want to create a new microsite using mkdocs and the material theme.  Generate a sample mkdocs.yml file that includes a left-side nav bar and pages for home, lessons, a glossary, references and contacts.  Add extensions that allows me to create a custom html footer for my license on every page.  Add an extension for code highlighting.
```

## Response

```
site_name: ChatGPT for Teachers

theme:
  name: 'material'
  language: en

nav:
  - Home: index.md
  - Lessons: lessons.md
  - Glossary: glossary.md
  - References: references.md
  - Contacts: contacts.md

extra_css:
  - custom.css

extra_javascript:
  - custom.js

markdown_extensions:
  - footnotes
  - codehilite

footer_html:
  - <p>Copyright © 2020 My Microsite. All rights reserved.</p>
```