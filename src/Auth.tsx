import { Link} from 'react-router-dom';
import logo from './assets/img/logo.png'


export default function Auth() {
    return(
        <>
    
    <div className="min-h-screen  flex flex-col justify-center text-center   items-center">
            <img src={logo} alt="" width={200} height={400} />
        <div className="mb-20">
            {/* Add any additional content here, like a tagline or slogan */}
        
        </div>
   <div className=" flex flex-col gap-4 w-80 justify-end text-white ">
    <p className="text-lg ">  Empowering businesses with innovative technology solutions.</p>
   <Link to="/signup" className="p-2   text-lg rounded-full bg-purple-600">Get Started</Link>
   </div>
   </div>
        </>
    )
}