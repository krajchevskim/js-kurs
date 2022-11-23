function insertRow () {
    let table = document.getElementById('sampleTable')
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(-1)
    let cell2 = row.insertCell(-1)
    cell1.innerHTML = 'Row3 cell1'
    cell2.innerHTML = 'Row3 cell2'
}

