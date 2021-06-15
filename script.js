var display = document.getElementById('display')
var submit = document.getElementById('submit') 
var row = 1

function displayDetails(){
    let name = document.getElementById('name').value
    let des = document.getElementById('des').value
    let pic = document.getElementById('url').value
    let img = document.createElement('img')
    img.src = pic
    img.setAttribute('id','pic')
    
    if(!name || !des || !pic){
        alert('Please fill all the boxes')
        return
    }

    let newRow = display.insertRow(row)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)

    cell1.innerHTML = name
    cell2.innerHTML = des
    cell3.appendChild(img)


    row++
}

submit.addEventListener('click',displayDetails)

