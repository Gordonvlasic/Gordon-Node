(function(){
    function Start(){
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})

let RemoveCollection = null;

function DeleteCollection(){

let RemoveCollection = prompt("Enter the name of the collection you want to delete");
if(RemoveCollection != null){
    let link = document.location.origin + '/book-list/delete/' + RemoveCollection;
    window.location.href = link;
}
}