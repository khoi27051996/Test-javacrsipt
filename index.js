// Bài 1 : Tính Lương Nhân Viên. 
/**
 * input : Cho phép người dùng nhập số liệu ngày làm
 * 
 * Xử Lý : Cho phép người dùng tự nhập dữ liệu số ngày làm và số tiền lương 1 ngày cho nhân viên, khi click vào sẽ xuất hiện ra số tiền phải trả cho nhân viên tương ứng với dữ liệu người dùng nhập vào
 * Công Thức : Tiền Lương = Số ngày làm * Tiền lương 1 ngày
 * 
 * output: Xuất ra màn hình số tiền cần trả cho nhân viên
 */

var btnBt1 = document.getElementById('btnBt1');
btnBt1.onclick = function () {
    var dayWorlking = document.getElementById('dayWorlking').value*1;
    var wageDay = document.getElementById('wageDay').value*1;

    var wage;
    wage = dayWorlking * wageDay;
    var show = document.getElementById('show');
    show.style.fontSize = '30px';
    show.innerHTML = wage;

}

// Bài 2 : TÍNH TỔNG GIÁ TRI TRUNG BÌNH CỦA 5 SỐ THỰC

/**
 * input: cho phép người dùng nhập 5 số thực ngẫu nhiên
 * 
 * Xử Lý : Khi click vào nút button sẽ hiện lên giá trị tổng trung bình của 5 số khi người dùng nhập liệu.
 * Công Thức : (R1 + R2 + R3 + R4 + R5) / 5
 * 
 * output: Show ra kết quả cho người dùng thấy 
 */
var btnBt2 = document.getElementById('btnBt2');

btnBt2.onclick = function (){
    var numberOne = document.getElementById('numberOne').value*1;
    var numberTwo = document.getElementById('numberTwo').value*1;
    var numberThree = document.getElementById('numberThree').value*1;
    var numberFour = document.getElementById('numberFour').value*1;
    var numberFive = document.getElementById('numberFive').value*1;

    var result;
    result = (numberOne + numberTwo + numberThree + numberFour + numberFive) / 5 ;

    var show2 = document.getElementById('show2').innerHTML = result;
}
// Bài 3 : Quy đổi USD sang VNĐ
/**
 * input: Cho phép người dùng nhập số Đô muốn quy đổi,
 * biết 1 đô = 23.500VNĐ
 * 
 * xử lý: khi người dùng click vào nút button sẽ hiện ra giá trị tiền VND tương ứng với số USD muốn quy đổi
 * 
 * output: show ra số tiền có thể đổi được từ số USD người dùng nhập !
 */
var btnBt3 = document.getElementById('btnBt3');
btnBt3.onclick = function() {
    var usd = document.getElementById('usd').value*1;
  
    var result2;
    result2 = usd * 23500;
    var show3 = document.getElementById('show3');
    show3.style.fontSize = '40px';
    show3.innerHTML = result2;
}
// Bài 4 : Tính Diện tích , chu vi HCN
/**
 * input: Cho phép người dùng nhập dữ liệu chiều dài, chiều rộng của HCN
 * 
 * xử lý: Sau khi người dùng click vào nut button sẽ hiện lên Diện tích, chu vi của hình chữ nhật theo dữ liệu mà người dùng nhập liệu.
 * Công Thức : S = a x b --- P : (a + b) * 2
 * 
 * output: Show ra kết quả  Diện Tích, Chu vi ở màn hình
 */
var btnBt4 = document.getElementById('btnBt4');
btnBt4.onclick = function(){
    var a = document.getElementById('length').value*1;
    var b = document.getElementById('width').value*1;

    var S;
    S = a * b;
    var P;
    P = (a + b) *2;

    var show4 = document.getElementById('show4');
    show4.style.fontSize = '30px';
    show4.innerHTML = P;
    var show5 = document.getElementById('show5')
    show5.style.fontSize = '30px';
    show5.style.color = 'black'
    show5.innerHTML = S;
}
// Bài 5: Tính Tổng 2 ký số;
/**
 * Input: Cho phép người dùng nhập 1 số tự nhiên bất kỳ gồm 2 chữ số 
 * 
 * xử lý : Từ số người dùng nhập ta lấy 2 chữ số trong số đó cộng vào với nhau rồi show kết qua ra bằng cách khi người dùng ấn dô nút button
 * 
 * Cách làm: Ví dụ cho 1 số AB: tính tổng A + B
 * --Lấy số A: ta lấy AB chia cho 10 rồi làm tròn dùng hàm Math.Floor
 * --Lấy số B: ta dùng phép chia lấy dư AB % 10
 * 
 * Tính tổng : A + B
 * 
 * OutPut: show kết quả ra màn hình
 */

var btnBt5 = document.getElementById('btnBt5');
btnBt5.onclick = function (){
    var number = document.getElementById('number').value*1;
    var number1;
    number1 = Math.floor(number / 10);
    var number2;
    number2 = number % 10;

    var result5;
    result5 = number1 + number2;

    var show6 = document.getElementById('show6');
    show6.style.fontSize = '50px';
    show6.style.background = 'black';
    show6.innerHTML = result5;
}