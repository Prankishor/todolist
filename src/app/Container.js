'use client'
import Providers from './StoreProvider';
export default function Container({ children }) {
    return (
        <>
            <Providers>
                {children}
            </Providers>
        </>
    )
}