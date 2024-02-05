import loadingGif from "../../assets/images/loading2.gif";
import { ButtonPrimary } from "./StyledPrimaryButton";

const PrimaryButton = ({ type = "button", onClick, text, loading }) => {
  return (
    <>
      <ButtonPrimary type={type} onClick={onClick} disabled={loading}>
        {loading ? (
          <img
            className="loadingIcon"
            src={loadingGif}
            alt="Loading"
            width="20"
            height="20"
          />
        ) : (
          text
        )}
      </ButtonPrimary>
    </>
  );
};

export default PrimaryButton;
