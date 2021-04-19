import React, {useState} from 'react'
import weapons from '../../data/weapons'
import monsters from '../../data/monsters'
import _ from 'lodash'
import cat from '../../images/cat.png'

const randomWeapon = () => {
  return weapons[_.random(0, 13)]
}

export default function Randoms() {
  const [random, setRandom] = useState(null)
  return <div style={{maxWidth: 500, margin: 'auto', padding: 30}}>
    <div>
      <img src={cat}/>
    </div>
    <button className='random-button' style={{marginTop: 30}} onClick={() => {
      setRandom(Math.random())
    }}>重新随机
    </button>
    <h3>随机武器</h3>
    {
      _.map(Array(4).fill(0), (value, index) => {
        return <div key={index}>{randomWeapon()}</div>
      })
    }
    <h3 style={{marginTop: 30}}>随机怪物</h3>
    <div>{monsters[_.random(0, 21)]}</div>
  </div>
}
