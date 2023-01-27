var author = '<div style="position: fixed;bottom: 0;left: 20px;background-color: #fff;box-shadow: 0 4px 8px rgba(0,0,0,.05);border-radius: 3px 3px 0 0;font-size: 12px;padding: 5px 10px;">By <a href="https://solomontd.netlify.app">Solomon Taye</a> &nbsp;&bull;&nbsp;</div>';
$("body").append(author);
var btnTop = $('#btn-top');
$(window).on('scroll', function () {
    if ($(this).scrollTop()) {
        btnTop.fadeIn();
        var toastLiveExample = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    } else {
        btnTop.fadeOut();
        toast.hide()
    }
});
btnTop.on('click', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 100);
});

const nav = document.querySelector(".navbar");
window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if (window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add('fixed-top');
        nav.classList.add('navbar-dark');
        nav.classList.add('bg-dark');
    } else {
        nav.classList.remove('fixed-top');
        nav.classList.remove('navbar-dark');
        nav.classList.remove('bg-dark');
        nav.classList.remove('bg-transparent');
    }
}

// var toastTrigger = document.getElementById('liveToastBtn')
// var toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//     toastTrigger.addEventListener('click', function () {
//         var toast = new bootstrap.Toast(toastLiveExample)

//         toast.show()
//     })
// }