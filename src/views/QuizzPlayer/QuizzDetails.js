import React  from "react"
import "../../scss/components/quizz/quizz-card-component.scss"
import axios from "../../_helpers/axios"
import Btn from "../../components/btn"
import { HashLink as Link } from 'react-router-hash-link';

const LeaderboardItem = ({score, rank, key}) => {
    return(
        <div style={{background: "#500ad2", color: "#fff", padding: '1em', display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", boxShadow: '3px 3px 20px rgba(0,0,0,.1)', borderRadius: '10px'}}>
            <span style={{display: "flex", alignItems: "center"}}>
                {rank}. 
                <span style={{fontWeight: "bolder", cursor: "pointer", marginRight: "20px"}}>{score.player.username}</span>
                { rank === 1 ? <img style={{height: "20px", width: "20px"}} src='https://www.flaticon.com/svg/vstatic/svg/2583/2583344.svg?token=exp=1612732044~hmac=affdd0e194bae124b019fe4dfd0b9c50'/> : ''}
                { rank === 2 ? <img style={{height: "20px", width: "20px"}} src='https://www.flaticon.com/svg/vstatic/svg/179/179251.svg?token=exp=1612732244~hmac=baeed20d7843d217293ecbf0628ee9a1'/> : ''}
                { rank === 3 ? <img style={{height: "20px", width: "20px"}} src='https://www.flaticon.com/svg/vstatic/svg/179/179250.svg?token=exp=1612732276~hmac=ed701bcc0eae24636300ebf4d45651af'/> : ''}
            </span>
            <span>{score.playerScore} / {score.quizzTotalScore}</span>
        </div>
    )
}

const Leaderboard = ({playerScores}) => {
    console.log({playerScores})
    // let sortedScores = playerScores.sort((a, b) => a.playerScore - b.playerScore)
    return (
            <>
                {
                    playerScores.map((score, key) => {
                        return (
                            <LeaderboardItem key={key} rank={key + 1} score={score}/>
                        )
                    })
                }
            </>
    )
}
class QuizzDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            quizzData: {},
            playerScores: []
        }
    }

    componentDidMount() {
        console.log("I will get called once the page gets loaded");
        this.setState({...this.state, isFetching: true});
        axios.get(`/quizz/${this.props.match.params.quizzId}`)
        .then(response => {
            console.log(response)
            this.setState({quizzData: response.data.data, playerScores: response.data.data.playerScores, isFetching: false});
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
                    <div>
                        <div className="quizzCard" style={{marginTop: "50px"}}>   
                            <h3 className="title">{this.state.quizzData.title}</h3>
                            <hr style={{opacity: .3, backgroundColor: "lightgrey"}}/>
                            <p className="description">{this.state.quizzData.description}</p>
                            <div style={{display:"grid", placeItems: "center", width: "100%"}}>
                                <Btn content="START QUIZZ"  slug={`/quizz/player/${this.state.quizzData.id}`}/>
                            </div>
                        </div>
                        <div style={{marginTop: "25px", padding: "1.2em"}}>
                            <h3>Quizz leaderboard : </h3>
                            <Leaderboard playerScores={this.state.playerScores}/>
                        </div>
                    </div>
                }    
            </div>
        );
    }
}

export default QuizzDetails;
