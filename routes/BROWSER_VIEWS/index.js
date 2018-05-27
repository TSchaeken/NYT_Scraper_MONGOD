const router = require('express').Router();
const { renderAllArticles } = require('../../controller/articles');

router.get('/', (req, res) => {
  renderAllArticles(req.query).then((dbres) => {
    const hbsObject = {
      article: dbres,
    };
    res.render('index', hbsObject);
  });
});

module.exports = router;
