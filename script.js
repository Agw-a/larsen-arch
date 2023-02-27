const NavToggle = () => {
    let elem = document.getElementById('topNav')
    if (elem.className === 'topnav'){
        elem.className += " responsive"
    } else {
        elem.className += 'topnav'
    }
}