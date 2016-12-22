import abrirWebsite from '../support/action/abrirWebsite';

module.exports = function given() {
    this.Given(
        /^que entramos a la (url|dirección) "([^"]*)?"$/,
        abrirWebsite
    );
};
