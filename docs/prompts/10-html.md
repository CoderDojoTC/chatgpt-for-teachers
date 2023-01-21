# HTML Output

## Format a Button
### Prompt

```
Create an HTML element for a large green button with the label "Press Me".
Make the border of the button black.
Make the text white.
When clicked the button should take you to the site http://example.com
```

### Response

```
<a href="http://example.com" style="background-color: #00FF00; border:2px solid black; padding: 10px 20px; color: #FFFFFF; font-size: 16px; font-weight: bold;">Press Me</a>
```

<a href="http://example.com" style="background-color: #00FF00; border:2px solid black; padding: 10px 20px; color: #FFFFFF; font-size: 16px; font-weight: bold;">Press Me</a>

### HTML Table Formatting

### Prompt

```
Create an HTML table with three columns:

1. Full name of a state in the US
2. State abbreviation code
3. State population

Make the table head be white text on a blue background.  Make the row be alternating white and light gray.
```

### Response

```
<table style="background-color: blue; color: white;">
  <thead>
    <tr>
      <th>Full Name of State</th>
      <th>State Abbreviation Code</th>
      <th>State Population</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: white; color: black;">
      <td>California</td>
      <td>CA</td>
      <td>39.5 million</td>
    </tr>
    <tr style="background-color: lightgray; color: black;">
      <td>Texas</td>
      <td>TX</td>
      <td>28.7 million</td>
    </tr>
    <tr style="background-color: white; color: black;">
      <td>Florida</td>
      <td>FL</td>
      <td>21.3 million</td>
    </tr>
  </tbody>
</table>
```

<table style="background-color: blue; color: white;">
  <thead>
    <tr>
      <th>Full Name of State</th>
      <th>State Abbreviation Code</th>
      <th>State Population</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: white; color: black;">
      <td>California</td>
      <td>CA</td>
      <td>39.5 million</td>
    </tr>
    <tr style="background-color: lightgray; color: black;">
      <td>Texas</td>
      <td>TX</td>
      <td>28.7 million</td>
    </tr>
    <tr style="background-color: white; color: black;">
      <td>Florida</td>
      <td>FL</td>
      <td>21.3 million</td>
    </tr>
  </tbody>
</table>