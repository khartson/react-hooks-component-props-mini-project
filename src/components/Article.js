import React from 'react';
function Article({title, date='January 1, 1970', preview, minutes}) {
    let text = '';
    let mult; 
    if (minutes < 10) {
        mult = minutes / 5;
        text = '☕️'.repeat(mult) + ` ${minutes} min read`;
    } else {
        mult = minutes / 10; 
        text = '🍱'.repeat(mult) + ` ${minutes} min read`; 
    }
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview + ' | ' + text}</p>
        </article>
    )
}

export default Article;