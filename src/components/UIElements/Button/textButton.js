import RightArrow from "../Icons/rightArrow";
import "./txtBtnStyles.scss";

const TextButton = ({ text, type, isDisabled }) => {
  return (
    <button disabled={isDisabled} type={type} className="btn-cnt">
      {text}
      {type !== "submit" && <RightArrow />}
    </button>
  );
};

export default TextButton;
