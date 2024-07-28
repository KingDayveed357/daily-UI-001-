import facebook from "./assets/img/facebook-icon.png"
import google from "./assets/img/google-icon.png"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <section className="max-w-screen-md mx-auto px-5 py-20">
        <p className="text-white text-2xl ">Log in</p>
      <form action="" method="get" className="flex flex-col gap-5 py-10">
    
     <div className="pb-2 flex flex-col gap-2 text-white">
     <label className="text-lg">Email</label>
     <input type="email" required className="outline-0 bg-purple-900 w-full px-5 p-2 rounded-md "/>
     </div>
     <div className="pb-2 flex flex-col gap-2 text-white">
     <label className="text-lg">Password</label>
     <input type="password" required className="outline-0 bg-purple-900 w-full px-5 p-2 rounded-md "/>
     </div>
     <button className="bg-purple-500  text-center text-white text-lg p-4 rounded-3xl">Log in</button>
     <p className="text-white  text-center">or Login with</p>
     <button className="bg-purple-950 flex justify-center gap-3 my-auto p-4 rounded-md text-white"><img src={facebook} className="w-5 h-5 my-auto rounded-sm" alt="" /> Sign up with facebook</button>
     <button className="bg-purple-950 flex justify-center gap-3 my-auto  p-4 rounded-md text-white"><img src={google} className="w-5 h-5  rounded-sm" alt="" />Sign up with google</button>
     <p className="text-white text-center">Don't have an account</p>
      <Link to="/signup" className=" text-center text-white bg-purple-600 text-lg p-4 rounded-3xl">Sign up</Link>
      </form>
      
    </section>
    </>
  );
};

export default Login;
