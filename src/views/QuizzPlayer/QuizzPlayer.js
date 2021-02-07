import React from "react"
import axios from "../../_helpers/axios"
import QuestionCard from "../../components/QuizzPlayer/QuestionCard"

const TopBar = ({currentQuestion, totalNbQuestions, quizzTitle}) => {
    return (
        <div style={{borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px", height: "fit-content", width: "100%", padding: '1.2em', background:"#500ad2", display: "flex", justifyContent: "space-between", placeItems: "center", color: "#fff"}}>
            <h3 style={{textTransform: "uppercase"}}>QUIZZ : « {quizzTitle} »</h3>
            <div>Question {currentQuestion + 1} / {totalNbQuestions}</div>
        </div>
    )
}

export default class QuizzPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false,
            quizzData: {},
            currentQuestionKey: 0,
            quizzEndLoading: false,
            playerScoreData: {
                playerId: null,
                quizzId: null,
                playerScore: 0,
                quizzTotalScore: 0,
                playerAwnsers: []
            },

        }
    }

    async getPlayerId() {
        return 1
    }

    triggerNextQuestion(selectedAwnser) {
        console.log({ selectedAwnser })
        let newScore = this.state.playerScoreData.playerScore + (selectedAwnser.isCorrectAwnser ? 1 : 0)
        console.log({ newScore })
        this.setState({ playerScoreData: { ...this.state.playerScoreData, playerScore: newScore } });
        this.setState({ playerScore: newScore });
        if (this.state.quizzData.questions.find((question, key) => key === this.state.currentQuestionKey + 1)) this.setState({ currentQuestionKey: this.state.currentQuestionKey + 1 })

        else {
            this.setState({ quizzEndLoading: true })
            this.savePlayerScore()
        }
    }

    savePlayerScore = () => {
        axios.post('/playerScore/create', this.state.playerScoreData)
            .then(response => {
                this.setState({ quizzEndLoading: false })
                this.props.history.push(`/results/${response.data.playerScoreId}`)
            }).catch((err) => {
                console.error(err)
            })
    }


    componentDidMount() {
        if(!localStorage.getItem('player')) this.props.history.push('/login')
        axios.get(`/quizz/${this.props.match.params.quizzId}`)
            .then(async response => {
                if (!response.data.data) this.props.history.push('/quizz/list')
                let quizzData = response.data.data
                let playerId = await this.getPlayerId()
                this.setState({ quizzData: response.data.data, fetched: true });
                this.setState({ playerScoreData: { ...this.state.playerScoreData, quizzTotalScore: quizzData.questions.length, quizzId: quizzData.id, playerId: playerId } });

            }).catch((err) => {
                console.error(err)
                this.setState({ ...this.state, isFetching: false });
            })
    }

    render() {
        return (
            <div>
                <TopBar quizzTitle={this.state.quizzData.title} currentQuestion={this.state.currentQuestionKey} totalNbQuestions={this.state.playerScoreData.quizzTotalScore} />
                {!this.state.quizzEndLoading ?
                    <div>
                        {!this.state.fetched ? <p>'Fetching quizz list ...'</p> :
                            <div className="">
                                {this.state.quizzData.questions.map((quizz, key) => {
                                    if (this.state.currentQuestionKey == key) return (<QuestionCard triggerNextQuestion={this.triggerNextQuestion.bind(this)} key={key} question={quizz} />)
                                })}
                            </div>
                        }
                    </div> :


                    <div>Please wait, your quizz results are being processed ...</div>
                }

            </div>
        )
    }
}