const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')

//Form Submit Event 
form.addEventListener('submit', addItem)

//Delete event
itemList.addEventListener('click', removeItem)

//Filter Event
filter.addEventListener('keyup', filterItems)

//Add item 
function addItem(e){
     e.preventDefault()

//Get input value
let newItem = document.getElementById('item').value

//create new li element
let li = document.createElement('li')

//add class
li.className = 'list-group-item'

//add text node with input value
li.appendChild(document.createTextNode(newItem))

//create delete button elements
let deleteBtn = document.createElement('button')

//add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

//append text node
deleteBtn.appendChild(document.createTextNode('x'))

//append button to li
li.appendChild(deleteBtn)

//append li to list
itemList.appendChild(li)
}


//Remove Item 
function removeItem(e){
     if(e.target.classList.contains('delete')){
          if(confirm('are you sure?')){
               var li = e.target.parentElement
               itemList.removeChild(li)
          }
     }
}


// Filter Items
function filterItems(e){
     // convert text to lowercase
     var text = e.target.value.toLowerCase();
     // Get lis
     var items = itemList.getElementsByTagName('li');
     // Convert to an array
     Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
         item.style.display = 'block';
       } else {
         item.style.display = 'none';
       }
     });
   }