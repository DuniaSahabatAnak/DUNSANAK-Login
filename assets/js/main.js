/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (password, inputIcon) =>{
    const input = document.getElementById(password),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'
 
            // Add icon
            iconEye.classList.add('ri-eye-line')
            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'
 
            // Remove icon
            iconEye.classList.remove('ri-eye-line')
            // Add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
 }
 
 showHiddenPass('password','input-icon')
 
 const allowedUsers = [
     { email: "laporkan.dunsanak@gmail.com", password: "ayocegahbullying" },
     { email: "yulnita41@guru.smp.belajar.id", password: "ayocegahbullying" },
     { email: "ppg.trisnarahman78@program.belajar.id", password: "ayocegahbullying" },
     { email: "ppg.yoggabristone97@program.belajar.id", password: "ayocegahbullying" },
     { email: "yosiyulidawati67@guru.sd.belajar.id", password: "ayocegahbullying" },
     { email: "opilasudirman40@guru.smp.belajar.id", password: "ayocegahbullying" },
     { email: "dewianggraini81@admin.smp.belajar.id", password: "ayocegahbullying" }
 ];
 
 document.getElementById('loginForm').addEventListener('submit', function(event) {
     event.preventDefault();
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     
     const user = allowedUsers.find(user => user.email === email && user.password === password);
     
     if (user) {
         alert("Login successful!");
         window.location.href = "https://dashboard.emailjs.com/admin/history";  // Redirect to success page
     } else {
         alert("Invalid email or password.");
     }
 });