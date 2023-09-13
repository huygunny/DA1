function kt() {
    var masv = document.getElementById("masv").value;
    var ht = document.getElementById("ht").value;
    var email = document.getElementById("email").value;
    var gioitinh = document.getElementsByName("gioitinh");
    var quoctich = document.getElementById("quoctich").value;
    var loimsv = "";
    var loiht = "";
    var loiemail = "";
    var loigt = "";
    var loiqt = "";
    if (masv.length == 0) {
        loimsv = "mã sinh viên không được bỏ trống";
        document.getElementById('dmm').innerHTML = loimsv;
        document.getElementById("dmm").style.display = "";
        document.getElementById("dmm").style.color = "red";
    }
    if (ht.length == 0) {
        loiht = "họ tên không được bỏ trống";
        document.getElementById("loiht").innerHTML = loiht;
        document.getElementById("loiht").style.display = "";
        document.getElementById("loiht").style.color = "red";
    }
    if (email.length == 0) {
        loiemail = "email không được bỏ trống";
        document.getElementById("loiemail").innerHTML = loiemail;
        document.getElementById("loiemail").style.display = "";
        document.getElementById("loiemail").style.color = "red";
    }
    if (gioitinh[0].checked == false && gioitinh[1].checked == false) {
        loigt = "vui lòng chọn giới tính";
        document.getElementById("loigt").innerHTML = loigt;
        document.getElementById("loigt").style.color = "red";
    }
    if (quoctich == 0) {
        loiqt = "vui lòng chọn quốc tịch";
        document.getElementById("loiqt").innerHTML = loiqt;
        document.getElementById("loiqt").style.color = "red";
    }
    return false;
}

function oc() {
    document.getElementById("dmm").style.display = "none";
}

function oc1() {
    document.getElementById("loiht").style.display = "none";
}

function oc2() {
    var email = document.getElementById("email").value;
    var kiemtraem = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    if (kiemtraem.test(email)) {
        document.getElementById("loiemail").innerHTML = "email hợp lệ";
        document.getElementById("loiemail").style.color = "red";
        setTimeout(() => document.getElementById("loiemail").style.display = "none", 5000);
    } else {
        document.getElementById("loiemail").innerHTML = "email không hợp lệ vd:( abcxyz@gmail.com)"
        document.getElementById("loiemail").style.color = "red";
        document.getElementById("loiemail").style.display = "";
    }
}