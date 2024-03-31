import { useContext } from "react";
import { AuthContexts } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const {signInUser} = useContext(AuthContexts)
    const navigate = useNavigate()
    const handelLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
        .then((result)=>{
            console.log(result)
            e.target.reset();
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className="container mx-auto px-[20px]">
      <div className="h-[90vh] flex items-center">
        <div className="bg-[#217C91] p-[40px] w-[50%] mx-auto rounded-lg">
          <h2 className="text-center text-3xl font-[700] text-white">Login</h2>
          <form onSubmit={handelLogin}>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Write Your Email</span>
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">Write Your Password</span>
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="mt-[20px]">
              <button type="submit" className="btn w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
