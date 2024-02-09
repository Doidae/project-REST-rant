const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='container'>
                    <div className='row'> 
                        <div className='col'>
                            <img src={data.place.pic} alt={data.place.name} />
                            <h3>
                                Located in {data.place.city}, {data.place.state}
                            </h3>
                        </div>
                        <div className='col'>
                            <h1> { data.place.name } </h1>
                            <h2>Rating</h2>
                            <p id='showText'>Not Rated</p>
                            <div>
                                <h2>Description</h2>
                                <h3>
                                    {data.place.showEstablished()}
                                </h3>
                                <h4>
                                    Serving {data.place.cuisines}   
                                </h4> 
                                {/* <p id='showText'>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p> */}
                            </div>
                        </div>
                        <div className='row'>
                            <h2>Comments</h2>
                            {comments}
                            <h2>Got Your Own Rant or Rave?</h2>
                            <form action={`/places/${data.place.id}/comment`} method="POST">
                                <div className="row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="content">Content</label>
                                        <textarea id="content" name="content" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <label for="stars">Star Rating:</label>
                                    <input type="number" id='stars' name='stars' step="0.5" min="0" max="5"/>
                                </div>
                                <div>
                                    <button type='submit'>Add Comment</button>
                                </div>
                            </form>
                        </div>
                        <div className='container'>
                            <div>
                                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                                    Edit
                                </a>
                            </div>
                            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                                <button type='submit' className='btn btn-danger'> <i class="fa fa-trash"></i>
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show


//fix comments