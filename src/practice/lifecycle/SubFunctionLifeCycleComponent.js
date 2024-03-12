import React, { useEffect } from 'react'

export default function SubFunctionLifeCycleComponent() {

    useEffect(() => {
        return () => console.log('Component hidden');
    });

    return (
        <div>
            Sub Functional Component
        </div>
    )
}
