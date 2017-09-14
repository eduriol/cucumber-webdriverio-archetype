module.exports = (value) => {
    browser.setValue('#lst-ib', value);
    browser.keys('Enter');
};
