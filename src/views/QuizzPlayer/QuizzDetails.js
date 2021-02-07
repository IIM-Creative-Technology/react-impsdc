import React  from "react"
import "../../scss/components/quizz/quizz-card-component.scss"
import axios from "../../_helpers/axios"
import Btn from "../../components/btn"

class QuizzDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            quizzData: {}
        }
    }

    componentDidMount() {
        console.log("I will get called once the page gets loaded");
        this.setState({...this.state, isFetching: true});
        axios.get(`/quizz/${this.props.match.params.quizzId}`)
        .then(response => {
            console.log(response)
            this.setState({quizzData: response.data.data, isFetching: false});
        }).catch((err) => {
            console.error(err)
            this.setState({...this.state, isFetching: false});
        })
    }

    render() {
        return(
            <div>
                {this.state.isFetching ? 
                    <p>'Fetching quizz data ...'</p> :
                    <div className="quizzCard">   
                        <h3 className="title">{this.state.quizzData.title}</h3>
                        <hr style={{opacity: .3, backgroundColor: "lightgrey"}}/>
                        <p className="description">{this.state.quizzData.description}</p>
                        <div style={{display:"grid", placeItems: "center", width: "100%"}}>
                            <Btn content="START QUIZZ"  slug={`/quizz/player/${this.state.quizzData.id}`}/>
                        </div>
                    </div>
                }    
            </div>
        );
    }
}

export default QuizzDetails;
