# JsFloat

Snippet to add **add**, **substract**, **multiply** and **divide** prototype methods in js for numbers to avoid the float js unhabitual management. 

Indeed in js, 
console.log(0.1 + 0.2); 

will show:
'0.30000000000000004'. 

With this snippet you will be allowed to do:
console.log(0.1.add(0.2));

## Integration

Into your base/master html page, include the jsfloat.js file into your <head></head>.

<script type="application/javascript" src="https://[yourwebappurl]/JsFloat.js"></script>

## Usage

console.log([number like 0.1 or 1].add([number like 0.1 or 1])); 
console.log([number like 0.1 or 1].substract([number like 0.1 or 1])); 
console.log([number like 0.1 or 1].multiply([number like 0.1 or 1])); 
console.log([number like 0.1 or 1].divide([number like 0.1 or 1]));
