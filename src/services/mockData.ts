function makeSub(name: string, type: "multiple" | "solo") {
  return {
    id: `${name}Id`,
    email: `${name}Owner@me.co`,
    owner_id: `${name}Owner`,
    type
  };
}

export const subscriptions = {
  subscriptions: [
    makeSub("subA", "multiple"),
    makeSub("subB", "multiple"),
    makeSub("subC", "solo"),
    makeSub("subD", "solo")
  ]
};

function makeAccount(
  username: string,
  subscriptionName: string,
  isOwner = false
) {
  return {
    id: isOwner
      ? `${subscriptionName}Owner`
      : `${subscriptionName}_account_${username.replace(" ", "_")}`,
    name: username,
    email: `${username.replace(" ", "_")}@me.co`,
    subscription_id: `${subscriptionName}Id`
  };
}

export const accounts = {
  accounts: [
    makeAccount("Tupac Shakur", "subA"),
    makeAccount("John Doe", "subA"),
    makeAccount("Dark Vader", "subA"),
    makeAccount("Monolisa Guevara", "subB"),
    makeAccount("Soter Lo", "subB"),
    makeAccount("Hans Solo", "subC"),
    makeAccount("Jeff Bayer", "subD")
  ]
};

// TYPES
export type Subscription = ReturnType<typeof makeSub>;
export type Account = ReturnType<typeof makeAccount>;
