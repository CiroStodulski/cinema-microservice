function Pedido() {

    this.pedidos = [{
        id: 01,
        pedido: '0393r41838'
    }, {
        id: 02,
        pedido: '9834dsf923'
    }, {
        id: 03,
        pedido: '2892398dff'
    }];

}

Pedido.prototype.getPedidos = function (calback) {
    calback(null, this.pedidos);
}

Pedido.prototype.deletePedido = function (id) {
    const tamanhoOriginal = this.pedidos.length;
    this.pedidos = this.pedidos.filter(pedido => pedido.id != id);
    return promise = new Promise((resject, resolve) => {
        if (tamanhoOriginal > this.pedidos.length) {
            resolve({ rows: 'registro deletado' });
        } else
            resject({ rows: 'registro não encontrado' });
    });

}

Pedido.prototype.updatePedido = function (novoPedido) {
    const pedidosOriginais = this.pedidos;
    this.pedidos = this.pedidos.map(pedido => {
        if (pedido.id === novoPedido.id) {
            console.log(pedido);
            pedido = novoPedido;
        }
        return pedido
    });
    return promise = new Promise((resject, resolve) => {
        if (pedidosOriginais !== this.pedidos)
            resolve({ rows: 'registro atualizado' });
        else
            resject({ rows: 'registro não encontrado' });
    });
}

Pedido.prototype.addPedido = function (pedido, calback) {
    pedido.id = this.pedidos.length + 1;
    this.pedidos.push(pedido);
    calback(null, { row: 'registro adicionado' });
}


module.exports = () => Pedido;