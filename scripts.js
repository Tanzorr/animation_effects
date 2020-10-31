/*
animated string
 */

function animate(id) {
    var node = document.getElementById(id).childNodes[0];
    var text = node.data;
    setInterval(function () {
        text = text.substring(1) + text[0];
        node.data = text;
    }, 150); //интервал прокрутки, мс
}
window.addEventListener('load', function (e) { animate('text_line'); }, false);

/*
end animated string
 */

/*
modal window
 */
var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
modal window
 */