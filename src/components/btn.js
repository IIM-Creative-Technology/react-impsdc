import "../scss/components/btn-component.scss"
import { HashLink as Link } from 'react-router-hash-link';

function Btn({content, inverse, slug}){
    return (
        <div>
            <Link className={ inverse ? "main-btn-component inverse" : "main-btn-component"} to={slug}>
                {content}
            </Link>
        </div>
    )
}

export default Btn;