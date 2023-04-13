# HTML Output

ChatGPT knows how to generate HTML.  In this lesson, we will generate a simple button and a formatted table.

## Format a Button

You can tell ChatGPT the colors, size and actions for buttons.

### Prompt

```linenums="0"
Create an HTML element for a large dark green button 
with the label "Press Me".
Make the border of the button black.
Make the text white.
When clicked the button should take you to the 
site http://example.com
```

### Response

```
<a href="http://example.com" style="background-color: darkgreen; 
   border:2px solid black;
   padding: 10px 20px;
   color: #FFFFFF;
   font-size: 16px; 
   font-weight: bold;">Press Me</a>
```

<a href="http://example.com" style="background-color: darkgreen; border:2px solid black; padding: 10px 20px; color: #FFFFFF; font-size: 16px; font-weight: bold;">Press Me</a>

## HTML Table Formatting

### Prompt

```linenums="0"
Create an HTML table with three columns:

1. Full name of a state in the US
2. State abbreviation code
3. State population

Make the table head be white text on a blue background.
Make the row be alternating white and light gray.
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

## HTML Definition Lists

### Prompt

```linenums="0"
What are the most common HTML elements used by 7th grade students?
List the elements and how they are used in an HTML definition list.
```

### Response
```
<dl>
  <dt>Heading</dt>
  <dd>Used to define the title of a document or section.</dd>
  <dt>Paragraph</dt>
  <dd>Used to define a section of text.</dd>
  <dt>Hyperlink</dt>
  <dd>Used to link to other webpages or documents.</dd>
  <dt>Image</dt>
  <dd>Used to add an image to a webpage.</dd>
  <dt>List</dt>
  <dd>Used to create a list of items.</dd>
  <dt>Table</dt>
  <dd>Used to create a data table.</dd>
  <dt>Form</dt>
  <dd>Used to create an interactive form for collecting user data.</dd>
</dl>
```

<dl>
  <dt>Heading</dt>
  <dd>Used to define the title of a document or section.</dd>
  <dt>Paragraph</dt>
  <dd>Used to define a section of text.</dd>
  <dt>Hyperlink</dt>
  <dd>Used to link to other webpages or documents.</dd>
  <dt>Image</dt>
  <dd>Used to add an image to a webpage.</dd>
  <dt>List</dt>
  <dd>Used to create a list of items.</dd>
  <dt>Table</dt>
  <dd>Used to create a data table.</dd>
  <dt>Form</dt>
  <dd>Used to create an interactive form for collecting user data.</dd>
</dl>

## HTML Form

### Prompt

```linenums="0"
Create an HTML form for gathering background information for students.
Include questions about their name, birthday, their favorite color
and what they did over summer vacation.
When the form is complete have them press a "Save" button that will
send the form data to http://example.com/myschool/mydatabase
```

### Response

<form action="http://example.com/myschool/mydatabase" method="post">
  <p>
    <label>Name:</label>
    <input type="text" name="name" />
  </p>
  <p>
    <label>Birthday:</label>
    <input type="date" name="birthday" />
  </p>
  <p>
    <label>Favorite Color:</label>
    <input type="text" name="fav_color" />
  </p>
  <p>
    <label>What did you do over summer vacation?</label>
    <input type="text" name="summer_vacation" />
  </p>
  <input type="submit" value="Save" />
</form>

## Radio Button

```linenums="0"
Create an HTML form for gathering information about a favorite color.
Make the form have a radio button with the options 
red, orange, yellow, green, blue, purple or other.
If they select other, add a text field for them to
put the name of the color in.
```

### Response

```
<form>
    <label><b>What is your favorite color?</b></label><br>
    <input type="radio" name="fav_color" value="red" >Red<br>
    <input type="radio" name="fav_color" value="orange" >Orange<br>
    <input type="radio" name="fav_color" value="yellow" >Yellow<br>
    <input type="radio" name="fav_color" value="green" >Green<br>
    <input type="radio" name="fav_color" value="blue" >Blue<br>
    <input type="radio" name="fav_color" value="purple" >Purple<br>
    <input type="radio" name="fav_color" value="other" >Other:
    <input type="text" name="other_fav_color">
</form>
```

<form>
    <label><b>What is your favorite color?</b></label><br>
    <input type="radio" name="fav_color" value="red" >Red<br>
    <input type="radio" name="fav_color" value="orange" >Orange<br>
    <input type="radio" name="fav_color" value="yellow" >Yellow<br>
    <input type="radio" name="fav_color" value="green" >Green<br>
    <input type="radio" name="fav_color" value="blue" >Blue<br>
    <input type="radio" name="fav_color" value="purple" >Purple<br>
    <input type="radio" name="fav_color" value="other" >Other:
    <input type="text" name="other_fav_color">
</form>