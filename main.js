class Quanlyhv {
    constructor(name, phone, classs, birthday, gender , img) {
        this.name = name
        this.phone = phone
        this.classs = classs
        this.birthday = birthday
        this.gender = gender
        this.img=img
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    getPhone(){
        return this.phone
    }
    setPhone(phone){
        this.phone = phone
    }
    getClasss(){
        return this.classs
    }
    setClasss(classs){
        this.classs = classs
    }
    getBirthday(){
        return this.birthday
    }
    setBirthday(birthday){
        this.birthday = birthday
    }
    getGender(){
        return this.gender
    }
    setGender(gender){
        this.gender = gender
    }
    getImg(){
        return this.img
    }
    setImg(img){
        this.img = img
    }
    edit(name, phone, classs ,birthday,gender,img){
        this.name = name
        this.phone = phone
        this.classs = classs
        this.birthday = birthday
        this.gender = gender
        this.img = img
    }
}
let myQuanlyhv = new Quanlyhv("Isagi Yoichi","444","team Z","13/10/2000",'Nam','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2430d959-ea06-470f-a7c4-45c9d358e25f/dg8z9ea-5f120c3f-09c2-4d1b-a556-ef606ee3abfb.png/v1/fill/w_1280,h_1280,q_80,strp/isagi_yoichi_by_ranshiiki_dg8z9ea-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzI0MzBkOTU5LWVhMDYtNDcwZi1hN2M0LTQ1YzlkMzU4ZTI1ZlwvZGc4ejllYS01ZjEyMGMzZi0wOWMyLTRkMWItYTU1Ni1lZjYwNmVlM2FiZmIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fsigt5mEqwW06jeHbFJg5PPPVHACyaOdNWb2qVOwOLo')
let myQuanlyhv1 = new Quanlyhv("Meguru Bachira","555" ,"team Z","22/5/1999",'Nam','https://i.pinimg.com/736x/12/dc/30/12dc30f79f10c27e558779f5d83229b1.jpg')
let myQuanlyhv2 = new Quanlyhv("Itoshi Rin","666","Team V","12/10/2000",'Nam','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ei8g8F3u7S-TlsYlHbn9_IpxL6l-MSYBsTLnp9xYkQ&s')
let arr = [myQuanlyhv, myQuanlyhv1, myQuanlyhv2]
function display() {
    let str = ""
    for (let i = 0; i < arr.length ; i++) {
        str += "<tr>";
        str += "<td>" + (i+1) + "</td>";
        str += "<td>"+ arr[i].name + "</td>";
        str += "<td>" + arr[i].phone + "</td>";
        str += "<td>" + arr[i].classs + "</td>";
        str += "<td>" + arr[i].birthday + "</td>";
        str += "<td>" + arr[i].gender + "</td>";
        str += "<td><img src='" + arr[i].img + "' alt='Ảnh học viên' style='width: 100px; height: 100px;'></td>";
        str += "<td><button onclick='updateFix("+ i +")'>Sửa</button></td>";
        str += "<td><button onclick='updateDel("+ i +")'>Xóa</button></td>";
        str += "</tr>";
    }
    document.getElementById("display").innerHTML = str;
}
display();
function add() {
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let classs = document.getElementById("classs").value
    let birthday = document.getElementById("birthday").value
    let gender = document.getElementById("gender").value
    let img = document.getElementById("img").value
    if (name && phone && classs && birthday && gender && img) {
        let addQuanly = new Quanlyhv(name, phone, classs, birthday, gender, img)
        arr.push(addQuanly)
        display();
        clear();
    }
}
    function clear() {
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('classs').value = '';
        document.getElementById('birthday').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('img').value = '';
        document.getElementById("saveButton").style.display = "none"
    }
    function updateFix(index) {
        let student = arr[index];
        document.getElementById("name").value = student.name;
        document.getElementById("phone").value = student.phone;
        document.getElementById("classs").value = student.classs;
        document.getElementById("birthday").value = student.birthday;
        document.getElementById("gender").value = student.gender;
        document.getElementById("img").value = student.img;
        document.getElementById("currentIndex").value = index;
        document.getElementById("saveButton").style.display = "inline-block";
    }
    function save() {
        let index = document.getElementById("currentIndex").value;
        let newName = document.getElementById("name").value;
        let newPhone = document.getElementById("phone").value;
        let newClasss = document.getElementById("classs").value;
        let newBirthday = document.getElementById("birthday").value;
        let newGender = document.getElementById("gender").value;
        let newImg = document.getElementById("img").value;

        arr[index].edit(newName, newPhone, newClasss, newBirthday, newGender, newImg);

        display();

        clear();

        document.getElementById("currentIndex").value = "";
    }
    function updateDel(index) {
        let student = arr[index]
        let check = confirm("Có chắc muốn xóa " + '"' + student.name + '"' + " không???")
        if (check) {
            arr.splice(index, 1)
            display()
        } else {
            alert("đùa à")
        }
    }

