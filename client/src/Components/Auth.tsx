function Auth() {
  return (
    <form className="absolute w-80 h-80 left-0 right-0 m-auto top-[40%] flex flex-col items-center justify-center bg-black gap-4">
      <label htmlFor="email" className="text-white">
        Email
      </label>
      <input type="email" name="email" id="email" className="bg-white" />
      <label htmlFor="password" className="text-white">
        Password
      </label>
      <input type="password" name="password" />
      <button className="bg-white">sign in</button>
    </form>
  );
}

export default Auth;
