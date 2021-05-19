const q = document.getElementById('quantity')
const n = document.getElementById('name')
const b = document.getElementById('brand')
const btn = document.getElementById('btn')
const r = document.getElementById('result')


btn.addEventListener('Submit', message);

function message(e) {
    e.preventDefault()
    console.log(e);
    
    r.innerText = `Customer is shopping for ${q.value} ${b.value} ${n.value}`

    console.log(btn);
}

