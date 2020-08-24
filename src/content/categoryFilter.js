import React from 'react';

import './categoryFilter.css';

class CategoryFilter extends React.Component{
    state = {
        filter: 'all',
        options: [
            'all',
            'documentary',
            'comedy',
            'horror',
            'crime'
        ]
    };

    render(){
        return (
            <div className="categoryFilter">
                {this.state.options.map(option=>{
                    return <div key={option} onClick={e => this.setState({ filter: option})} className={this.state.filter === option ? 'selected' : null}>{option}</div>
                })}
            </div>
            );
    }
}

export default CategoryFilter;