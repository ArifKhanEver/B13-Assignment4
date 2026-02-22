
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	- Ans: The differences lie in their selection, return, liveness, performance and syntax. The getElementById selects an ID only, returns a single element and it is usually the fastest. The getElementsByClassName selects Class or Classes, returns an HTMLcollection, gets Updated automatically with the DOM and it's generally faster. The querySelector selects a single CSS selector (#myid, .myclass), returns only the first matching element, generally slower than the getElementById of the getElementsByClassName, requires prefix  like "#" or "." in its syntax. And the querySelectorAll selects all CSS selector like ID or Classes, returns a NodeList of all matches elements, doesn't update automatically, generally slower than getElementsByClassName and requires prefixes as like the querySelector. It's Worth mentioning that getElementByID returns null if no match is found, whereas the "All" methods return an empty collection.

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
