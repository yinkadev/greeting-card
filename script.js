const toggle = () =>{
 let name= document.getElementById('name').value
 let  popup=document.getElementById('popup');
 let blur= document.getElementById('blur');

 let paragraph = document.getElementById('username input')
 paragraph.innerText= `Dear ${name}, welcome to phonie network. your details has been saved!`
 popup.classList.toggle('active');
 blur.classList.toggle('active');
 
}



