const email = document.querySelector('.container form .form-row .email');
const password = document.querySelector('.container form .form-row .password');
const login = document.querySelector('.container form .form-row .loginBtn');

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