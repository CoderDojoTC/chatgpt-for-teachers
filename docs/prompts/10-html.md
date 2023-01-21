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

Make the table hearer be white text on a blue background.  Make the row be alternating white and light gray.
```

### Response

```
<table style="background-color: #0000FF; color: #FFFFFF;">
  <tr style="background-color: #FFFFFF;">
    <th>Full Name of a State in the US</th>
    <th>State Abbreviation Code</th>
    <th>State Population</th>
  </tr>
  <tr style="background-color: #EEEEEE;">
    <td>California</td>
    <td>CA</td>
    <td>39,512,223</td>
  </tr>
  <tr style="background-color: #FFFFFF;">
    <td>Texas</td>
    <td>TX</td>
    <td>28,995,881</td>
  </tr>
  <tr style="background-color: #EEEEEE;">
    <td>Florida</td>
    <td>FL</td>
    <td>21,477,737</td>
  </tr>
</table>
```

<table style="background-color: #0000FF; color: #FFFFFF;">
  <tr style="background-color: #FFFFFF;">
    <th>Full Name of a State in the US</th>
    <th>State Abbreviation Code</th>
    <th>State Population</th>
  </tr>
  <tr style="background-color: #EEEEEE;">
    <td>California</td>
    <td>CA</td>
    <td>39,512,223</td>
  </tr>
  <tr style="background-color: #FFFFFF;">
    <td>Texas</td>
    <td>TX</td>
    <td>28,995,881</td>
  </tr>
  <tr style="background-color: #EEEEEE;">
    <td>Florida</td>
    <td>FL</td>
    <td>21,477,737</td>
  </tr>
</table>