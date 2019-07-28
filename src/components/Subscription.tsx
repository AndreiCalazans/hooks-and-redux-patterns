import * as React from "react";

export const Subscription: React.FC<{ subscriptionId: string }> = ({
  subscriptionId
}) => {
  return (
    <div>
      <h3>Email</h3>
      <h6>Owner</h6>
      <h6>Type</h6>
    </div>
  );
};
