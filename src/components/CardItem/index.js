// Write your code here.
import './index.css'

const Container = props => {
  const {cardDetails, key} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <l1 Key={key} className={`card ${className}`}>
      <h1 className="heading2">{title}</h1>
      <p className="para2">{description}</p>
      <div className="imgContainer">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </l1>
  )
}

export default Container
