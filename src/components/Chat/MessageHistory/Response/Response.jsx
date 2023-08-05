
const Response = ({ message }) => {
  return (
    <>
      <li>
        <div className="message-data align-left">
          <i className="fa fa-circle online"></i>
          <span className="message-data-name">{ message.name }</span>&nbsp;
          <span className="message-data-time">{ message.time }</span>
        </div>
        <div className="message my-message">
          { message.text }
        </div>
      </li>
    </>
  )
}

export default Response