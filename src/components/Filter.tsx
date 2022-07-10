import React, { useState } from 'react'

export interface FilterProps {
    filterItems: string[],
    onChangeFilter: (item: string) => void,
}

function Filter({ filterItems, onChangeFilter }: FilterProps) {
    const [filter, setFilter] = useState<string>('All')
    const onClickItem = (e: any) => {
        onChangeFilter(e.target.innerText);
        setFilter(e.target.innerText);
    }
    return (
        <div className="btn-group">
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