import Link from "next/link"
export default function Nav(){
    return(
    <>
  
  <div className="navbar">
  <div className="icon">
      <h2 className="logo">UTC</h2>
    </div>
    <div className="menu">
      <ul>
      <li>< a href="/">Home</a></li>
<li>< a href="/AboutUs">AboutUs</a ></li>
 <li> <a  href="Courses">Courses</a></li>
 <li> < a  href="/Login"className="contenthdr"> Login!</a ></li>

      </ul>
    </div>
    <div className="search">
      <input className="srch" type="search" name="" placeholder="Type To Text"></input>
      <a href="/Courses"><button className="btn">Search </button></a>
    </div>
    </div>

      
    


       </>
    )
}

