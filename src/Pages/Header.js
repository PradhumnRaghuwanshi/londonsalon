import React from 'react'

function Header() {
  return (
    <div 
    style={{
        width:'100%',
        height:'12vh',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        boxShadow:'0px 0.5px 5px grey',
        backgroundColor:'white'

    }}>
      <div style={{width:'20%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
        <img style={{width:'30%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_6Q3_5Cu7yJgLzhVtberZOUdfUKf-TUjLA&usqp=CAU'></img>
        <div style={{display:'flex', flexDirection:'column'}}>
            <label style={{fontSize:20, color:'grey'}}>India's Most</label>
            <label style={{fontSize:20, fontWeight:500}}>Afforable Home <span style={{color:"#B5D94C"}}>Salon</span></label>
        </div>

      </div>
      <div style={{width:'10%'}}>
        <label style={{fontSize:20, color:'grey'}}>Login/Sign Up</label>

      </div>
    </div>
  )
}

export default Header
