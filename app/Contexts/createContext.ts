import React from 'react';

export default function createCtx<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>({} as A);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}
