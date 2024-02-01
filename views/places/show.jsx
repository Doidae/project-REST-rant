const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className='container'>
                    <div className='row'> 
                        <div className='col'>
                            <img src={data.place.pic} alt={data.place.name} />
                        </div>
                        <div className='col'>
                            <h1> { data.place.name } </h1>
                            <h2>Rating</h2>
                            <p id='showText'>Not Rated</p>
                            <div>
                                <h2>Description</h2>
                                <p id='showText'>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <h2>Comments</h2>
                            <p id='showText'>No comments yet!</p>
                        </div>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show