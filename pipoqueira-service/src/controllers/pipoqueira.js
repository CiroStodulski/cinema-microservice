module.exports = app => {

    let controller = {};
    const pipoqueiraModel = new app.src.models.Pipoqueira();
    controller.pipoqueira = (req, res) => {

        pipoqueiraModel.getDados((err, result) => {
            if (err) {
                res.format({
                    html: () => res.send(`<strong>error</strong>`),
                    json: () => res.status(200).json(err)
                });
            } else {
                res.format({
                    html: () => res.render('pipoqueira', { dados: result }),
                    json: () => res.status(200).json(resut)
                });
            }
        });
    }

    return controller;

}