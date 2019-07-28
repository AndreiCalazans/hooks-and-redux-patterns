import * as React from "react";
import { Subscription as SubType, subscriptions } from "../services/mockData";
import { AssetSelect, Subscription } from "../components";

function renderSubscriptions(subscriptions: SubType[]) {
  return subscriptions.length === 0 ? (
    <h3>No Subscriptions available</h3>
  ) : (
    <div>
      {subscriptions.map(sub => (
        <AssetSelect key={sub.id} onPress={() => null}>
          <Subscription subscriptionId={sub.id} />
        </AssetSelect>
      ))}
    </div>
  );
}

export const SubscriptionSelect: React.FC = () => {
  const subs: SubType[] = subscriptions.subscriptions;
  return (
    <div>
      <h1>SubscriptionSelect</h1>
      {renderSubscriptions(subs)}
    </div>
  );
};
