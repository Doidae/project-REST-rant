const React = require('react')
const Def = require('./default')   // check this later

function home () {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
        </main>
        <a href="/places">
            <button className='btn-primary'>Places Page</button>
        </a>
    </Def>
    )
    
}



module.exports = home