import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1);
            // router.go(1);
            router.push('/');
        }, 3000)
    }, []);
    return ( 
        <div className="bg-gray-200 py-10 text-center">
            Ooops, the page is not available. 
            <Link href="/" className="bg-sky-600 px-4 py-2 rounded">Go Back Home</Link>
        </div>
     );
}
 
export default NotFound;