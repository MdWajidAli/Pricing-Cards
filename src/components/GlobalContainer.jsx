import PropTypes from "prop-types"

function GlobalContainer({children}){
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
            {children}
        </div>
      </div>
    )
}

GlobalContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default GlobalContainer;