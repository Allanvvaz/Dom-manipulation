function addTec() {
const tecList = document.getElementById('Tec-list')
const form = document.getElementById('docForm')
form.addEventListener ('submit',function(ev) {
    ev.preventDefault()
        
      
    
  
    const lista = document.createElement('ul')
  
    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome da nova tecnologia: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    lista.appendChild(nameLi)
    
    tecList.appendChild(lista)  
  
    const xp = document.createElement('p')
    xp.innerHTML = '<p>Tempo de Experiência:</p>'
    lista.appendChild(xp)
   
    const xpLi1 = document.createElement('li')
    
    xpLi1.innerHTML = '<input type="radio" name="xp1" id="xp1" value="0-1"> <label for="xp1"> 0 - 1 </label>'
    lista.appendChild(xpLi1)

    const xpLi2 = document.createElement('li')
    
    xpLi2.innerHTML = '<input type="radio" name="xp2" id="xp2" value="1-2"> <label for="xp2"> 1 - 2 </label>'
    lista.appendChild(xpLi2)
    const xpLi3 = document.createElement('li')
    
    xpLi3.innerHTML = '<input type="radio" name="xp3" id="xp3" value="1-2"> <label for="xp3">  2+ </label>'
    lista.appendChild(xpLi3)

  


    
    
  })}

  

  