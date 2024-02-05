import loadingGif from "../../assets/images/loading2.gif";
import { ButtonPrimary } from "./StyledPrimaryButton";

const PrimaryButton2 = ({ type = "button", onClick, text, loading }) => {
  return (
    <>
      <ButtonPrimary type={type} onClick={onClick} disabled={loading}>
          <img
            className="loadingIcon"
            src={loadingGif}
            alt="Loading"
            width="20"
            height="20"
          />
          {text}
      </ButtonPrimary>
    </>
  );
};

export default PrimaryButton2;
