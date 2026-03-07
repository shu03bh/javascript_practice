//events run in sequence, but sometimes we want to run some code when a specific event happens, for example when a button is clicked, or when a form is submitted, or when a page is loaded

//onclick event - it is triggered when a user clicks on an element, we can use it to run a function when a button is clicked

//onload event - it is triggered when a page is loaded, we can use it to run a function when a page is loaded

//onchange event - it is triggered when the value of an element is changed, we can use it to run a function when the value of an input field is changed

//onsubmit event - it is triggered when a form is submitted, we can use it to run a function when a form is submitted

//onmouseover event - it is triggered when a user moves the mouse over an element, we can use it to run a function when a user moves the mouse over an element

//onmouseout event - it is triggered when a user moves the mouse out of an element, we can use it to run a function when a user moves the mouse out of an element

//onkeydown event - it is triggered when a user presses a key on the keyboard, we can use it to run a function when a user presses a key on the keyboard

//onkeyup event - it is triggered when a user releases a key on the keyboard, we can use it to run a function when a user releases a key on the keyboard

//onkeypress event - it is triggered when a user presses a key on the keyboard, we can use it to run a function when a user presses a key on the keyboard, but it is deprecated and should not be used

//oninput event - it is triggered when a user inputs a value in an input field, we can use it to run a function when a user inputs a value in an input field

//onscroll event - it is triggered when a user scrolls a page, we can use it to run a function when a user scrolls a page

//onresize event - it is triggered when a user resizes a window, we can use it to run a function when a user resizes a window

//onerror event - it is triggered when an error occurs, we can use it to run a function when an error occurs

//onfocus event - it is triggered when an element gets focus, we can use it to run a function when an element gets focus

//onblur event - it is triggered when an element loses focus, we can use it to run a function when an element loses focus

//type of events - mouse events, keyboard events, form events, window events, etc.
//timestamp of event - it is the time when the event is triggered, we can use it to get the time when an event is triggered
//defaultPrevented - it is a property of the event object that tells us whether the default action of the event has been prevented or not, we can use it to prevent the default action of an event
//target of event - it is the element that triggered the event, we can use it to get the element that triggered the event
//toElement of event - it is the element that the event is being sent to, we can use it to get the element that the event is being sent to
//srcElement of event - it is the element that the event is being sent from, we can use it to get the element that the event is being sent from
//currentTarget of event - it is the element that the event is currently being processed on, we can use it to get the element that the event is currently being processed on
//clientX and clientY of event - it is the x and y coordinates of the mouse pointer when the event is triggered, we can use it to get the x and y coordinates of the mouse pointer when an event is triggered
//screen X and screenY of event - it is the x and y coordinates of the mouse pointer relative to the screen when the event is triggered, we can use it to get the x and y coordinates of the mouse pointer relative to the screen when an event is triggered
//altkey of event - it is a property of the event object that tells us whether the alt key was pressed or not when the event was triggered, we can use it to check if the alt key was pressed when an event was triggered
//ctrlKey of event - it is a property of the event object that tells us whether the ctrl key was pressed or not when the event was triggered, we can use it to check if the ctrl key was pressed when an event was triggered
//shiftKey of event - it is a property of the event object that tells us whether the shift key was pressed or not when the event was triggered, we can use it to check if the shift key was pressed when an event was triggered 
//keycode of event - it is a property of the event object that tells us the code of the key that was pressed when the event was triggered, we can use it to get the code of the key that was pressed when an event was triggered


///event propagation - it is the process by which an event travels through the DOM tree, it can be captured or bubbled, we can use event.stopPropagation() to stop the propagation of an event
//event delegation - it is a technique of using a single event listener to handle events for multiple elements, it is useful when we have a large number of elements that we want to attach the same event listener to, we can use event.target to get the element that triggered the event and then check if it matches the element we want to handle the event for


// === PRACTICE: Browser Event Handlers ===
window.onload = function() {
	// Button click event
	const btn = document.getElementById('myBtn');
	if (btn) {
		btn.addEventListener('click', function(event) {
			alert('Button was clicked!');
			btn.textContent = 'Clicked!';
			// Show mouse coordinates
			console.log('ScreenX:', event.screenX, 'ScreenY:', event.screenY);
			// Show if modifier keys were pressed
			console.log('Alt:', event.altKey, 'Ctrl:', event.ctrlKey, 'Shift:', event.shiftKey);
		});
	}

	// Example: input change event
	// Uncomment the following lines if you add an input field with id="myInput" in your HTML
	// const input = document.getElementById('myInput');
	// if (input) {
	//     input.addEventListener('change', function(event) {
	//         alert('Input changed: ' + input.value);
	//     });
	// }

	// Example: keydown event
	// document.addEventListener('keydown', function(event) {
	//     console.log('Key pressed:', event.key, 'KeyCode:', event.keyCode);
	// });
};

