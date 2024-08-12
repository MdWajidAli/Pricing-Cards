import PropTypes from "prop-types"

function CardHeader({title, storage, price}){
    return (
        <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">{title}</div>
            <h2 className="mt-10 font-serif text-5xl text-center">{storage}</h2>
            <h3 className="mt-2 text-center">{price}</h3>
            <div className="flex justify-center">
              <a
                href="#"
                className="inine-block px-10 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
              >
                Purchase
              </a>
            </div>
          </div>
    )
}

CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    storage: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

export default CardHeader;