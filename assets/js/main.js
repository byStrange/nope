const li = document.querySelectorAll('.nav-item');
$dot.css({
    left: li[0].offsetLeft + li[0].width() / 2 + 'px'
})
li.forEach(element => {
    element.on('mouseenter', function(e) {
        $dot.css({
            left: (element.offsetLeft + element.width() / 2) + 'px',
            top: '90%',
            opacity: 1
        })
    })
    element.on('click', function(e) {
        const childrens = document.querySelectorAll('.nav-item  a');
        childrens.forEach(their => {
            their.classList.remove('active')
            e.target.classList.add('active')
        })
    })
})

const dropLinks = document.querySelectorAll('li .dropdown-item');
dropLinks.forEach(element => {
    element.on('mouseenter', function(e) {
        $dot.css({
            left: $('.nav-item.dropdown').offsetLeft + 'px',
            top: (element.parentElement.parentElement.offsetTop + element.offsetTop + element.height() / 2) + 'px',
            opacity: 1
        })
    })
})

window.on('click', function(e) {
    $dot.css({
        opacity: 0
    })
})
let x = 0
let me
$('.row.second').on('contextmenu', moveLeft)
$('.row.second').on('mouseleave', function() {
    clearInterval(me)
})

function moveLeft(e) {
    if (e.clientX > $('.row.second').width() + 20) {
        $('.row.second').scroll(x, 0)
        x += 20;
    } else if (e.clientX > $('.row.second').offsetLeft && e.clientX < $('.row.second').offsetLeft + 20 ) {
        $('.row.second').scroll(x, 0)
        x -= 20;
    }
    return false
}

document.querySelectorAll('.row.second div').forEach(they => {
    they.onclick = function() {
        they.toggle('active')
    }
})
$('.magic-btn').css(' left',  $('.magic-input').getBoundingClientRect().width / 2 + `!important`)