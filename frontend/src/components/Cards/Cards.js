import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div>
     
    <div className='row'>
    <h2>Explore more about places and make your your trips memorable!!!</h2>
        <div className='child'>
            <h1>Coorg</h1>
            <img className='img' src="https://static.toiimg.com/thumb/104040262/coorg.jpg?width=1200&height=900"></img>
            <p>Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies.</p>
       <button className='explore'>explore</button>
        </div>
        <div className='child'>
            <h1>Kerala</h1>
            <img className='img' src="https://www.tourmyindia.com/states/kerala/image/kerala-tourism.webp"></img>
            <p>Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals.</p>
            <button className='explore'>explore</button>
        </div>
        <div className='child'>
            <h1>Kashmir</h1>
            <img className='img' src="https://www.khyberhotels.com/blog/wp-content/uploads/2023/10/winter-kashmir.jpg"></img>
            <p>Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies.</p>
            <button className='explore'>explore</button>
        </div>
    </div>
    </div>
  )
}

export default Cards