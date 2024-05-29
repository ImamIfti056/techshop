import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider"
import { Helmet } from "react-helmet-async"

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {createUser} = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(res => {
      const loggedUser = res.user;
      console.log('logged user',loggedUser)
    })

  }

  return (
    <>
    <Helmet>
        <title>Sign Up | Techshop</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Sign UP!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered" />
              {errors.name && <span className="text-red-400">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email"{...register("email", { required: true })} className="input input-bordered" />
              {errors.email && <span className="text-red-400">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6 })} className="input input-bordered" />
              {errors.password?.type === "minLength" 
              && (<span className="text-red-400">password should be at least 6 characters long</span>)}
              {errors.password?.type === "required" 
              && (<span className="text-red-400">password is required</span>)}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp