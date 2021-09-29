import React, {useState} from 'react'
import './ClassSearch.css';

function ClassSearch(props) {

    const [searchTerm1, setSearchTerm1] = useState("");
    return (
        <div className="search_back">
        <div class="container">
            <div className="search_wrap search_wrap_5">
                    <div className="search_box">
                        <input type="text"
                               className="input"
                               placeholder="search..."
                               // value={searchTerm1}
                               onChange={(e) => props.setSearchTerm(e.target.value)}

                        />
                        <div className="btn">
                            <p className="btn_font">Search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassSearch
