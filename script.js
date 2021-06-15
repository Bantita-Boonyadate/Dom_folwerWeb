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
    let price = document.getElementById('price').value

    let newRow = display.insertRow(row)
    let cell1 = newRow.insertCell(0)
    let cell2 = newRow.insertCell(1)
    let cell3 = newRow.insertCell(2)
    let cell4 = newRow.insertCell(3)

    cell1.innerHTML = name
    cell2.innerHTML = des
    cell3.appendChild(img)
    cell4.innerHTML = price
    row++
}

submit.addEventListener('click',displayDetails)

