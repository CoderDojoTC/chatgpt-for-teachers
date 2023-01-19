# Getting Started

You can get started in just a few minutes.  To use these materials you will need two things:

1. A valid account on either ChatGPT or an account on the OpenAI Playground. 
   1. [Link to ChatGPT](https://chat.openai.com/chat)
   2. [OpenAI Beta Playground](https://beta.openai.com/playground)
2. A place to put the generated content.  We suggest you use GitHub Pages if you would like to share your content with others.  To use GitHub Pages you will need a GitHub account.  [Link to GitHub](http://github.com)

The way this course runs is that the instructor will show you a suggested prompt and then ask you to try that same prompt on your system.  If you are happy with the results, you can then copy and paste the results into your website.

## Rendering Tools

ChatGPT can only generate plain text.  If you want to display graphics, tables and charts you will need
to copy the text into another tool.

### No installation web-rendering tools

Use these if you have only a web browser or Chromebook.  No apps need to be installed.

1. [Trinket.io](http://trinket.io) good for rendering basic Python and turtle graphics
2. [JSFiddle.com](http://JSFiddle.com) - good for testing HTML, JavaScript and SVG

### Desktop Installation 

1. [Thonny](https://thonny.org/) - Basic Python and MicroPython
2. [Visual Studio Code](https://code.visualstudio.com/download) - Use for rendering charts and plotting done by Python code

## Directory Structure

Here is a suggestion structure:

```
HOME
    docs
        index.md
        lessons
            lesson01.md
            lesson02.md
        glossary.md
    mkdocs.yml
    license.md
    code-of-conduct.md
    README.md
    src
        plot-sine.py
```

The structure of your website (navigation, headers, footers) is controller by the settings in your mkdocs.yml file.