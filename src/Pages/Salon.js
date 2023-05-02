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
              Salon at Home 
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


          <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
            <div style={{backgroundColor:'#A92A55', height:'20vh', width:'22%', borderRadius:10, border:'1px solid #A92A55'}}>
                <img style={{height:'20vh', width:'100%', borderRadius:10}} src='https://cdn.yesmadam.com/images/live/category/beauty-category-icon-15-10-22.jpg'></img>
            </div>
            <div style={{backgroundColor:'#A92A55', height:'20vh', width:'22%', borderRadius:10, border:'1px solid #A92A55'}}>
                <img style={{height:'20vh', width:'100%', borderRadius:10}} src='https://cdn.yesmadam.com/images/live/category/beauty-category-icon-15-10-22.jpg'></img>
            </div>
            <div style={{backgroundColor:'#A92A55', height:'20vh', width:'22%', borderRadius:10, border:'1px solid #A92A55'}}>
                <img style={{height:'20vh', width:'100%', borderRadius:10}} src='https://cdn.yesmadam.com/images/live/category/beauty-category-icon-15-10-22.jpg'></img>
            </div>
            <div style={{backgroundColor:'#A92A55', height:'20vh', width:'22%', borderRadius:10, border:'1px solid #A92A55'}}>
                <img style={{height:'20vh', width:'100%', borderRadius:10}} src='https://cdn.yesmadam.com/images/live/category/beauty-category-icon-15-10-22.jpg'></img>
            </div>

          </div>
           <br/>
          <hr style={{width:'90%', backgroundColor:'lightgrey',color:'lightgrey'}}></hr>

          <div style={{display:'flex',flexDirection:'column', height:'60vh', justifyContent:'space-evenly', padding:15}}>
            <label style={{fontSize:25}}>Select your services</label>
            <div style={{display:'flex', flexWrap:'wrap', width:'100%', height:'40vh'}}>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Waxing-subcategory-1-12-22.jpg'></img>
                    <label>Waxing</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Facial-subcategory-1-12-22.jpg'></img>
                    <label>Facial</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Mani-Pedi-subcategory-1-12-22.jpg'></img>
                    <label>Mani-pedi</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Cleanup-subcategory-1-12-22.jpg'></img>
                    <label>Clean-Up</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Detan-Bleach-subcategory-1-12-22.jpg'></img>
                    <label>De-Tan Pack</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Hair-Colour-subcategory-1-12-22.jpg'></img>
                    <label>Hair</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/body-polishing-subcategory-1-12-22.jpg'></img>
                    <label>Full Body Deal</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/threading-subcategory-1-12-22.jpg'></img>
                    <label>Threading</label>
                </div>
                <div style={{display:'flex',width:'20%', flexDirection:'column', justifyContent:'space-between', alignItems:'center', height:'18vh'}}>
                    <img style={{borderRadius:'50%', width:'75%'}} src='https://cdn.yesmadam.com/images/live/app/mainsubcategory/Under-Eye-Treatment-17-12-22.jpg'></img>
                    <label>EyeYouth Therapy</label>
                </div>
            </div>
          </div>
            </div>
            <div style={{width:'29%', display:'flex', flexDirection:'column'}}>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/main-Banner-head-to-toe-8-2-23.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/price-beauty-category-footer-banner-15-10-22.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/facial-guide-beauty-category-footer-banner-15-10-22.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/book-beauty-category-footer-banner-15-10-22.jpg'></img>
               <img src='https://cdn.yesmadam.com/images/live/app/banner/why-ym-beauty-category-footer-banner-15-10-22.jpg'></img>
            </div>

        </div>
        <div style={{backgroundColor:'white', width:'74%', padding:10, fontSize:20}}>Description
        </div>
        <br/>
        <div
        style={{
          backgroundColor: "white",
          width: "75%",
          height: "110vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          boxShadow:'0.5px 0.5px 5px black,-0.5px -0.5px 5px black'
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            height: "100vh",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Salon at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Makeup services at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Beauty services at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Pre Bridal Packages at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>
              Manicure and pedicure at home
            </label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Female Spa at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Facial service at home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Male massage at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>
              De-taning bleaching services at home
            </label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Male Grooming at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Waxing at home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
          <div
            style={{
              width: "95%",
              height: "5vh",
              border: "1px solid lightgrey",
              borderRadius: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
            }}
          >
            <label style={{ fontSize: 18 }}>Female Hair Services at Home</label>
            <i class="fa fa-angle-down " aria-hidden="true"></i>
          </div>
        </div>
      </div>

      </div>
      <br/>
      <Footer/>
    </div>
  )
}

export default Salon
