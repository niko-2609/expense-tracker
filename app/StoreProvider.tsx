// providers/ReduxProvider.tsx
'use client';


import { persistor, store } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



const ReduxProvider = ({ children }:{children: React.ReactNode}) => {
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <div className="flex min-h-screen w-full flex-col">
          {children}
        </div>
        </PersistGate>
        </Provider>
    )
};

export default ReduxProvider;