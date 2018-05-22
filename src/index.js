
window.onload = function() {
  let about = document.querySelector("#about a");
  about.click();
};

addEventListener();

function addEventListener(){
  let about = document.querySelector("#about");
  about.addEventListener("click", ()=> render(createIndex()));
  let menus = document.querySelector("#menu");
  menus.addEventListener("click", ()=> render(createMenu()));    
}

function createMenu(){
    
cleanPage();
    
let section = document.createElement('section');
section.classList.add("presentation"); 
    
let article = document.createElement('article');

let ul = document.createElement('ul');
    
let li1 = document.createElement('li'); 
li1.innerHTML = "French Fries";
let li2 = document.createElement('li');
li2.innerHTML = "Petit Gateau";
let li3 = document.createElement('li');    
li3.innerHTML = "Bienvenue Madam";
    
ul.appendChild(li1);    
ul.appendChild(li2);        
ul.appendChild(li3);    
    
let img = document.createElement('img');    
img.setAttribute('src',"../images/forkandknife.jpg");
    
article.appendChild(ul);
article.appendChild(img);
section.appendChild(article);  
    
return section;       
    
}

function cleanPage(){
    let node = document.querySelector("#content");
    while (node.firstChild) {
    node.removeChild(node.firstChild);
    }
}

function createIndex(){

cleanPage();
    
let section = document.createElement('section');
section.classList.add("presentation"); 
    
let article = document.createElement('article');

let h1 = document.createElement('h1');
let span = document.createElement('span');
    
h1.innerHTML = "The Best French Restaurant";    
span.innerHTML = "A true love in french cuisine";    
    
h1.appendChild(span);
    
let img = document.createElement('img');    
img.setAttribute('src',"../images/frenchfood.jpg");
    
article.appendChild(h1);
article.appendChild(img);
section.appendChild(article);  
    
return section;
}

function render(element){
    
let render = element;
let content = document.querySelector("#content");
    
content.appendChild(render);    
    
}