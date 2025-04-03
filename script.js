// document.getElementById('submit').addEventListener('click', function () {
//     const password = document.getElementById('password').value;
//     const correctPassword = 'birthdayGirl@160110';
//     const errorMessage = document.getElementById('error-message');
//     const passwordScreen = document.getElementById('password-screen');
//     const protectedContent = document.getElementById('protected-content');
  
//     if (password === correctPassword) {
//       passwordScreen.style.display = 'none';
//       protectedContent.style.visibility = 'visible';;
//     } else {
//       errorMessage.style.display = 'block';
//     }
//   });

document.getElementById('submit').addEventListener('click', function(){
    const password = document.getElementById('password').value
    const correctPassword = 'birthdayGirl_160110'
    const passwordScreens = document.querySelectorAll('.wrapper');
const contents = document.querySelectorAll('.protected-content');

if (password === correctPassword) {
    passwordScreens.forEach(screen => {
        screen.style.visibility = 'hidden'; 
    });
    contents.forEach(content => {
        content.style.visibility = 'visible'; 
    });
} else {
    alert('Incorrect Password! Please try again!');
}
})

const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png"
  ];
  
  const button = document.getElementById("swapButton");
  const image = document.getElementById("myImage");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];
    image.classList.add("swappedImage");
  });