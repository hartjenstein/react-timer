import React from 'react';
import ReactDOM from 'react-dom';
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

import {Countdown} from 'Countdown';

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });
    // calling done let mocha know that we are planning to do an async test
    // mocha will wait with the test completion until done is called
    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
            }, 1001);
            done();
        });
        it('should stop count at zero', (done) => {
            let countdown = TestUtils.renderIntoDocument (<Countdown/>);
            countdown.handleSetCountdown(1);
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
            }, 3001);
            done();
        });
        it('should pause countdown when pause is clicked', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe('paused');
            }, 1001);
            done();
        });
           it('should stop and reset countdown when stop is clicked', (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(0);
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe('stopped');
            }, 1001);
            done();
        });
    });    
});