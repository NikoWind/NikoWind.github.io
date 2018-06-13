var express = require('express')
var router = express.Router()

const pages = [
  {
    id: 'index',
    url: '/',
    name: '首页',
    menu: [{ name: '奥芬蜂巢', url: "javascript:scroll('item1');" }, { name: '优势', url: "javascript:scroll('item2');" }, { name: '应用场景', url: "javascript:scroll('item3');" }]
    // menu: [{ name: '奥芬蜂巢', url: '/#1' }, { name: '优势', url: '/#2' }, { name: '应用场景', url: '/#3' }]
  },
  {
    id: 'product',
    url: '/product',
    name: '产品及服务',
    menu: [{ name: 'HDMP', url: '/product#hdmp' }, { name: '医盟通', url: '/product#dau' }, { name: '医健宝', url: '/product#health' }]
  },
  {
    id: 'solution',
    url: '/solution',
    name: '解决方案',
    menu: [
      { name: '社区健康管理服务', url: '/solution#phm' },
      { name: '社区医疗卫生服务', url: '/solution#mtph' },
      { name: '社区保健品经销', url: '/solution#careproduct' },
      { name: '社区养老服务', url: '/solution#aged' },
      { name: '医院及医疗机构', url: '/solution#hospital' }
    ]
  },
  {
    id: 'about-us',
    url: '/about-us',
    name: '关于我们',
    menu: [{ name: '我们的故事', url: '/about-us#story' }, { name: '新闻动态', url: '/about-us#news' }, { name: '关于我们', url: '/about-us#contact' }]
  }
]

router.get('/', function(req, res, next) {
  res.render('index.html', { pages, currentPage: 'index' })
})

router.get('/product', function(req, res, next) {
  res.render('product.html', { pages, currentPage: 'product' })
})
router.get('/solution', function(req, res, next) {
  res.render('solution.html', { pages, currentPage: 'solution' })
})
router.get('/about-us', function(req, res, next) {
  res.render('about-us.html', { pages, currentPage: 'about-us' })
})
router.get('/news-detail1', function(req, res, next) {
  res.render('news-detail1.html', { pages, currentPage: 'news-detail1' })
})
router.get('/news-detail2', function(req, res, next) {
  res.render('news-detail2.html', { pages, currentPage: 'news-detail2' })
})
router.get('/news-detail3', function(req, res, next) {
  res.render('news-detail3.html', { pages, currentPage: 'news-detail3' })
})
module.exports = router
