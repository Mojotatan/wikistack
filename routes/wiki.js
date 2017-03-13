var express = require('express');
var router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User;

// 	retrieve all wiki pages
router.get('/', function(req, res, next) {
    // res.redirect('/')
    Page.findAll({}).then(function(pages) {
        res.render('index.html', {pages: pages})
    })
    .catch(next)
})


// submit a new page to the database
router.post('/', function(req, res, next) {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  var newPage = req.body
  var page = Page.build({
    title: newPage.title,
    content: newPage.content
  });

  // STUDENT ASSIGNMENT:
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise or it can take a callback.
  var save = page.save();
  save.then(function (page) {
    //   res.json(save)
      res.redirect(page.route)
  });

  // -> after save -> res.redirect('/');
});

// router.post('/', function(req, res, next) {
//     res.json(req.body)
// })


//	retrieve the "add a page" form
router.get('/add', function(req, res, next) {
    res.render('addpage')
})

router.get('/:urlTitle', function(req, res, next) {
    // res.send(req.params.urlTitle)
    Page.findAll({
        where: {
            urlTitle: req.params.urlTitle
        }
    })
    .then(function(page) {
        res.render('wikipage', {page: page[0]})
    })
    .catch(next);
})

module.exports = router;
