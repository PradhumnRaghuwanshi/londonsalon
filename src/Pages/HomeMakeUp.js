import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Salon() {
  return (
    <div>
      <Header/>
      <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
        <div style={{width:'75%', backgroundColor:'white', margin:25, display:'flex', flexDirection:'row'}}>
            <div style={{width:'70%', display:'flex', flexDirection:'column'}}>
            
            <div style={{height:'12vh', padding:15}}>
            <label style={{ fontSize: 30, fontWeight: 200 }}>
              At Home MakeUp 
            </label>
            <div
              style={{ display: "flex", alignItems: "flex-start", width: "8%" }}
            >
              <hr
                style={{
                  width: "100%",
                  height: 4,
                  backgroundColor: "#C03B5E",
                  border: "none",
                  borderRadius: 5,
                }}
              ></hr>
            </div>
          </div>


          <div style={{display:'flex', flexDirection:'row', marginLeft:10}}>
            <div style={{backgroundColor:'#A92A55', height:'20vh', width:'22%', borderRadius:10, border:'1px solid #A92A55'}}>
                <img style={{height:'20vh', width:'100%', borderRadius:10}} src='https://cdn.yesmadam.com/images/live/category/adv-makeup-category-icon-15-10-22.jpg'></img>
            </div>
           

          </div>
           <br/>
          <hr style={{width:'90%', backgroundColor:'lightgrey',color:'lightgrey'}}></hr>

          <div style={{display:'flex',flexDirection:'column', height:'60vh', justifyContent:'space-evenly', padding:15}}>
            <label style={{fontSize:25}}>Select your services</label>
            <div style={{display:'flex', flexWrap:'wrap', width:'100%', height:'40vh'}}>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/1609247565776.jpg'></img>
                    <label>MakeUp Packages</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/1606815564897.jpg'></img>
                    <label>Part MakeUpo</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/1606815568120.jpg'></img>
                    <label>Engagement MakeUp</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/1606815570914.jpg'></img>
                    <label>Bridal MakeUp</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Sub-Category-Hair-Do-Saree-Draping-8-8-22.jpg'></img>
                    <label>Hair Do/ Saree Draping</label>
                </div>
                
                
            </div>
          </div>
            </div>
            <div style={{width:'29%', display:'flex', flexDirection:'column'}}>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/adv-makeup-1.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/cat_footer_1627114009182.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/cat_footer_1614338893487.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/cat_footer_1614338893487.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/cat_footer_1614338578583.jpg'></img>
            </div>

        </div>
        
       

      </div>
      <br/>
      <Footer/>
    </div>
  )
}

export default Salon
