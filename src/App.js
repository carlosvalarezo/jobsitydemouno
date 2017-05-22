import React, {Component} from 'react';
import Category from './Category';
import AttributeForm from './AttributeForm';
import './App.css';

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            attribute: {
                attCategory:0,
                attName: '',
                attDescription: ''
            },
            attributesList: []
        }
    }

    handleChange(attributeName, event) {
        const attribute = this.state.attribute;
        attribute[attributeName] = event.target.value;
        this.setState({attribute: attribute});
        console.log(JSON.parse(JSON.stringify(this.state.attribute)))
    }
    addAttribute()
    {
        /*TODO*/

    }

    removeAttribute(){
        /*TODO*/
    }

    updateAttribute()
    {
        /*TODO*/
    }

    render() {
        return (
            <div>
                <Category title="Category 1" idCategory="1"/>
                <Category title="Category 2" idCategory="2"/>
                <Category title="Category 3" idCategory="3"/>
                <AttributeForm handleChange={this.handleChange.bind(this)} attribute={this.state.attribute}/>
            </div>
        );
    }
}

export default App;
