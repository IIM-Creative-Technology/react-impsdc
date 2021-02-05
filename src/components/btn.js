import "../scss/components/btn-component.scss"

function Btn({content, inverse}){

    return (
        <div>
            <button className={ inverse ? "main-btn-component inverse" : "main-btn-component"} link="/">
                {content}
            </button>
        </div>
    )
}

export default Btn;