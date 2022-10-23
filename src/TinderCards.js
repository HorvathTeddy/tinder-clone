import { SwipeableDrawer } from '@material-ui/core'
import { SubscriptionsOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

const TinderCards = () => {

    const [people, setpeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1665592117',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person) => (
                <TinderCard 
                    className='swipe'
                    key={CharacterData.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div 
                        style={{ backgroundImage: `url(${person.url})`}}
                        className='card'
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
      </div>
    </div>
  )
}

export default TinderCards
