import { subscriptions, accounts } from "./mockData";

function resolveOnDelay(res, delay) {
  const timeout = setTimeout(() => {
    res();
    clearTimeout(timeout);
  }, delay);
}

export async function getSubscriptions() {
  return new Promise(resolve => {
    resolveOnDelay(() => resolve(subscriptions), 1500);
  });
}

export async function getAccounts(subscriptionId: string) {
  return new Promise(resolve => {
    resolveOnDelay(
      () =>
        resolve(
          accounts.find(account => account.subscriptionId === subscriptionId)
        ),
      1500
    );
  });
}

export async function getUser(userId: string) {
  return new Promise(resolve => {
    resolveOnDelay(
      () => resolve(accounts.find(account => account.id === userId)),
      1500
    );
  });
}
