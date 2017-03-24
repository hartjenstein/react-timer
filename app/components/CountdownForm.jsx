import React from 'react';


export class CountdownForm extends React.Component{
    onSubmit(e) {
        e.preventDefault();
        let strSeconds = this.refs.seconds.value;
        // checking if data is valid
        if(strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            // 10 specifies the base, 2 would be binary, 16 hexadecimal
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    render() {
        return (
            <div>
                <form ref ="form" onSubmit={this.onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}




