import { imgUrl } from "../utils/constants"


const ActorCard = ({actor}) => {
    const url = !actor.profile_path
    ? '/default-ppp.jpg'
    : imgUrl + actor.profile_path;
  return (
    <div className="w-[160px] line-clamp-1">
        <img className="h-[175px] w-[120px] rounded-md mb-3" src={url} alt={actor.name} />
        <h2>{actor.original_name}</h2>
        <h2 className="line-clamp-1">{actor.character}</h2>
    </div>
  )
}

export default ActorCard