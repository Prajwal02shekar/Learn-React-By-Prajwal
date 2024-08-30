import { Component } from 'react'
import { GrLocation } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

class SearchComponent extends Component {
    render() {
        return (
            <div className='SearchBlock'>
                <aside className='searchDivider'>

                    <div className="leftSearch">
                        <span className='icon-left'><GrLocation /></span>
                        <span className='inputContent'>
                            <input type="text" placeholder='Bangalore' />
                        </span>
                        <span className='icon-right'><FaAngleDown /></span>
                    </div>
                    {/* -------------------------right search ---------------------------*/}
                    <div className="rightSearch">
                        <span className='icon-left'><IoSearch /></span>
                        <span className='inputContent'>
                            <input type="text" placeholder='Search for cleaning..' />
                        </span>

                    </div>
                </aside>
            </div>
        )
    }
}

export default SearchComponent