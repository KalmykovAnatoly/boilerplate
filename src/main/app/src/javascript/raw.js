var Router = ReactRouterDOM.BrowserRouter;
var Route = ReactRouterDOM.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouterDOM.browserHistory;
var withRouter = ReactRouterDOM.withRouter

class Header extends React.Component {

    render() {
        return (
            (
                <div className="main-header">
                    <div className="main-header__title">adfasdf</div>
                    <Button position="11" optionName="Для бизнеса"/>
                    <Button position="12" optionName="Госуслуги"/>
                </div>
            )
        )
    }
}

class SampleList extends React.Component {
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
        fetch("http://localhost:8080/sample")
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

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state={
            buttons:[]
        }
    }

    componentDidMount() {

        console.log(this.props.match)
        var sampleId = this.props.match.params.sampleId
        
        fetch("http://localhost:8080/sample/"+sampleId+"/1")
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        buttons: result
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <Header/>
                <Wrapper>
                {this.state.buttons.map(button => {
                    return <Button key={button.position} position={button.position} optionName={button.optionName} link={button.link}/>
                })}
                </Wrapper>
            </div>
        )
    }
}
class Button extends React.Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    goTo(link){
        console.log(link)
        this.props.history.push('/'+link);
    }

    render() {
        return (
            <div id={"div_" + this.props.position} className="option" onClick={() => { this.goTo(this.props.link)}}>
                <div className="option_title wrap">
                {this.props.optionName}
                </div>
            </div>
        )
    }
}
class Wrapper extends React.Component{

    render(){
        return <div className="main-content wrapper">
            {this.props.children}
        </div>
    }
}



ReactDOM.render(<Router history={browserHistory}>
    <div>
    {/*<Route path="/sample/:sampleId" component={Content} />*/}
    <Route path="/sample/:sampleId" render={(props) => <Content {...props}/>} />
    <Route path="/sample" component={SampleList} />
    <Route path="*" component={SampleList} />
    </div>
</Router>, document.getElementById('container'));

// ReactDOM.render(<SampleList />, document.getElementById('container'))