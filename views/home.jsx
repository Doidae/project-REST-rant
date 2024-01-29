const React = require('react')
const Def = require('./default')   // check this later

function home () {
    return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/pancakes.jpg" alt="Pancakes" style={{ width: '400px', height: '300px' }}/>
                <div>
                    Photo by <a href="https://unsplash.com/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chad Montano</a> on <a href="https://unsplash.com/photos/baked-pancakes-eeqbbemH9-c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </div>
        </main>
        <a href="/places">
            <button className='btn-primary'>Places Page</button>
        </a>
    </Def>
    )
    
}



module.exports = home