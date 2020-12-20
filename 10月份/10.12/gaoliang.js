let mya = document.querySelectorAll('#mynav a')

let curHref = location.href
for (let i = 0; i < mya.length; i++) {
    if (mya[i].href === curHref) {
        mya[i].classList.add("active")
    }
}