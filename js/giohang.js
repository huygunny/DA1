const btn = document.querySelectorAll("button")
btn.forEach(function(button, index) {
        button.addEventListener("click", function(event) {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("h1").innerText
            var productPrice = product.querySelector("span").innerText
                // console.log(productPrice, productName, productImg)
            addcart(productPrice, productImg, productName)
        })
    })
    //--------thêm
function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }

    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img src="' + productImg + '"><span class="title">' + productName + '</span></td><td><p><span class="prices">' + productPrice + '</span><sup>đ</sup></p></td><td><input style="width:30px;outline: none;" type="number" value="1" min="1"> </td><td style="cursor: pointer;text-align: right;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
        // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}
//-------------tổng tiền----------------
function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue * productPrice * 1000
            // totalB = totalA.toLocaleString('de-DE')
        totalC = totalC + totalA
            // console.log(totalC)
            // totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
        // console.log(cartTotalA)
}
//-----------Xóa--------------------------------
function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
                // console.log(cartitemR)
        })
    }
}

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function() {
            carttotal()
        })
    }
}