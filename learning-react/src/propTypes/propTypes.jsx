import PropTypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string,
  // to specify the prop is required
  // name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: "Zach",
};

export default RenderName;
