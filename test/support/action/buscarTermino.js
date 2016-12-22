module.exports = (value, done) => {
    browser.setValue('#lst-ib', value);
    browser.keys('Enter');
    done();
};
