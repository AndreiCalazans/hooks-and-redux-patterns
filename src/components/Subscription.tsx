import * as React from "react";

const styles = {
  container: {
    padding: 20
  }
};

export const Subscription: React.FC<{ subscriptionId: string }> = ({
  subscriptionId
}) => {
  return (
    <div style={styles.container}>
      <h3>Email</h3>
      <h6>Owner</h6>
      <h6>Type</h6>
      <h6>{subscriptionId}</h6>
    </div>
  );
};
