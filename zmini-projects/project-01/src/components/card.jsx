import { Bookmark } from '../../../node_modules/lucide-react';


const Card = (props) => {
  return (
    <div className="card">
        <div>
            <div className="top">
                <div className="image">
                    <img src={props.brandLogo} alt="logo" />
                </div>
                <button>Save <Bookmark /></button>
            </div>
            <div className="center">
                <h3>{props.comapnyName} <span>{props.datePosted}</span></h3>
                <h2>{props.post}</h2>
                <div className="tags">
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card ;