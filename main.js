var allButtons = $('#buttons > span')
var n=0  
var size = allButtons.length
var timerId=setTimer()

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    activeButton(allButtons.eq(index))
    n=index 
    window.clearInterval(timerId)
    timerId=setTimer()
  })
}

$('.window').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave', function() {
  timerId = setTimer()
})


/*工具函数*/
function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 3000)
}

function activeButton($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}