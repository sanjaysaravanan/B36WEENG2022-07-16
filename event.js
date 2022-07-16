const gP = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// document.addEventListener('mouseover', () => {
//   console.log('Printing Some Info');
// }, { once: true });


// child.addEventListener('click', () => console.log("Clicked Child"), { once: true });



// Bubbling ---> event propagation from inside to outside ( child to parent )
// document.addEventListener('click', e => {
//   console.log('document')
// })

// gP.addEventListener('click', e => {
//   console.log("grandparent");
// });

// parent.addEventListener('click', e => {
//   // e.stopPropagation();
//   console.log("parent");
// });

// child.addEventListener('click', e => {
//   // e.stopPropagation();
//   console.log("child");
// });

// Capturing ---> event propagation from outside to inside ( parent to child )
// document.addEventListener('click', e => {
//   console.log('document')
// }, { capture: true });

// gP.addEventListener('click', e => {
//   console.log("grandparent");
// }, { capture: true });

// parent.addEventListener('click', e => {
//   console.log("parent");
// }, { capture: false });

// child.addEventListener('click', e => {
//   console.log("child");
// }, { capture: false });