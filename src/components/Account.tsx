import * as React from "react";

export const Account: React.FC<{ accountId: string }> = ({ accountId }) => {
  return (
    <div>
      <h3>Name</h3>
      <h6>Email</h6>
      <h6>Is owner?</h6>
      <h6>Is logged in</h6>
    </div>
  );
};
