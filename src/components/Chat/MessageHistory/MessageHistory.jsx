import Message from './Message/Message'
import Response from './Response/Response'
import Typing from './Typing/Typing'

const MessageHistory = ({ list }) => {

  let massageSet = list.map(el => {
    let message = {
      name: el.from.name,
      time: el.time,
      text: el.text
    }
    switch (el.type) {
      case 'message':
        return <Message key={el.id} message={message} />;
      case 'response':
        return <Response key={el.id} message={message} />;
      case 'typing':
        return <Typing key={el.id} message={message} />;
      default:
        return <div>Ещё пока нет истории</div>
    }
  })

  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {massageSet}
      </ul>
    </>
  )
}

export default MessageHistory