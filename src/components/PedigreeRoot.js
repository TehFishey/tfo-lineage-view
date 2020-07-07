import React from 'react';
import PedigreeTile from './PedigreeTile';
import './pedigree.css'

export default class PedigreeRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            creature : this.props.creature
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.data.name}'s Pedigree</h3>
                <div style={{display: 'inline-block'}}>
                    <div className='tree'>
                        <ul>
                            <PedigreeTile data={this.props.data} gen={1}/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}