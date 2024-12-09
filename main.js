const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});


//comments list functions 

const commentInput=document.querySelector(".input-comment");
const commentBtn=document.querySelector(".btn-comment");
const commentlist=document.querySelector(".list-comment");





function addcomment(event){
    // event.preventDefualt();
        //adding a new comment elements
        const commentdiv =document.createElement("div");
        commentdiv.classList.add("div-comment")
        //adding the list element for the new comments
        const newcomment =document.createElement("li");
        newcomment.innerText=commentInput.value;
        newcomment.classList.add("comment-item");
        
        //clear the input field
        commentInput.value="";
       
        //craeting the removing btn
        const removecomment=document.createElement("button");
        removecomment.textContent="Delete"
        removecomment.classList.add("remove")
        removecomment.addEventListener("click",()=>{
            newcomment.remove();
        });

   

        //apending childs for the comment 
        commentlist.appendChild(newcomment);
        newcomment.appendChild(commentdiv);
        newcomment.appendChild(removecomment);

    
}
commentBtn.addEventListener("click", addcomment)