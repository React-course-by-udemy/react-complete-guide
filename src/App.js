import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'stephanie', age: 26}
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'stephanie', age: 27}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'stephanie', age: 27}
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, i'm a React App</h1>
                <p>This is really working!</p>
                <button style={style} onClick={this.switchNameHandler.bind(this, 'Maxmilian')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                        changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this, 'Adam')}>My Hobbies:
                    Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
                        click={() => this.switchNameHandler('Bassant')}/>
            </div>
        );
    }
}

export default App;
