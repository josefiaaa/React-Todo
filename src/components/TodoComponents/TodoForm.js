import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();

        this.state = {
            text: ''
        };
    }
  
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: Date.now(),
            text: this.state.text,
            completed: false,
        });

        this.setState({
            text: ''
        })
    }


    render() {
        return (
            <div className = "todoFormContainer">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name='text'
                    value={this.state.text} 
                    onChange={this.handleChange}
                    placeholder= 'What are we accomplishing today?'>
                    </input>
                    <button onClick={this.handleSubmit}>Add</button>
                </form>

            </div>    

        )
    }
}

export default TodoForm;