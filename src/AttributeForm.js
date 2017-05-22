import React, {Component} from 'react';

class AttributeForm extends Component {
    render() {
        return (
            <div>
                <h4>Add attribute + </h4>
                Name: <input type="text" value={this.props.attribute.name}
                             onChange={this.props.handleChange.bind(this, 'attName')}/>
                Description: <input type="text" value={this.props.attribute.description}
                                    onChange={this.props.handleChange.bind(this, 'attDescription')}/>
            </div>
        );
    }
}

export default AttributeForm;