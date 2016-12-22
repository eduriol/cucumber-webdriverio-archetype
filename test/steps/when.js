import buscarTermino from '../support/action/buscarTermino';

module.exports = function when() {
    this.When(
        /^buscamos la palabra "([^"]*)?"$/,
        buscarTermino
    );
};
