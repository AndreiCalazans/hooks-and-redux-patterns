import * as React from "react";

const styles = {
  container: {
    margin: 20
  }
};

export const AssetSelect: React.FC<{
  onPress: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onPress }) => {
  return (
    <button style={styles.container} onClick={onPress}>
      {children}
    </button>
  );
};
