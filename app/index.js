
// cursor
const cursor = document.getElementById("cursor");
const BooksBar = document.querySelector(".newbooks");
BooksBar.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.clientY)+"px; left: "+(e.clientX)+"px;");
});




