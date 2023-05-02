import React from 'react'

function Footer() {
  return (
    <div className='footer' style={{
        height:'80vh',width:'100%', display:'flex', justifyContent:'center', alignItems:'center'
    }}>
      <div style={{width:'70%', height:'70vh',display:'flex', flexDirection:'column' }}>
        <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
            <div style={{display:'flex', flexDirection:'column', color:'white'}}>
                <h4>More from Yes Madam</h4>
                <div style={{display:'flex', flexDirection:'column', height:'18vh', justifyContent:'space-around'}}>
                <label style={{fontSize:14}}>About Us</label>
                <label style={{fontSize:14}}>Contact Us</label>
                <label style={{fontSize:14}}>Privacy Policy</label>
                <label style={{fontSize:14}}>FAQs</label>
                <label style={{fontSize:14}}>Terms and Condition</label>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', color:'white'}}>
                <h4>Categories</h4>
                <div style={{display:'flex', flexDirection:'column', height:'18vh', justifyContent:'space-around'}}>
                <label style={{fontSize:14}}>Salon at Home</label>
                <label style={{fontSize:14}}>At Home Makeup</label>
                <label style={{fontSize:14}}>Female Spa</label>
                <label style={{fontSize:14}}>LED Facial</label>
                <label style={{fontSize:14}}>Female Hair Salon</label>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', color:'white'}}>
                <h4>Work with Us</h4>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <label style={{fontSize:14}}>Franchise</label>
                
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'column', color:'white'}}>
                <h4>Contact & Support</h4>
                <div style={{display:'flex', flexDirection:'column', height:'8vh', justifyContent:'space-around'}}>
                <label style={{fontSize:14}}>support@yesmadam.com</label>
                <label style={{fontSize:14}}>8123456789</label>
               
                </div>
            </div>
        </div>
        <br/>
        <hr style={{width:'100%'}}></hr>
        <br/>
        <div style={{color:'white', fontSize:18, display:'flex', padding:15}}>
            <label> Noida | Greater Noida | Delhi | Gurugram | Ghaziabad | Faridabad | Lucknow | Jammu | Bareilly | Chandigarh | Mohali | Panchkula | Jalandhar | Kanpur | Jaipur | Meerut | Bengaluru | Agra | Bhubaneswar | Dehradun | Ludhiana | Hyderabad | Varanasi | Raipur | Patna | Mumbai | Prayagraj | Cuttack | Amritsar | Ahmedabad | Bhopal | Vijayawada </label>
        </div>
        <div style={{color:'white', width:'100%', height:'20vh', alignItems:'center', justifyContent:'center', display:'flex'}}>
            <label>Copyright 2017-2023 
@YesMadam
  | Powered by: Notion Online Solutions Private Limited</label>
        </div>
      </div>
    </div>
  )
}

export default Footer
