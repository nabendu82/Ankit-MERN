import React, { Component } from 'react'

class LifecycleMethods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'LifecycleMethods'
        }
        console.log('LifecycleMethods constructor')
    }

    componentDidMount(){
        console.log('LifecycleMethods componentDidMount')
    }

    componentDidUpdate(){
        console.log('LifecycleMethods componentDidUpdate')
    }

    render() {
        console.log('LifecycleMethods render')
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'TWD' })}>Change State</button>
            </div>
        )
    }
}

export default LifecycleMethods