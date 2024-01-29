const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/coolCat.jpg" alt="Cat with glasses" style={{ width: '400px', height: '300px' }}/>
                    <div>
                        Photo by <a href="https://unsplash.com/@raouldroog?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Raoul Droog</a> on <a href="https://unsplash.com/photos/russian-blue-cat-wearing-yellow-sunglasses-yMSecCHsIBc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404