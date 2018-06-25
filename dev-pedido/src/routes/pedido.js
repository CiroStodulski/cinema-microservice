module.exports = app => {

    const controller = app.src.controllers.pedido;

    app.route('/api/pedidos')
        .get(controller.getPedidos)
        .post(controller.addPedido);

    app.route('/api/pedidos/:id')
        .put(controller.updatePedido)
        .delete(controller.deletePedido);

}
