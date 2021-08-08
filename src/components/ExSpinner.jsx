
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0px auto;
  border-color: #fff;
  width: 30px;
  height: 30px;
`;

function ExSpinner({ loading }) {
  return (
    <div className="mt-2">
      <ClipLoader loading={loading} css={override} size={150} />
    </div>
  );
}

export default ExSpinner;
