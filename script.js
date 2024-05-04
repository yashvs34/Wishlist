
const parent = document.getElementById("page");
const element = document.getElementById("text");
const button = document.getElementById("button");

let count = 1;
let newParent;
let bin;
button.addEventListener("click",() => {
    if(element.value.length > 0){
        const input = element.value;
        newParent = document.createElement("div");
        const newHeading = document.createElement("div");
        bin = document.createElement("img");
        bin.setAttribute("src","bin.jpg");
        bin.classList.add("image");
        newHeading.innerText = `${count}. ${input}`;
        count++;
        element.value = null;
        newParent.classList.add("new");
        newParent.setAttribute("id",count);
        newParent.appendChild(newHeading);
        newParent.appendChild(bin);
        parent.appendChild(newParent);
        newParent.addEventListener("click",(event) => {
            const toDelete = event.currentTarget;
            toDelete.remove();
        })
    }
});
