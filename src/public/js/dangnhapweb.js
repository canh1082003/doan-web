// Đảm bảo bạn đã đặt các biến cho các phần tử HTML đúng cách

const registerForm = document.querySelector('.regsiter-form');
const modalformRegsiter = document.querySelector('.modal-form');
const registerButton = document.querySelector('.register-js-modal');
const RegsiterloginButton = document.querySelector('.regsiter-from-login-js');
const Loginform = document.querySelector('.login-form');
const modalformLogin = document.querySelector('.modal-form');
const LoginButton = document.querySelector('.login-js-modal');
const LoginregsiterButton = document.querySelector('.login-from-regsiter-js');

// Gán sự kiện click cho nút "Đăng Ký"
registerButton.addEventListener('click', function(event) {
    // Ẩn form đăng nhập
    modalformLogin.style.display = 'none';
    Loginform.style.display = 'none';
    
    // Hiển thị form đăng ký
    modalformRegsiter.style.display = 'block';
    registerForm.style.display = 'block';
    
    event.stopPropagation();
});

// Gán sự kiện click cho nút "Đăng nhập" trong form đăng ký
RegsiterloginButton.addEventListener('click', function(event) {
    // Ẩn form đăng ký
    modalformRegsiter.style.display = 'none';
    registerForm.style.display = 'none';
    
    // Hiển thị form đăng nhập
    modalformLogin.style.display = 'block';
    Loginform.style.display = 'block';
    
    event.stopPropagation();
});


// Gán sự kiện click cho nút "Đăng Ký"
LoginButton.addEventListener('click', function(event) {
    // Ẩn form đăng nhập
    
    modalformRegsiter.style.display = 'none';
    registerForm.style.display = 'none';
    // Hiển thị form đăng ký
    modalformLogin.style.display = 'block';
    Loginform.style.display = 'block';
    
    event.stopPropagation();
});

// Gán sự kiện click cho nút "Đăng nhập" trong form đăng ký
LoginregsiterButton.addEventListener('click', function(event) {
    // Ẩn form đăng ký
    
    modalformLogin.style.display = 'none';
    Loginform.style.display = 'none';
    
    // Hiển thị form đăng nhập
    modalformRegsiter.style.display = 'block';
    registerForm.style.display = 'block';
    event.stopPropagation();
});
document.addEventListener('mousedown', function(event) {
    if (!registerForm.contains(event.target) && !Loginform.contains(event.target)) {
        modalformLogin.style.display = 'none';
        Loginform.style.display = 'none';
        modalformRegsiter.style.display = 'none';
        registerForm.style.display = 'none';
    }
});

function regsiter(options){
   var formRegsiter =document.querySelector(options.form);
   function validate(inputRegsiter,rule){
    var errorMessage = rule.test(inputRegsiter.value);
    var errorRegsiter = inputRegsiter.parentElement.querySelector(options.errorSelector);
                if(errorMessage){
                    errorRegsiter.innerText =errorMessage;
                    inputRegsiter.classList.add('invalid');
                }
                else{
                    errorRegsiter.innerText='';
                    inputRegsiter.classList.remove('invalid');
                }
   }
    if(formRegsiter){
        options.rules.forEach(function(rule){
            var inputRegsiter = formRegsiter.querySelector(rule.selector);
            if(inputRegsiter){
                inputRegsiter.onblur = function(){
                    validate(inputRegsiter,rule);
                }
                inputRegsiter.oninput = function(){
                var errorRegsiter = inputRegsiter.parentElement.querySelector(options.errorSelector);
                errorRegsiter.innerText='';
                inputRegsiter.classList.remove('invalid');
            }
           }
        })
    }
}
regsiter.isRequired= function(selector){
    return {
        selector:selector,
        test : function(value){
            return value.trim() ? undefined :'Vui Lòng Nhập Trường Này';
    }
    }
}
regsiter.minLength = function(selector,min){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined: `Vui Lòng Nhập Tối Thiểu ${min} kí tự`;
        }
    }
}
regsiter.isConfirm = function(selector,getConfirmValue){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined: 'Giá trị nhập vào không chính xác';
        }
    }
}