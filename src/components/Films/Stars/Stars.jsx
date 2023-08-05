import Star from './Star/Star'
import s from './Stars.module.css'

const Stars = ({ count }) => {
  let array = []

  // for (let i = 0; i < count; i++) {
  //   array.push(i)
  // }

  // let setStars = array.map((itm, ind) => <Star key={ ind } /> )
  
  let setStars = ( count ) => {
    if (count === 0) {
      return  array.push(<div className={ s.text }>Рейтинг никакущий</div>)
    } else if (count < 1) {
      return  array.push(<div className={ s.text }>Слишком низкий рейтинг</div>)
    } else if (count.length > 1 || count > 5 ) {
      return  array.push(<div className={ s.text }>Максимальный рейтинг 5 звёзд</div>)
    } else {
      for (let i = 0; i < count; i++) {
        array.push( <Star />)
      }
    }
  }
  
  setStars(count)
  // console.log(setStars)

  // let ttt = array.map(el => el.type)
    
  return (
    // <Star />
    <div className={ s.stars }>
      { array }
    </div>
    // 
  )
}

export default Stars
  