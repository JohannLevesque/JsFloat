# JsFloat

Snippet to add **add**, **substract**, **multiply** and **divide** prototype methods in js for numbers to avoid the float js unhabitual management. 

Indeed in js, 

``` Javascript
console.log(0.1 + 0.2);
```

will show:

``` Javascript
0.30000000000000004
```

You can find all the related information about this strange behavior here:
[Why 0.1 + 0.2 ≠ 0.3 in JavaScript](https://javascript.plainenglish.io/why-0-1-0-2-0-3-in-javascript-d7e218224a72?gi=d1a3079b3e49)

With this snippet you will be allowed to do:

``` Javascript
console.log(0.1.add(0.2)); // => 0.3 will be shown

```
Or to do:

``` Javascript
console.log(0.1.divide("0.00073")); // => 136.986301369863 will be shown
```

## Integration

Into your base/master html page, include the JsFloat.js file into your <head>...</head> html section.

Sample of include for your html page:

``` HTML
<script type="application/javascript" src="https://[yourwebappurl]/JsFloat.js"></script>
```

## Usage

Considering input1 and input2 float numbers (the input2 can be a string representing a float number like "1.08") like 0.1 or -37.008: 

- console.log(input1.add(input2)); 
- console.log(input1.substract(input2)); 
- console.log(input1.multiply(input2)); 
- console.log(input1.divide(input2));

### Sample

``` Javascript
// Get the substraction between two string representing float numbers
let string1 = prompt("First string. Fill a float number"), string2 = prompt("Second string. Fill a float number");

// Parse the first string to be able to call the number prototype method "substract"
let float1 = parseFloat(string1);

// Show result
alert(isNaN(float1) ? "First string not representing a float number" : `The result of the substract is: ${float1.substract(string2)}`);
```
