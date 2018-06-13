window.onload = function() {
  iHover()
}

function iHover() {
  var oLi = document.getElementsByClassName('solution')
  for (var i = 0; i < oLi.length; i++) {
    oLi[i].onmouseover = function() {
      $(this).addClass('active')
      $(this).animate(
        {
          top: 0
        },
        30
      )
    }
    oLi[i].onmouseout = function() {
      $(this).removeClass('active')
      $(this).animate(
        {
          top: 0
        },
        30
      )
    }
  }
}
