import QuizzCardList from "../../components/QuizzPlayer/QuizzCardList";
const QuizzList = () => {
    return(
        <div>
            <div className="topSectionQuizzList">
                <h2 style={{color: "#500ad2", fontSize: "25px"}}>Welcome to the Quizz section !</h2>
                <h3 style={{color: "grey", fontSize: "21px"}}>From here, you will be able to create quizz, and play quizz created by other players. </h3>
            </div>
            <QuizzCardList/>
        </div>
    )
}

export default QuizzList