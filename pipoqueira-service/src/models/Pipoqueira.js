class Pipoqueira {
    constructor() {
        this.dados = [
            { id: 1, dados: 'teste' },
            { id: 2, dados: 'teste2' }
        ]
    }
}

Pipoqueira.prototype.getDados = function (callback) {
    callback(null, this.dados);
}

module.exports = () => Pipoqueira;