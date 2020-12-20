function CreateCookie(key, value, num) {
    let timer = new Date()
    timer.setDate(timer.getDate() + num)
    document.cookie = `${key}=${value};expires=${timer}`
}

function getCookie(key) {
    let arr = document.cookie.split('; ')
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=')
        if (arr2[0] === key) {
            return arr2[1]
        }
    }
    return null
}

function removeCookie(key) {
    let timer = new Date()
    timer.setDate(timer.getDate() - 1)
    document.cookie = `${key}=;expires=${timer}`
}