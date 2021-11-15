//2b. Import

import Exercise from "./exercise/Exercise";

//3a-3d

function App(){
  return (
    <div>
      {/* 2c */}
      <Exercise />
      {/* 3a */}
      <Exercise good="Awesome" bad="Terrible" />
    </div>);
}

export default App;