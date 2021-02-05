import React, { Suspense } from 'react';

import Spinner from './Spinner';

export default function FallbackLoader({children}) {
    return (
        <Suspense fallback={<Spinner />}>
            {children}
        </Suspense>
    )
}
