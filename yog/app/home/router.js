module.exports = function (router) {
  // you can add app common logic here
  // router.use(function(req, res, next){
  // });

  // also you can add custom action
  // require /spa/some/hefangshi
  // router.get('/some/:user', router.action('api'));

  // or write action directly
  // router.get('/some/:user', function(req, res){});

  // a restful api example  注释是路由
  router
    .route("/book")
    // PUT /home/book 路由
    .put(router.action("book").put)
    // GET /home/book
    .get(router.action("book"));

  // router
  //   .route("/book/:id")
  //   // GET /home/book/1
  //   .get(router.action("book").get)
  //   // DELETE /home/book/1
  //   .delete(router.action("book").delete);

  // router
  //   .route("/about")
  //   .get(router.action("about"))
  //   .put(router.action("about").put);

  // router
  //   .route("/about:id")
  //   .get(router.action("about").get)
  //   .delete(router.action("about").delete);
};
