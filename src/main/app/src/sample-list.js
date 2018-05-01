import React from 'react';
import './css/kiosk.css'

export class SampleList extends React.Component {
    goToSample(sampleId){
        this.props.history.push('/sample/'+sampleId);
        console.log(this.props.history)
    }

    constructor(props){
        super(props);
        this.state={
            samples:[]
        }
    }
    componentDidMount() {
        fetch("http://localhost:8080/samples")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        samples: result
                    });
                }
            )
    }
    render() {
        return (
            <div>
                {this.state.samples.map(sample => {
                    return <div key={sample.id}
                                className="sample"
                                onClick={()=>{this.goToSample(sample.id)}}>{sample.id} - {sample.name}
                    </div>
                })}
            </div>
        )
    }
}
