import React, {Component} from 'react'


class LazyLoadingImg extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
        this.handleOnLoad = this.handleOnLoad.bind(this)
    }

    handleOnLoad(e) {
        this.setState({loaded: true})
    }

    render() {
        const { loaded } = this.state;
        const {initial, final, alt } = this.props;
        return (
            <React.Fragment>
                <img className={loaded ? "img-responsive" : "hidden"} src={final} alt={alt} onLoad={this.handleOnLoad}/>
                <img className={loaded ? "hidden" : "img-responsive"} src={initial} alt={alt}/>
            </React.Fragment>
        )
    }

}

export default LazyLoadingImg