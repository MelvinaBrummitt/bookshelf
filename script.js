let shelf=[]

async function searchBooks(){

let query=document.getElementById("searchBox").value

let response=await fetch(
"https://www.googleapis.com/books/v1/volumes?q="+query
)

let data=await response.json()

let results=document.getElementById("results")

results.innerHTML=""

data.items.forEach(book=>{

let cover=book.volumeInfo.imageLinks?.thumbnail

if(!cover) return

let img=document.createElement("img")

img.src=cover

img.onclick=()=>addBook(book)

results.appendChild(img)

})

}

function addBook(book){

shelf.push(book)

renderShelf()

}

function renderShelf(){

let rows=[
document.getElementById("shelf1"),
document.getElementById("shelf2"),
document.getElementById("shelf3")
]

rows.forEach(row=>row.innerHTML="")

shelf.forEach((book,index)=>{

let cover=book.volumeInfo.imageLinks?.thumbnail

let div=document.createElement("div")

div.className="book"

div.innerHTML=`<img src="${cover}">`

rows[Math.floor(index/8)].appendChild(div)

})

}

