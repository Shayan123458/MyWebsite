import Nav from "../../../component/Header"
export default function AboutUs (){
    return (
        <div className="main">
         <Nav/>    
    
      <div className="ContactUsmain">
      <h1 className="contactush1">Login Here</h1>      
      <h2 className="Details" >E-mail Or User Name:</h2>
      <h3><input className="Box" type="E-mail" name=""placeholder="Enter Your E-mail"></input></h3>
      <h2 className="Details" >Password:</h2>
      <h3><input className="Box" type="Password" name=""placeholder="Enter Your Password"></input></h3>
      <a href="/Courses"><button className="btn">Login</button></a>
    </div>
    </div>


  )}