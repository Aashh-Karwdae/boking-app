import "./mailList.css"

export const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time , save money , get relaxed !!</h1>
        <span className="mailDesc">Sign up and we'll send the best details to you</span>
        <div className="mailInputItems">
        <input type="text" placeholder="Your Email"/>
        <button className="mailBtn">Subscribe</button>
        </div>
    </div>
  )
}
