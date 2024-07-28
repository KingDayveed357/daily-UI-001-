import facebook from "./assets/img/facebook-icon.png"
import google from "./assets/img/google-icon.png"
import { Link} from 'react-router-dom';

const Signup = () => {
  return (
    <>
    <section className="max-w-screen-md mx-auto px-5 py-20">
        <p className="text-white text-2xl ">Sign up</p>
      <form action="" method="get" className="flex flex-col gap-5 py-10">
     <div className="pb-2 flex flex-col gap-2 text-white">
     <label className="text-lg">Username</label>
     <input type="" className="border-none outline-0 bg-purple-900 w-full p-2 rounded-md "/>
     </div>
     <div className="pb-2 flex flex-col gap-2 text-white">
     <label className="text-lg">Email</label>
     <input type="" className="outline-0 bg-purple-900 w-full p-2 rounded-md "/>
     </div>
     <div className="pb-2 flex flex-col gap-2 text-white">
     <label className="text-lg">Password</label>
     <input type="" className="outline-0 bg-purple-900 w-full p-2 rounded-md "/>
     </div>
     <p className="text-white text-center">or Sign up with</p>
     <button className="bg-purple-950 flex justify-center gap-3 my-auto p-4 rounded-md text-white"><img src={facebook} className="w-5 h-5 my-auto rounded-sm" alt="" /> Sign up with facebook</button>
     <button className="bg-purple-950 flex justify-center gap-3 my-auto  p-4 rounded-md text-white"><img src={google} className="w-5 h-5 my-auto  rounded-sm" alt="" />Sign up with google</button>
      <Link to="/login" className="bg-purple-600 text-lg text-center text-white p-4 rounded-3xl">Sign up</Link>
      </form>
      
    </section>
    </>
  );
};

export default Signup;
