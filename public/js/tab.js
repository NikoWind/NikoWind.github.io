$(function() {
  switchTab()
  if ('onhashchange' in window) {
    window.onhashchange = switchTab
  }
})

function switchTab() {
  console.log('switch tab')
  const url = location.href
  var active = 1
  if (url.indexOf('#news') > -1) {
    active = 2
  } else if (url.indexOf('#contact') > -1) {
    active = 3
  } else if (url.indexOf('#trends') > -1) {
    active = 2
  } else if (url.indexOf('#hdmp') > -1) {
    active = 1
  } else if (url.indexOf('#dau') > -1) {
    active = 2
  } else if (url.indexOf('#health') > -1) {
    active = 3
  } else if (url.indexOf('#story') > -1) {
    active = 1
  } else if (url.indexOf('#phm') > -1) {
    active = 1
  } else if (url.indexOf('#mtph') > -1) {
    active = 2
  } else if (url.indexOf('#careproduct') > -1) {
    active = 3
  } else if (url.indexOf('#aged') > -1) {
    active = 4
  } else if (url.indexOf('#hospital') > -1) {
    active = 5
  }

  console.log('active', active)
  $('.tabs')
    .trigger('destroy')
    .tabslet({
      active: active,
      animation: true
    })
}
