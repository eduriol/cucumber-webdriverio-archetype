import openWebsite from '../support/action/openWebsite';

module.exports = function given() {
    this.Given(
        /^we enter (url|site) "([^"]*)?"$/,
        openWebsite
    );
};
