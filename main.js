// Silde Header
//Nút trái
var index = 1;
slideShow = function() {
    var slide = ["./img/slide1.jpg", 
                 "./img/slide2.jpg",
                 "./img/slide3.jpg", 
                 "./img/slide4.jpg" 
                ];
    document.getElementById("slide").src = slide[index];
    index++;
        if (index == 4) {
            index = 0;
        }
}

// TỰ động đổi ảnh sau 4s
setInterval(slideShow,3000);

// Nút phải
var index = 1;
function leftSide() {
    var slide = ["./img/slide4.jpg", 
                 "./img/slide3.jpg",
                 "./img/slide2.jpg", 
                 "./img/slide1.jpg" 
                ];
    document.getElementById("slide").src = slide[index];
    index++;
        if (index == 4) {
            index = 0;
        }
}

// slide ảnh phần content 
var size = document.getElementsByClassName('advertisement')[0].clientWidth;
var introduction = document.getElementsByClassName('introduce')[0];
var change = 0;
var img = introduction.getElementsByTagName('img');
var max = size * img.length - size;

//Mũi tên tiến
nextImg = function() {
    if (change < max) {
    change += size;
    } else {
        change = 0;
    }
    introduction.style.marginLeft = '-' + change + 'px';
}

//Mũi tên lùi
function returnImg() {
    if (change == 0 ) {
        change = max;
    } else {
    change -= size ;
    }
    introduction.style.marginLeft = '-' + change + 'px';
}

//Slide show 3s
setInterval(nextImg, 3000);

// Chuyển đổi giao diện
function changeProductList(type, element ) {
   var tab = document.getElementsByClassName('tabs');
    console.log(tab)
    for (i = 0; i < tab.length; i++) {
        tab[i].style.background = '#f8f9fa'
        tab[i].style.color = '#2daab8'
    }
    element.style.background = '#39bae9';
    element.style.color = '#fff';

    document.getElementById(type).style.display = 'block';

    switch (type) {
        case 'producted':
            document.getElementById('entered').style.display = 'none';
            document.getElementById('sold').style.display = 'none';
            document.getElementById('review').style.display = 'none';
            document.getElementById('selling').style.display = 'none';
        break;

        case 'entered':
            document.getElementById('producted').style.display = 'none';
            document.getElementById('sold').style.display = 'none';
            document.getElementById('review').style.display = 'none';
            document.getElementById('selling').style.display = 'none';
        break;

        case 'sold':
            document.getElementById('entered').style.display = 'none';
            document.getElementById('producted').style.display = 'none';
            document.getElementById('review').style.display = 'none';
            document.getElementById('selling').style.display = 'none';
        break;

        case 'selling':
            document.getElementById('entered').style.display = 'none';
            document.getElementById('producted').style.display = 'none';
            document.getElementById('review').style.display = 'none';
            document.getElementById('sold').style.display = 'none';
        break;
    }
}

// Tính tiền trog hàng hoá đã nhập
function upDatePriceImported() {
    var price = document.getElementById('price_imported').value
    var value = document.getElementById('value_imported').value
    money = price * value;    
    document.getElementById('money_imported').value = money + ' đ';
}

//click in ra bảng
function addImported() {
    var nameProduct = document.getElementById('name_imported').value
    var dateImported = document.getElementById('date_imported').value
    var priceImported = document.getElementById('price_imported').value
    var valueImported = document.getElementById('value_imported').value
    var moneyImported = document.getElementById('money_imported').value
    document.getElementById('result_imported').innerHTML += `
    <tr>
        <td>${nameProduct}</td>
        <td>${dateImported}</td>
        <td>${priceImported}đ</td>
        <td>${valueImported}</td>
        <td>${moneyImported}</td>
    </tr>
    `
}

function resetImported() {
    document.getElementById('forms_imported').reset();
}

//Tính tiền hàng hóa đã bán được
function upDatePriceSold() {
    var bunker = document.getElementById('bunker_sold').value
    var price = document.getElementById('price_sold').value
    var value = document.getElementById('value_sold').value
    money = price * value;
    rest = bunker - value;
    document.getElementById('money_sold').value = money + ' đ'; 
    document.getElementById('rest_sold').value = rest ; 
}

function addSold() {
    var nameSold = document.getElementById('name_sold').value
    var bunkerSold = document.getElementById('bunker_sold').value
    var priceSold = document.getElementById('price_sold').value
    var valueSold = document.getElementById('value_sold').value
    var moneySold = document.getElementById('money_sold').value
    var restSold = document.getElementById('rest_sold').value
    document.getElementById('result_sold').innerHTML += `
    <tr>
        <td>${nameSold}</td>
        <td>${bunkerSold}</td>
        <td>${priceSold}</td>
        <td>${valueSold}</td>
        <td>${moneySold}</td>
        <td>${restSold}</td>
</tr>
    `
}

function resetSold() {
    document.getElementById("form_solds").reset();
}

// Gỡ sản phẩm khỏi shop
function remove(item) {
    document.getElementById(item).style.display = 'none';
}