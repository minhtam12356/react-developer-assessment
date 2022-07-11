import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export interface FilterProps {
    filterItems: string[],
}

const ALL = "All";

function Filter({ filterItems }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilter] = useState<string>(searchParams.get('category') || ALL)
    const navigate = useNavigate();
    const onClickItem = (e: any) => {
        const value = e.target.innerText;
        setFilter(value);
        value !== ALL ? navigate(`/posts?category=${value}`) : navigate("/posts");
    }
    return (
        <div className="btn-group mx-3">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {filter}
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button
                    className="dropdown-item"
                    type="button"
                    onClick={e => onClickItem(e)}
                >
                    All
                </button>
                {filterItems.map((item, index) => (
                    <button
                        key={index}
                        className="dropdown-item"
                        type="button"
                        onClick={e => onClickItem(e)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filter