module.exports = app => {

    let controller = {};
    const PedidoModel = new app.src.models.Pedido();
    controller.getPedidos = (req, res, next) => {
        PedidoModel.getPedidos((error, result) => {
            if (error)
                res.status(500).json(error);
            else
                res.status(200).json(result);
        })
    }

    controller.addPedido = (req, res, next) => {
        const pedido = req.body;
        PedidoModel.addPedido(pedido, (error, result) => {
            if (error)
                res.status(500).json(error);
            else
                res.status(200).json(result);
        })
    }

    controller.deletePedido = async (req, res, next) => {
        const id = req.params.id;

        try {
            const response = await PedidoModel.deletePedido(id);
            res.status(202).json(response);
        } catch (e) {
            res.status(500).json(e)
        }

    }

    controller.updatePedido = async (req, res, next) => {
        const id = req.params.id;
        const pedido = req.body;
        pedido.id = id
        try {
            const response = await PedidoModel.updatePedido(pedido);
            res.status(202).json(response);
        } catch (e) {
            res.status(500).json(e)
        }

    }

    return controller;
}