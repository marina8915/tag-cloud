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
        top: 14,
        right: tagCloud.offsetWidth - elem.offsetWidth - 30,
        bottom: tagCloud.offsetHeight - elem.offsetHeight / 2 - 4,
        left: 0
    }
    if (!isNaN(elem.id) && elem.id) {
        newTag.style.display = 'none'
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
                elem.style.top = newLocation.y - elem.offsetHeight / 2 + 'px';
            }

        }
        delDisplayNone()
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null

        }
    }
    if (elem.id === 'tagCloud') {
        document.onmousemove = null
        document.onmouseup = null
        elem.ondblclick = function (e) {
            newTag.style.display = 'inline-block'
            newTag.style.left = e.pageY + 'px'
            newTag.style.top = e.pageX + 'px'
            tagCloud.insertBefore(newTag, tagCloud.childNodes[0])
            newTag.onchange = function (e) {
                el = document.createElement('li')
                del = '<i onclick="Del(' + n + ')">close</i>'
                el.id = n++
                el.innerHTML = document.getElementById('newTag').value + del
                el.style.left = newTag.style.left
                el.style.top = newTag.style.top
                tagCloud.insertBefore(el, tagCloud.childNodes[0])
                newTag.style.display = 'none'
                newTag.value = ''
            }
        }

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
