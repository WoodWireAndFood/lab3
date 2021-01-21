
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  if (nameToShow === undefined) {
    nameToShow = 'to the world';
  }
  res.render('index', {
  	'name': nameToShow,
  });
};
