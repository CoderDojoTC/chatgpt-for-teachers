# Table Summarization

If you have some narrative text with facts in that text, you can use ChatGPT 
to create a table out of facts in the narrative text.

Note that the first line of the Markdown table format is included in the prompt.

## Sample Prompt
```
Create a markdown table summarizing the fruits from Goocrux:

There are many fruits that were found on the recently discovered planet Goocrux. 
There are neoskizzles that grow there, which are purple and taste like candy. 
There are also loheckles, which are a grayish blue fruit and are very tart, 
a little bit like a lemon. Pounits are a bright green color and are more 
savory than sweet. There are also plenty of loopnovas which are a neon pink 
flavor and taste like cotton candy. Finally, there are fruits called glowls, 
which have a very sour and bitter taste which is acidic and caustic, 
and a pale orange tinge to them.

| Fruit | Color | Flavor |
```

## Sample response

```
| Neoskizzles | Purple | Candy |
| Loheckles | Grayish Blue | Tart, like a lemon |
| Pounits | Bright Green | Savory |
| Loopnovas | Neon Pink | Cotton Candy |
| Glowls | Pale Orange | Sour and Bitter, Acidic and Caustic |
```

Here is that sample format rendered in HTML tables using the mkdocs converter:

| Fruit | Color | Flavor |
|-------|-------|--------|
| Neoskizzles | Purple | Candy |
| Loheckles | Grayish Blue | Tart, like a lemon |
| Pounits | Bright Green | Savory |
| Loopnovas | Neon Pink | Cotton Candy |
| Glowls | Pale Orange | Sour and Bitter, Acidic and Caustic |
