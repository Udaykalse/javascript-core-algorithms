const items = document.querySelectorAll('.item')

items.forEach(function(item,idx){
    item.textContent = `Item ${idx + 1}`
    item.style.color = 'blue'
})