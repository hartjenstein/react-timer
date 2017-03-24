/*import expect from 'expect';
import react from 'react';
import reactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';*/
let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

import {CountdownForm} from 'CountdownForm';

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    it('should call onSetCountdown if valid seconds entered', () => {
        let spy = expect.createSpy();
        let countdownForm =  TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 109;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
    it('should not call onSetCountdown if invalid seconds entered', () => {
        let spy = expect.createSpy();
        let countdownForm =  TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = 'abc';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});