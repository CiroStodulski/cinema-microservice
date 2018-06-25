module.exports = app => {

    controller = app.src.controllers.pipoqueira;
    
    app.get('/teste', controller.pipoqueira);

}