var tags = [
    //[text, left, top]
    ['snowflake', 200, 50],
    ['New year holidays', 100, 300],
    ['blizzard', 400, 100]
]
var n = 1

for (var i = 0; i < tags.length; i++) {
    var el = document.createElement('li')
    var del = '<i class="del" id ="' + n + '">close</i>'
    el.id = 'num' + n++
    el.innerHTML = tags[i][0] + del
    el.style.left = tags[i][1] + 'px'
    el.style.top = tags[i][2] + 'px'
    tagCloud.insertBefore(el, tagCloud.childNodes[0])
}

tagCloud.onclick = function (el) {
    var elem = el.target || event.srcElement
    //display del
    var id = -elem.id
    if (isNaN(id)) {
        if (elem.querySelector('i').style.display === 'inline-block') {
            elem.querySelector('i').style.display = 'none'
        } else {
            elem.querySelector('i').style.display = 'inline-block'
        }
    }
    //delete item
    if (elem.innerHTML === 'close') {
        console.log(elem.id)
        var id = 'num' + elem.id
        var el = document.getElementById(id)
        el.parentNode.removeChild(el)
    }
}
