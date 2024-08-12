import PropTypes from "prop-types"

function FeatureList({features}){
    return (
        <div className="flex flex-col space-y-2">
              {features.map((features, index) =>(
                <div key={index} className="flex justify-center">
                    <span className="text-sm ml-1">{features}</span>
                    </div>
              ))}
              </div>
            
    )
}

FeatureList.propTypes = {
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  };


export default FeatureList;