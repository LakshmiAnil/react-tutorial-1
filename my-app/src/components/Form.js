import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSub = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSub)}>
      <div className="square">
        <div className="headr">
          <h4 className="head">Login in to your account</h4>
          <img
            className="imge"
            src="https://img.freepik.com/free-vector/locker_53876-25496.jpg?w=1380&t=st=1688750827~exp=1688751427~hmac=628f3a818d8914ce1831dda7f6c0c6c673326990a42bf5e8c2c449e5bf6c38ae"
            alt="lock"
          ></img>
        </div>
        <div>
          <label className="mail">Email</label>
          <br></br>
          <input
            type="text"
            className="box1"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
          />
          <br></br>
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label className="phnm">Password</label>
          <br></br>
          <input
            type="password"
            className="box1"
            placeholder="Your password"
            {...register("password", { required: "password is required" })}
          />
          <br></br>
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>
        <div>
          <button className="button">Login</button>
          <br></br>
        </div>
      </div>
    </form>
  );
}

export default Form;
