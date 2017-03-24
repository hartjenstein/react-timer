let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');
/*import expect from 'expect';
import react from 'react';
import reactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';*/

import {Clock} from 'Clock';

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('It schould render clock to output', () => {
            let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            let $el = $(ReactDOM.findDOMNode(clock));
            let actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });
    });
    describe('formatSeconds', () => {
        it('should format seconds', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 615;
            let expected = '10:15';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
  
        it('should format seconds when min/sec are less than 10', () => {
            let clock = TestUtils.renderIntoDocument(<Clock/>);
            let seconds = 61;
            let expected = '01:01';
            let actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    
});