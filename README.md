# Javascript-Tutorial
Js is a light-weight object oriented programming language which is used by several websites for scripting the webpage.
It is an interpreted full-fledged programming language that enables dynamic interactivity on webistes when applied to an  html document.
Java and Javascript are 2 different languages.

**WHY was Javascript born**
Javascript was born to create interactive websites
    - Client side validation
    - POP Up
    - Event on click
    - & many more
**Where is Js used now**
 - Websites client side(js,jquery,react js)
 - Website server side(Node.js ,Express js)
 - Mobile Development(React native,phone gap)
 - Software Development(electronic js Ex- vscode editor)
   
**ECMASCRIPT****
   - ECMA : ECMA International is an organization that creates standard for technologies and was founded in 1961.
   - Standard(rule) for every programming langauge.
   - ECMA 262 : is a standard published by ecms international it contains the specification for the a general purpose scripting language.
   The specification defined in Ecma 262 for creating a general purpose scripting language.
   ECMASCRIPT provides the rules and detail and guideline that a scripting language must oberserve to be considered ECMASCRIPT compliant.
   A general purpose scripting language that confirm to be ecmascript specfication.
   By reading ecmascript you can learn how to create a scripting language.
Js was created to make webapge more dynamic and interactive.
Before its creation webpages were static and lacked the ability to respond to the the user action without refreshing the page.
Js was designed to solve this problem by allowing developer to create interactive effects within the web browers.
Js was created in 1995 by BRENDAN EICH while working at netscape commuincation corporation.
It was intially called Livescript and renamed to javascript.

** Purpose of JS**
1. Interactively:Js allows developer to create interactive web elements such as forms games and dynamic user interfaces.
2. Dynamic content: It enables the modification of html and css on the fly allowing content to chnage without needing to reload the entire page
3. Form Validation: Checks user input in forms to ensure it's correct before submitting.
4.Animations: Creates animations like moving images, fading effects, and more.
5.Data Handling: Fetches and displays data from servers or APIs without refreshing the page.
6.Browser Control: Manages and controls the behavior of the browser, like opening pop-ups or navigating through pages.
7.Game Development: Enables the creation of simple browser-based games.
8.Enhanced User Experience: Improves the overall experience of using a website by making it more engaging and responsive.

**TO ADD JS TO CODE**

### 1. **Inline JavaScript**
You can add JavaScript directly within an HTML element using the `onclick`, `onmouseover`, or other event attributes.

```html
<button onclick="alert('Hello!')">Click Me</button>
```

### 2. **Internal JavaScript**
You can include JavaScript inside a `<script>` tag within the HTML file. This is typically done inside the `<head>` or just before the closing `</body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal JS Example</title>
    <script>
        function sayHello() {
            alert('Hello, World!');
        }
    </script>
</head>
<body>
    <button onclick="sayHello()">Click Me</button>
</body>
</html>
```

### 3. **External JavaScript**
You can write JavaScript in a separate file with a `.js` extension and link it to your HTML file using the `<script>` tag.

**JavaScript File (`script.js`):**
```javascript
function sayHello() {
    alert('Hello, World!');
}
```

**HTML File:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>External JS Example</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="sayHello()">Click Me</button>
</body>
</html>
```

### Where to Place `<script>` Tags:
- **In the `<head>`:** The script runs as the page loads, but it may delay the display of the page content.
- **Before the closing `</body>` tag:** The script runs after the content has loaded, which can make the page load faster.

For most use cases, placing the `<script>` tag just before the closing `</body>` tag is recommended.
