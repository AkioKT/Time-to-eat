let makanan = ['Rendang', 'Mie Celor', 'Pempek', 
               'Bakmi Jawa', 'Megono', 'Tongseng', 
               'Lontong Sari', 'Soto Banjar', 'Bubur Ikan', 
               'Sengkolo', 'Kapurung', 'Toppo Lada',
               'Udang Merah', 'Papeda', 'Ikan Bakar Manokwari'];

function uncheckedOption () {
    var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
    if (!takeAwayChecked) {
        alert('Silakan pilih opsi makan di sini atau take away terlebih dahulu');
        window.location.reload();
        return;
    } else if (takeAwayChecked) {
        document.getElementById("cartList").setAttribute("style", "display: block;");
    }
}

function checkedOption() {
var opsiMakan = document.querySelector('input[name="pilihan"]:checked');
    if (opsiMakan && opsiMakan.nextElementSibling.innerText === 'Take Away') {
        document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
    } else {
        document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
    }
}

// SUMATRA
function orderButton1() {
    uncheckedOption();
    var img = document.createElement('img');
        img.src = 'Asets/Rendang.jpg'; // URL gambar
        img.alt = 'Gambar Placeholder';
        img.style.width = '17.5vw'; // Menentukan ukuran gambar
        document.getElementById('imageContainer').appendChild(img);
        checkedOption();
}
    
function orderButton2() {
    uncheckedOption();
    var img = document.createElement('img');
        img.src = 'Asets/mie celor sumatra.jpg'; // URL gambar
        img.alt = 'Gambar Placeholder';
        img.style.width = '17.5vw'; // Menentukan ukuran gambar
        document.getElementById('imageContainer').appendChild(img);
        checkedOption();
}

function orderButton3() {
    uncheckedOption();
    var img = document.createElement('img');
        img.src = 'Asets/pempek.jpg'; // URL gambar
        img.alt = 'Gambar Placeholder';
        img.style.width = '17.5vw'; // Menentukan ukuran gambar
        document.getElementById('imageContainer').appendChild(img);
        document.getElementById("outputFood").innerHTML = `Pesanan anda`;
        checkedOption();
}

// JAWA
function orderButton4() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/bakmi jawa.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton5() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/jawa 2.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton6() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/jawa 3.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

// KALIMANTAN

function orderButton7() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/kalimantan 1.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton8() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/kalimantan 2.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton9() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/kalimantan 3.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}
// SULAWESI

function orderButton10() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/sulawesi 1.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton11() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/sulawesi 2.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton12() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/sulawesi 3.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}
// PAPUA
function orderButton13() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/papua 1.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton14() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/papua 2.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderButton15() {
    uncheckedOption();
    document.getElementById("cartList").setAttribute("style", "display: block;");
    var img = document.createElement('img');
    img.src = 'Asets/papua 3.jpg'; // URL gambar
    img.alt = 'Gambar Placeholder';
    img.style.width = '17.5vw'; // Menentukan ukuran gambar
    document.getElementById('imageContainer').appendChild(img);
    document.getElementById("outputFood").innerHTML = `Pesanan anda`;

        var takeAwayChecked = document.querySelector('input[name="pilihan"]:checked');
        if (takeAwayChecked && takeAwayChecked.nextElementSibling.innerText === 'Take Away') {
            document.getElementById("outputFood").innerHTML = "Pesanan anda sedang diproses untuk take away.";
        } else {
            document.getElementById("outputFood").innerHTML = "Pesanan anda untuk makan disini.";
        }
}

function orderClose() {
    document.getElementById("cartList").setAttribute("style", "display: none;")
    window.location.reload();
    window.location.reload('input[name="pilihan"]');
}

function orderConfirm() {
    let namaCust = document.getElementById("nameCustomer").value;
    if (!namaCust) {
        alert('Silahkan masukkan nama anda');
        return;
    }
    document.getElementById("cartList").setAttribute("style", "display: none;")
    document.getElementById("cartList2").setAttribute("style", "display: block;")
    document.getElementById("orderMessage1").innerHTML = "TERIMA KASIH";
    document.getElementById("orderMessage2").innerHTML = "Nama pemesan : " + namaCust;   
}

function orderDone() {
    document.getElementById("cartList2").setAttribute("style", "display: none");
    window.location.reload();
    window.location.reload('input[name="pilihan"]');
    window.location.reload('input[type="text"]');
}