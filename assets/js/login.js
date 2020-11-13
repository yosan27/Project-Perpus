const email = document.querySelector('.container form .form-row .email');
const password = document.querySelector('.container form .form-row .password');
const login = document.querySelector('.container form .form-row .loginBtn');
const forgot = document.querySelector('.container form .form-row .forgot');

login.addEventListener('click', function(){
  if(email.value == 'admin'){
    if(password.value == '12345'){
      open("index.html", "_self");
    }else{
      alert('Password Salah!')
    }
  }
  else if(email.value == 'user'){
    if(password.value == '12345'){
      open("indexUser.html", "_self");
    }else{
      alert('Password Salah!')
    }
  }else{
    alert('Email Tidak Terdaftar!')
  }

  email.value = "";
  password.value = "";
});

forgot.addEventListener('click', function(){
  alert('Password baru dikirimkan ke email :   ' + email.value + "@gmail.com");
  email.value = "";
  password.value = "";
});