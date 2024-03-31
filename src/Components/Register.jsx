import { useContext } from "react";
import { AuthContexts } from "../AuthContext/AuthContext";

const Register = () => {
    const {createUser} = useContext(AuthContexts);
    const handelRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className="container mx-auto px-[20px]">
      <div className="h-[90vh] flex items-center">
        <div className="bg-[#217C91] p-[40px] w-[50%] mx-auto rounded-lg">
          <h2 className="text-center text-3xl font-[700] text-white">Register</h2>
          <form onSubmit={handelRegister}>
          <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">
                    Write Your Name
                  </span>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text text-white">
                    Write Your Email
                  </span>
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
                  <span className="label-text text-white">
                    Write Your Password
                  </span>
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
              <button type="submit" className="btn w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
