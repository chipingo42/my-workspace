var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartimg');
    selectedItem.setAttribute('id',addItemId);
    console.log('added')
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc)
    var title = document.createElement('div');
    title.innerHTML = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerHTML = item.children[2].children[0].innerText;
    var select =  document.createElement('span');
    select.innerHTML = item.children[2].children[1].value;
    label.append(select);
    var delButton = document.createElement('button')
    delButton.innerText = 'Delect';
    delButton.setAttribute('onclick', 'del('+addItemId+')');
    var cartItem = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title)
    selectedItem.append(label)
    selectedItem.append(delButton)
    cartItem.append(selectedItem);
}


function del(item) {
    document.getElementById(item).remove();
}
























