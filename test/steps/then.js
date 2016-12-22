import checkSinResultadosBusqueda from '../support/check/checkSinResultadosBusqueda';

module.exports = function then() {
    this.Then(
        /^se muestra el mensaje de resultados "([^"]*)?"$/,
        checkSinResultadosBusqueda
    );
};
