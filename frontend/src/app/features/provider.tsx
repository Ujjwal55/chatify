"use client"
import store from "../store";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

export function ReduxProvider({children}: {children: React.ReactNode}) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistStore(store)}>
            {children}
            </PersistGate>
            </Provider>
    )
}