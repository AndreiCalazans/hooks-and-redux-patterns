import { subscriptions, accounts } from "./mockData";

function resolveOnDelay(res, delay) {
  const timeout = setTimeout(() => {
    res();
    clearTimeout(timeout);
  }, delay);
}

export async function getSubscriptions() {
  return new Promise(resolve => {
    resolveOnDelay(() => resolve(subscriptions.subscriptions), 1500);
  });
}

export async function getAccounts(subscriptionId: string, dude: number) {
  return new Promise(resolve => {
    resolveOnDelay(
      () =>
        resolve(
          accounts.accounts.find(
            account => account.subscription_id === subscriptionId
          )
        ),
      1500
    );
  });
}

new Array().find;
export async function getUser(userId: string) {
  return new Promise(resolve => {
    resolveOnDelay(
      () => resolve(accounts.accounts.find(account => account.id === userId)),
      1500
    );
  });
}
