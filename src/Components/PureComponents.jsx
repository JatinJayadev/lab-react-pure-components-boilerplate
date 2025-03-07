import { PureComponent } from 'react'

export default class myPureComponent extends PureComponent {
    constructor() {
        super()
        this.state = {
            count: 0,
            toggle: false
        }
    }

    handleClick = () => {
        if (this.state.toggle === true) {
            this.setState({ ...this.state, count: this.state.count + 1 })
            console.log("This is Pure Component")
        }
    }
    handleToggle = () => {
        this.setState({ ...this.state, toggle: !this.state.toggle })
    }

    render() {

        return (
            <div className='Pure-div'>
                <h1>Pure Components</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleToggle}>Toggle</button>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}
