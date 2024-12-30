const profileOne = document.getElementById("profile-1")
const profileTwo = document.getElementById("profile-2")
const profileThree = document.getElementById("profile-3")
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-angle-left")) {
        profileOne.style.filter = "none"
        profileTwo.style.filter = "grayscale(100%)"
        profileThree.style.filter = "none"
    }
    if(e.target.classList.contains("fa-angle-right")) {
        profileTwo.style.filter = "grayscale(100%)"
        profileThree.style.filter = "none"
        profileOne.style.filter = "grayscale(100%)"
    }
})