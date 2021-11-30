const li = document.querySelectorAll('.nav-item');
$dot.css({
    left: li[0].offsetLeft + li[0].width() / 2 + 'px'
})
li.forEach(element => {
    element.on('mouseenter', function (e) {
        $dot.css({
            left: (element.offsetLeft + element.width() / 2) + 'px',
            top: '90%',
            opacity: 1
        })
    })
    element.on('click', function (e) {
        const childrens = document.querySelectorAll('.nav-item  a');
        childrens.forEach(their => {
            their.classList.remove('active')
            e.target.classList.add('active')
        })
    })
})

const dropLinks = document.querySelectorAll('li .dropdown-item');
dropLinks.forEach(element => {
    element.on('mouseenter', function (e) {
        $dot.css({
            left: $('.nav-item.dropdown').offsetLeft + 'px',
            top: (element.parentElement.parentElement.offsetTop + element.offsetTop + element.height() / 2) + 'px',
            opacity: 1
        })
    })
})

window.on('click', function (e) {
    // if (!($('ul.dropdown-menu').className.toString().indexOf('show') > -1)) {
    //     const a = document.querySelectorAll('.nav-link');
    //     let th;
    //     for (l = 0; l < a.length; l++) {
    //         if (e.target == a[l]) {
    //             th = true
    //         }
    //     }
    //     if (!th) {
    //         $dot.css({
    //             top: '90%',
    //             left: li[li.length - 1].offsetLeft + li[li.length - 1].width() / 2 + 'px',
    //             opacity: 1
    //         })
    //     }
    // }
    $dot.css({
        opacity: 0
    })
})

/* 
    const a = document.querySelectorAll('.nav-link');
    let th;
    for (l = 0; l < a.length; l++) {
        if (e.target == a[l]) {
            console.log(li[0].children[0])
            console.log('___________')
            console.log(e.target)
            th = true
        }
    }
    if (!th) {
        $dot.css({
            top: '90%',
            left: li[li.length - 1].offsetLeft + li[li.length - 1].width() / 2 + 'px',
            opacity: 1
        })
    }
*/
let x = 0
let me
$('.row.second').on('mouseenter', moveLeft)
$('.row.second').on('mouseleave', function() {
    clearInterval(me)
})
function moveLeft(e) {
    if (e.clientX > $('.row.second').width() - 50) {
        $('.row.second').scroll(x, 0)
        x += 10
    }
    me = setInterval(f=>{
        moveLeft(e)
    }, 150)
}
