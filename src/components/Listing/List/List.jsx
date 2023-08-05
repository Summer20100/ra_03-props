import s from './List.module.css'
import { Route, Routes } from 'react-router-dom'

const List = ({ state }) => {

  const currency = (currency, value) => {
    if (currency === 'USD') {
      return '\uFF04'+ value
    } else if (currency === 'EUR') {
      return value + '\u20AC'
    } else {
      return value + ' GBP'
    }
  }

  const restOfquantity = (value) => {
    if (value <= 10 ) {
      return 'item-quantity level-low'
    } else if (value <= 20 ) {
      return 'item-quantity level-medium'
    } else if (value > 20 ) {
      return 'item-quantity level-high'
    }
  }
  
  let listSet = state.map((listItm) =>
      <div className="item" key={listItm.listing_id}>
        <div className="item-image">
          <a href={listItm.url}>
            <img src={ listItm.MainImage.url_570xN } />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{ listItm.title.length >= 50 ? listItm.title.substr(0, 50) + '...' : listItm.title }</p>
          <p className="item-price">{ currency(listItm.currency_code, listItm.price) }</p>
          <p className={ restOfquantity(listItm.quantity) }>{ listItm.quantity + ' left' }</p>
        </div>
      </div>
  )

  return (
    <div className="item-list">
      {listSet}
    </div>
  )
}

export default List 