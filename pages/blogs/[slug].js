import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const blog = () => {
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        console.log(router);
    }, [])

    return (
        <>
            {slug}
        </>
    )
}

export default blog

