var removeCartItems = document.getElementsByClassName('btn-danger')
console.log(removeCartItems)
for (var i = 0; i < removeCartItems.length; i++) {
    var button = removeCartItems[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    }) 
}

var removeCartItems = document.getElementsByClassName('fa-trash')
console.log(removeCartItems)
for (var i = 0; i < removeCartItems.length; i++) {
    var button = removeCartItems[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    }) 
}
