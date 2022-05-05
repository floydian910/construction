import React from 'react'
import Header from '../../components/Header/Header'
import "./Services.css"
import ConstructionIcon from '@mui/icons-material/Construction';
import FoundationIcon from '@mui/icons-material/Foundation';
import PeopleIcon from '@mui/icons-material/People';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import {Link} from "react-router-dom"

const Services = ({language, setLanguage}) => {
  return (
    <div className="services_wrapper"><Header language={language} setLanguage={setLanguage} active="services"/>
        <section className="services">
           
            <div className="services_grid">
                <img src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1650102057/%E1%83%A1%E1%83%94%E1%83%A0%E1%83%95%E1%83%98%E1%83%A1%E1%83%94%E1%83%91%E1%83%98_tv3ddr.png"></img>
                <div className="services_content">
                <h2>{language ? "Component Construction" : "კომპონენტ ქონსთრაქშენი"}</h2>

                <h3>ჩვენი სერვისები</h3>
                <div className="white_divs">
 <Link className="white_div" to="/services"><FoundationIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Architecture" : "საპროექტო მომსახურება"}</h4></Link >
     <Link className="white_div" to="/services"><ConstructionIcon style={{color: "orange", fontSize: "54px"}}/><h4>{language ? "Construction" : "კარკასული მშენებლობა"}</h4></Link >
     <Link className="white_div" to="/services"><CarpenterIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Refit, repair" :  "ფასადის მოპირკეთება"}</h4></Link>
     <Link className="white_div" to="/services"><PeopleIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Consulting" : "თბო-ხმის იზოლაცია"}</h4></Link >
     <Link className="white_div" to="/services"><PeopleIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Consulting" : "მოჭიმვის მოწყობა"}</h4></Link >
     <Link className="white_div" to="/services"><PeopleIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Consulting" : "ჰიდროიზოლაციის მოწყობა"}</h4></Link >
     <Link className="white_div" to="/services"><PeopleIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Consulting" : "სარემონტო სამუშაოები"}</h4></Link >



 </div>
                   
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services