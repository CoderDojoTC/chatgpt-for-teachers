# License Footer

## Prompt

```
I want to create a web page with a license on the footer of each page.  I am using mkdocs.  How can I add some HTML to the footer to indicate my license is covered under "The Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)"?
```

## Response

```
You can add a footer to your web page using the mkdocs-footer-plugin. This plugin allows you to add custom HTML to the footer of your page. To add the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license to the footer, you can add the following HTML code to the footer.html file:

<div>
  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
</div>
```