import * as React from "react";

export const AssetSelect: React.FC<{
  onPress: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onPress }) => {
  return <button onClick={onPress}>{children}</button>;
};
