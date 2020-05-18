class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            visibility: false
        }
    }
    change() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.change}>
                    {this.state.visibility ? 'Hide details' : 'Show detalis'}
                </button>
                {this.state.visibility && (
                    <p>Here is some secret text!</p>
                )}
            </div>
        );
    }

}

ReactDOM.render(<Visible />, document.getElementById('app'));


// let visibility = false;

// const change = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={change}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (
//             <p>Here is some visible text! Hellowi</p>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById("app"));
// };

// render();