
# HTML and CSS

1. Hello World
- Html is a markup language, not a programming language.
- Tags usually have opening and closing tags. Some tags are self-closing : ```<img> <br/> <hr/>```
- Following is a basic HTML Code
```html
<!doctype HTML>
<html>
	<head>
	</head>
	<body>
        <p> Hello World! </p>
	</body>
</html>
```
2. Head vs Body
- Head contains metadata about the document.
```html
<head>
    <!-- 1. Page title, visible in the tab -->
    <title> Web Development </title>
    <!-- 2. Shortcut icon present in the tab -->
    <link rel="icon" href="./assets/images/pokemon.ico">
    <!-- 3. Importing external CSS files -->
    <link rel="stylesheet" type="text/css" href="./assets/css/basic.css">
    <!-- 4. Specify additional metadata -->
</head>
```
- Body contains actual content of the page.
- View usage of different tags such as `h1, h2 .., h7, p, span,ol,ul` in this sample page [here](./index1.html)
3. Declaring Styles :
    - Inline
    - ```<Style>``` tag
    - External Stylesheet
4. Basic html tags :
    - ```<table>```
    - ```<p>```
    - ```<ul>``` / ```<li>```
    - ```<ol>``` / ```<li>```
    - ```<img>```
    - ```<a>```
5. CSS Selectors
- tag selector
```css
p {
    font-size: 24px;
}
```
- class selector
```css
.className {
    color: red;
}
```
- id selector : Only use id for naviagtion ( eg. ***index2.html***)
```css
#idName {
    color: red;
}
```
- More specific CSS selector has higher priority
- Read more about Specificity [here](https://www.w3schools.com/css/css_specificity.asp) 
```css
body p.one {
    color: red;
}
p.one {
    color: green;
}
.one {
    color: blue;
}
/* Color will be red */
```
- If both equally specific, whichever comes later will override
```css
body p.one {
    color: red;
}
body p.one {
    color: green;
}
/* Color will be green */
```
6. Pseudo Classes and Pseudo Elements
```css
.h1:hover {
    /* Pseudo class */
    color: grey;
}
p.intro:first-line {
    /* Pseudo element */
    font-weight: bold;
}
```
- We have prepared a sample page using CSS selectors for you that you can view here [here](./index3.html)
7. CSS Positioning
- A good explanation can be found here : [W3Schools](https://www.w3schools.com/css/css_positioning.asp)
- __static__ : default positioning
- __relative__ : relative to default positioning
- __fixed__ : relative to viewport
- __absolute__ : relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling. 

8. Margin vs Padding
- A good explanation can be found here : [Blog](https://blog.hubspot.com/website/css-margin-vs-padding)
- __Margin__ : Adds space outside html element. Can use margin, margin-top, margin-bottom, margin-left, margin-right.
- __Padding__ : Adds space inside element (between border and content). Can use padding, padding-top, padding-bottom, padding-left, padding-right.

9. Block Elements and Inline Elements
- A good explanation can be found here : [Blog](https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/)
- __inline__ Elements one after the other. Cannt use width, height, css properties.
- __inline-block__ : Elements one after the other. Can use width, height.
- __block__ : Elements one below the other. Full width by default.
- Example of inline element in ***index5.html***

10. Playing with fonts in CSS
- You can change the font property of text in variety of ways, check it out [here](./index4.html)

### A simple exercise
Try to recreate this blog site [here](./BlogSite/index.html) using HTML and CSS.