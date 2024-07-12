import { Component, useEffect, useState } from "react"

type Theme = 'dark' | 'light'
type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type MyProps = {
    theme: string,
}

type MyState = {
    theme: string,
}

class Switch extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            theme: 'dark'
        };
    }

    handleChange = (e: ChangeEvent): void => {
        if(e.target.checked) {
            this.setState({theme: 'dark' })
        } else {
            this.setState({theme: 'light'});
        }
    }

    componentDidUpdate(): void {
        document.body.setAttribute('data-theme', this.state.theme);
    }

    render() {
        return (
            <div className="container-switch">
                <span>Mude o Tema</span>
                <label className="switch">
                    <input type="checkbox" onChange={this.handleChange} checked={this.state.theme === 'dark'} />
                    <span className="slider"></span>
                </label>
            </div>
        )
    }
}

export default Switch