import { Bookmark } from '../../../node_modules/lucide-react';


const card = () => {
  return (
    <div className="card">
        <div>
            <div className="top">
                <div className="image">
                    <img src="https://imgs.search.brave.com/-kYf5CYKNI9LVjMyP3ue1jngBaYrdPgP00RRu3ty89M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNiLzcw/L2FjLzNiNzBhYzdj/M2RhMjhlNDdmZGVl/NGNiMjlkYmM1YzY3/LmpwZw" alt="logo" />
                </div>
                <button>Save <Bookmark /></button>
            </div>
            <div className="center">
                <h3>Amazon <span>5 days ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className="tags">
                    <h4>Part-Time</h4>
                    <h4>Senior Level</h4>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>$120/hr</h3>
                <p>Mumbai, India</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default card