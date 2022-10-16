import { useRouter } from 'next/router';
import { useEffect } from 'react';


const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])

  
  return (
    <div>
      Nic tady neni, asi chyba
    </div>
  )
}

export default NotFound;