module.exports = (expectedText) => {
    const element = $('div.card-section > p:nth-child(1)');
    const actualText = element.getText();
    actualText.should.equal(expectedText);
};
