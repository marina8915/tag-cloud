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
    var limits = {
        top: 0,
        right: tagCloud.offsetWidth - elem.offsetWidth - 30,
        bottom: tagCloud.offsetHeight - elem.offsetHeight - 4,
        left: 0
    }
    if (!isNaN(elem.id) && elem.id) {
        delDisplayNone()
        document.getElementById(elem.id).querySelector('i').style.display = 'inline-block'
        elem.onmousedown = function () {
            elem.style.zIndex = 1000
            document.onmousemove = function (e) {
                document.getElementById(elem.id).querySelector('i').style.display = 'inline-block'
                var newLocation = {
                    x: limits.left,
                    y: limits.top
                }
                if (e.pageX > limits.right) {
                    newLocation.x = limits.right
                } else if (e.pageX > limits.left) {
                    newLocation.x = e.pageX
                }
                if (newLocation.x === limits.right) {
                    document.getElementById(elem.id).querySelector('i').style.marginLeft = '0'
                    document.getElementById(elem.id).querySelector('i').style.marginRight = '10px'
                    elem.insertBefore(document.getElementById(elem.id).querySelector('i'), elem.childNodes[0])
                } else {
                    document.getElementById(elem.id).querySelector('i').style.marginLeft = '10px'
                    document.getElementById(elem.id).querySelector('i').style.marginRight = '0'
                    elem.appendChild(document.getElementById(elem.id).querySelector('i'))

                }
                if (e.pageY > limits.bottom) {
                    newLocation.y = limits.bottom
                } else if (e.pageY > limits.top) {
                    newLocation.y = e.pageY
                }
                elem.style.left = newLocation.x + 'px';
                elem.style.top = newLocation.y + 'px';
            }
        }
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null

        }
    }
    if (elem.id === 'tagCloud') {
        delDisplayNone()
        document.onmousemove = null
        document.onmouseup = null
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
