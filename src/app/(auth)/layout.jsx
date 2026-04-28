import { montserrat } from '@/app/layout'
import Navbar from '@/components/shared/Navbar'

const AuthLayout = ({children}) => {
  return (
    <div className={`${montserrat.className}`}>
        <Navbar/>
        {children}
    </div>
  )
}

export default AuthLayout