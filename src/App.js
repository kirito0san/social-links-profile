function App() {
  return (
    <div className="App font-Inter capitalize text-white  min-h-screen text-center center">
      <div className="bg-gray-800 p-5 min-w-[300px]  rounded-lg">
        <div className="center gap-5 ">
          <img className="w-[100px] h-[100px] object-cover rounded-full " src="./assets/images/th (Custom).jfif" alt="" />
          <h1 className="text-2xl font-semibold"> Ahmed syed</h1>
          <p className="text-green  font-semibold"> egypt , Beni Suef</p>
          <p className="text-xs">  "Front-end developer, React.js || tailwindCss ."</p>
        </div>
        <div className="flex mt-5 flex-col font-semibold gap-2">
          <a href="https://github.com/kirito0san"> GitHub</a>
          <a href="https://www.frontendmentor.io/profile/kirito0san"> Frontend Mentor</a>
          <a href="https://www.linkedin.com/in/ahmed-fathy-05114a257/"> LinkedIn</a>
          <a href="https://x.com/home"> Twitter</a>
          <a href="https://www.instagram.com/"> Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;
