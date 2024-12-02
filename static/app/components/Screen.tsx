import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

interface ParentComponentProps {
    children: React.ReactNode;
}
export const ScreenTemplate: React.FC<ParentComponentProps> = ({ children }) => {
    return (
        <SafeAreaProvider>
            <PaperProvider>{children}</PaperProvider>
        </SafeAreaProvider>
    )
}
