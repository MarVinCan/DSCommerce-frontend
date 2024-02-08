import { createContext } from "react";

export type ContextCartCountType = {
    contextCartCout: number;
    setContextCartCount: (contextCartCout: number) => void;
}

export const ContextCartCout = createContext<ContextCartCountType>({
    contextCartCout: 0,
    setContextCartCount: () => {}
})
