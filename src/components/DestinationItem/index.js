// Write your code here
import './index.css'

const DestinationList = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="each-list">
      <div>
        <img className="img-edit" src={imgUrl} alt={name} />
      </div>
      <p>{name}</p>
    </li>
  )
}
export default DestinationList
