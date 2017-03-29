import React from 'react';
import ReactDOM from 'react-dom';
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

import {Timer} from 'Timer';

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });
    
    it('should start timer when status is started', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

          
            expect(timer.state.count).toBe(0);
            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('started');
                expect(timer.state.count).toBe(1);
            }, 1001);
            done();
    });
    it('should pause timer on pause status', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
           
            timer.setState({count: 10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('paused');
                expect(timer.state.count).toBe(10);
            }, 1001);
            done();
    });
    it('should clear count on stop status', (done) => {
            let timer = TestUtils.renderIntoDocument(<Timer/>);
           
            timer.setState({count: 10});
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
            }, 1001);
            done();
    });
});         