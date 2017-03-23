let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('formatSeconds', () => {
    it('should format seconds', () => {
        let clock = TestUtils.renderIntoDocument(<Clock/>)
    });
});