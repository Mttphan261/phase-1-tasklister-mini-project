document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(document.querySelector("#new-task-description").value)
  })
});

function buildToDo(toDo) {
console.log(toDo)

//create the dropdown
let select = document.createElement('select');
console.log(select)

select.addEventListener('change', () => {
  p.style.color = select.value;
})

//create options for dropdown
let option1 = document.createElement('option');
option1.textContent = 'red'
option1.value = 'red'

let option2 = document.createElement('option');
option2.textContent = 'yellow'
option2.value = 'yellow'

let option3 = document.createElement('option');
option3.textContent = 'green'
option3.value = 'green'

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
//create button
let btn = document.createElement('button');
btn.addEventListener('click', handleDelete)
btn.textContent =  'X';
//create the paragraph
let p = document.createElement('p');
p.textContent = `${toDo }  `;

p.appendChild(select);
p.appendChild(btn);


console.log(p)
document.querySelector('#tasks').appendChild(p);

}

function handleDelete(e) {
  e.target.parentNode.remove();
}



















// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
