import React from 'react';

export default class PedigreeTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    buildParents() {
        if(this.props.data.mother != null && this.props.data.father != null) {
            return(
                <ul className='pt-parents'>
                    <PedigreeTile data={this.props.data.mother} gen={this.props.gen+1}/>
                    <PedigreeTile data={this.props.data.father} gen={this.props.gen+1}/>
                </ul>
            )
        }
        else return null;
    }

    render() {
        return (
            <li className='pedigree-tile'>
                <a className='pt-content' href={`/view/${this.props.data.ref}`}>
                    <div className={`pt-imgframe g${this.props.gen}`}>
                        <img 
                            className={`pixel g${this.props.gen}`}
                            src={`assets/img/${this.props.data.ref}.png`} 
                        />
                    </div>
                    <br/>
                    <label className={`pt-label`}>{this.props.data.name}</label>
                </a>
                {this.buildParents()}
            </li>
        )
    }
}