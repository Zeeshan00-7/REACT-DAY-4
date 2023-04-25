import logo from './logo.svg';
import './App.css';
import Profile from './ProfileCard'
function App() {
  const src1= "https://media.licdn.com/dms/image/D4D03AQGWEJWsuwCKmQ/profile-displayphoto-shrink_800_800/0/1677145578729?e=1687996800&v=beta&t=MH_vxRRY_Mo5JaGUV2NFgQ7Sk2FhC3ZP-6Hq3kxR2d8";
  const description1= "I am currently the Junior UI Designer at Design Company, where I develop innovative user interface experiences that meet our clients’ needs and objectives. I have experience in generating process flows and sitemaps, and I have created everything from widgets and buttons to illustrations and animations. The latest app I helped design received the 2020 Design Award for best user interface.";

  const src2 ="https://media.licdn.com/dms/image/C4D03AQFZnyViL_CerQ/profile-displayphoto-shrink_800_800/0/1652244719617?e=1687996800&v=beta&t=zr3qBWxHsxmKaG41j57MK0ymxRU-g-QWP9KdeQnZtz8";
  const description2="UI/UX Developer , Frontend developer , Graphic designer at UnifyCloud Pvt Ltd";
  
  const src3="https://media.licdn.com/dms/image/D4D03AQE2q-gSXFbPqg/profile-displayphoto-shrink_800_800/0/1670390499195?e=1687996800&v=beta&t=VY1Q34cGV8ewoKZIXgDSOHjIMUH_uQhLmJWnR-Wle20";
  const description3="Experienced Learning Specialist with a demonstrated history of working in the design industry. Skilled in E-Learning, User Experience (UX), User Interface Design. Strong arts and design professional Diploma from NIELIT";

  return (
   
    <div className="App" style={{backgroundColor:'pink'}}>
      <Profile image={src1} designation="UI/UX Designer" name="Ashutosh Mishra" description={description1}/><br></br>
      <Profile image={src2} designation="UI/UX Designer" name="Sandeep Singh" description={description2}/><br></br>
      <Profile image={src3} designation="UI/UX Designer" name="Abdul Ahmad" description={description3}/><br></br>
     
    </div>
  );
}

export default App;
