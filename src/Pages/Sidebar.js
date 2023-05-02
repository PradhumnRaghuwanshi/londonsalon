import React, { useState } from 'react'

function Sidebar() {
    const [showDiv, setShowDiv] = useState(false)
    const [showDiv1, setShowDiv1] = useState(false)
    const [showDiv2, setShowDiv2] = useState(false)
    const [showDiv3, setShowDiv3] = useState(false)
    const [showDiv4, setShowDiv4] = useState(false)
    const [showDiv5, setShowDiv5] = useState(false)
    const [showDiv6, setShowDiv6] = useState(false)
    const [showDiv7, setShowDiv7] = useState(false)
    const [showDiv8, setShowDiv8] = useState(false)
  return (
    <div style={{width:'30%', backgroundColor:'white', display:'flex', flexDirection:'column', alignItems:'center', minHeight:'70vh', borderRadius:10}}>
                <div
                onClick={()=>{setShowDiv(true);setShowDiv1(false);setShowDiv2(false);setShowDiv3(false);setShowDiv4(false);setShowDiv5(false);setShowDiv6(false);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Waxing</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Top Selling</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Rica Waxing</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Honey Waxing</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Rica Intimate Service</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Honey Intimate Service</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(true);setShowDiv2(false);setShowDiv3(false);setShowDiv4(false);setShowDiv5(false);setShowDiv6(false);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Facial</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv1?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Top Selling</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Mama Earth</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Kumkumadi Facial</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Premium Facial</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Classic Facial</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Facial with De-Tan</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Bridal Facial</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Luxury Facial</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(true);setShowDiv3(false);setShowDiv4(false);setShowDiv5(false);setShowDiv6(false);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Mani-Pedi</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv2?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Margherita Detox</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Mani-Pedi Combo</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Pedicure</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Manicure</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Add On</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(false);setShowDiv3(true);setShowDiv4(false);setShowDiv5(false);setShowDiv6(false);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Clean-Up</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv3?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Top Selling</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Classic Cleanup</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Premium Cleanup</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Face Mask</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(false);setShowDiv3(false);setShowDiv4(true);setShowDiv5(false);setShowDiv6(false);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>De-Tan Pack/ Bleach/ Scrub</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv4?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Bleach</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>De-Tan Pack</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Scrub</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Massgae Cream</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(false);setShowDiv3(false);setShowDiv4(false);setShowDiv5(true);setShowDiv6(false);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Hair</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv5?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Scalp Facial</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Touch Up</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Keratin Hair Spa</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Global-L'Oreal Inoa</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Henna Application</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Add On</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(false);setShowDiv3(false);setShowDiv4(false);setShowDiv5(false);setShowDiv6(true);setShowDiv7(false);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Full Body Deals</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv6?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Top Selling</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Body Cappuccino</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Best Deal</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(false);setShowDiv3(false);setShowDiv4(false);setShowDiv5(false);setShowDiv6(false);setShowDiv7(true);setShowDiv8(false)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>Threading</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                      {showDiv7?
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Threading</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Face Wax</label>
                    <label style={{padding:5, backgroundColor:'#F1F1F1', border:'1px solid white', width:"100%", paddingLeft:20}}>Insta Light Pack</label>
                </div>:null}
                </div>
                <div
                onClick={()=>{setShowDiv(false);setShowDiv1(false);setShowDiv2(false);setShowDiv3(false);setShowDiv4(false);setShowDiv5(false);setShowDiv6(false);setShowDiv7(false);setShowDiv8(true)}}
                style={{width:'85%', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid lightgrey', height:''}}>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:'7vh'}}>
                    <label style={{fontSize:20, color:'GrayText'}}>EyeYouthTherapy</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                     
                </div>
               
            </div>
  )
}

export default Sidebar
