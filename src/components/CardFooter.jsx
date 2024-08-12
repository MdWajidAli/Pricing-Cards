import FeatureList from "./FeatureList";
import PropTypes from "prop-types"

function CardFooter({features}){
    return (
        <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <FeatureList features={features}/>
        </div>
    )
}

CardFooter.propTypes = {
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  

export default CardFooter;