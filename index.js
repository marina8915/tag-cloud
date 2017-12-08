var tags = [
    //[text, left, top]
    ['snowflake', 200, 50],
    ['New year holidays', 100, 300],
    ['blizzard', 400, 100]
]
var n = 1

for (var i = 0; i < tags.length; i++) {
    var el = document.createElement('li')
    var del = '<i onclick="Del(' + n + ')">close</i>'
    el.id = n++
    el.innerHTML = tags[i][0] + del
    el.style.left = tags[i][1] + 'px'
    el.style.top = tags[i][2] + 'px'
    tagCloud.insertBefore(el, tagCloud.childNodes[0])
}

function myFunction(el) {
    var elem = el.target || event.srcElement
    if (!isNaN(elem.id) && elem.id) {
        delDisplayNone()
        document.getElementById(elem.id).querySelector('i').style.display = 'inline-block'
        elem.onmousedown = function () {
            elem.style.zIndex = 1000
            //move
            tagCloud.onmousemove = function (e) {
                document.getElementById(elem.id).querySelector('i').style.display = 'inline-block'
                elem.style.left = e.pageX - 100 + 'px'
                elem.style.top = e.pageY - 100 + 'px'
            }

            elem.onmouseup = function () {
                tagCloud.onmousemove = null
                elem.onmouseup = null
            }
        }
    }
    if (elem.id === 'tagCloud') {
        delDisplayNone()
        tagCloud.onmousemove = null
        elem.onmouseup = null
    }
}

function delDisplayNone() {
    var delList = tagCloud.getElementsByTagName('i')
    for (var i = 0; i < delList.length; i++) {
        delList[i].style.display = 'none'
    }
}

function Del(id) {
    var el = document.getElementById(id)
    el.parentNode.removeChild(el)
}
