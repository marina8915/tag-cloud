var tags = [
    //[text, left, top]
    ['snowflake', 200, 50],
    ['New year holidays', 100, 300],
    ['blizzard', 400, 100]
]

for (var i = 0; i < tags.length; i++) {
    var el = document.createElement('li')
    el.innerHTML = tags[i][ 0]
    el.style.left = tags[i][1] +'px'
    el.style.top = tags[i][2] + 'px'
    tagCloud.insertBefore(el, tagCloud.childNodes[0])
}
