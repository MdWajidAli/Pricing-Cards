import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import PropTypes from "prop-types"


function PricingCards({title,storage,price,bgColor,features}){
    return (
        <div className={`${bgColor} rounded-xl text-white`}>
            <CardHeader title={title} storage={storage} price={price}/>
            <div className="border-t border-slate-700"></div>
            <CardFooter features={features}/>
        </div>
    )
}

PricingCards.propTypes = {
    title: PropTypes.string.isRequired,
    storage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default PricingCards;