document.addEventListener(
  "MDCAutoInit:End",function() {
    console.log("MDCAutoInit:End!!!");
  }
);
window.mdc.autoInit();

$(window).scroll(function () {
    parallax();
});

function parallax() {
    var ev = {
        scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    };
    ev.ratioScrolled = ev.scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight);
    render(ev);
}

function render(ev) {
    var t = ev.scrollTop;
    var y = Math.round(t * 2/3) - 800;
    $('#banner, body,').css('background-position', '0 ' + y + 'px');
}
