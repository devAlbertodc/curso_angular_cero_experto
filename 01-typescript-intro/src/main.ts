import "./style.css";

//import "./topics/01-basic-types.ts";
//import "./topics/02-object-interface.ts";
//import "./topics/03-functions.ts";
//import "./topics/04-homework-types.ts";
//import "./topics/05-basic-destructuring.ts";
//import "./topics/06-function-destructuring.ts";
//import "./topics/07-import-export.ts"
//import "./topics/08-classes"
//import "./topics/09-generics"
import "./topics/10-decorators"

// rome-ignore lint/style/noNonNullAssertion: <explanation>
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = 'Hola Mundo';
console.log('Hola Mundo');