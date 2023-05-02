import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import axios from "axios";

function Waxing() {
const [popUp, setPopUp] = useState(false)

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <div style={{ height: "12vh" }}>
            <label
              style={{
                fontSize: 30,
                height: "15vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              Top Selling
            </label>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Sidebar />

            <div
              style={{
                width: "68%",
                display: "flex",
                flexDirection: "column",
                height: "80vh",
                justifyContent: "space-between",
                overflowY: "auto",
              }}
            >
              <div style={{ height: "8vh", fontSize: 30 }}>Top Selling</div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "white",
                  border: "1px solid lightgrey",
                  borderRadius: 15,
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    height: "30vh",
                    borderTopLeftRadius: 15,
                  }}
                  src="https://cdn.yesmadam.com/images/live/iDescription/1623041807482.jpg"
                ></img>
                <div
                  style={{
                    width: "68%",
                    display: "flex",
                    flexDirection: "column",
                    height: "30vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "23vh",
                    }}
                  >
                    <label style={{ fontSize: 16, fontWeight: 500 }}>
                      BESTSELLER Waxology - Rica (Full Arms, Full Legs &
                      Underarms)
                    </label>
                    <br />
                    <label style={{ fontSize: 12, color: "grey" }}>
                      Rica Waxing - Full Arms & Full Legs
                    </label>
                    <label style={{ fontSize: 12, color: "grey" }}>
                      Rica Brazilian Waxing - Underarms
                    </label>
                    <label
                      style={{ color: "#B93C5B", textDecoration: "underline" }}
                    >
                      View Detail
                    </label>
                  </div>
                  <div
                  onClick={()=>setPopUp(true)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <label>Rs. 749/-</label>
                    <button
                    
                      style={{
                        backgroundColor: "#B93C5B",
                        border: "none",
                        borderRadius: 20,
                        padding: 10,
                        color: "white",
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "white",
                  border: "1px solid lightgrey",
                  borderRadius: 15,
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    height: "30vh",
                    borderTopLeftRadius: 15,
                  }}
                  src="https://cdn.yesmadam.com/images/live/iDescription/1623041807482.jpg"
                ></img>
                <div
                  style={{
                    width: "68%",
                    display: "flex",
                    flexDirection: "column",
                    height: "30vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "23vh",
                    }}
                  >
                    <label style={{ fontSize: 16, fontWeight: 500 }}>
                      BESTSELLER Waxology - Rica (Full Arms, Full Legs &
                      Underarms)
                    </label>
                    <br />
                    <label style={{ fontSize: 12, color: "grey" }}>
                      Rica Waxing - Full Arms & Full Legs
                    </label>
                    <label style={{ fontSize: 12, color: "grey" }}>
                      Rica Brazilian Waxing - Underarms
                    </label>
                    <label
                      style={{ color: "#B93C5B", textDecoration: "underline" }}
                    >
                      View Detail
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <label>Rs. 749/-</label>
                    <button
                      style={{
                        backgroundColor: "#B93C5B",
                        border: "none",
                        borderRadius: 20,
                        padding: 10,
                        color: "white",
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "white",
                  border: "1px solid lightgrey",
                  borderRadius: 15,
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{
                    width: "30%",
                    height: "30vh",
                    borderTopLeftRadius: 15,
                  }}
                  src="https://cdn.yesmadam.com/images/live/iDescription/1623041807482.jpg"
                ></img>
                <div
                  style={{
                    width: "68%",
                    display: "flex",
                    flexDirection: "column",
                    height: "30vh",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "23vh",
                    }}
                  >
                    <label style={{ fontSize: 16, fontWeight: 500 }}>
                      BESTSELLER Waxology - Rica (Full Arms, Full Legs &
                      Underarms)
                    </label>
                    <br />
                    <label style={{ fontSize: 12, color: "grey" }}>
                      Rica Waxing - Full Arms & Full Legs
                    </label>
                    <label style={{ fontSize: 12, color: "grey" }}>
                      Rica Brazilian Waxing - Underarms
                    </label>
                    <label
                      style={{ color: "#B93C5B", textDecoration: "underline" }}
                    >
                      View Detail
                    </label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "90%",
                    }}
                  >
                    <label>Rs. 749/-</label>
                    <button
                      style={{
                        backgroundColor: "#B93C5B",
                        border: "none",
                        borderRadius: 20,
                        padding: 10,
                        color: "white",
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popUp?
      <div
        className="popup"
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "38%", height: "95vh", backgroundColor: "white" }}>
          <div
            className="popup-1"
            style={{ width: "100%", height: "42.5vh", display:'flex', justifyContent:'end' }}
          >
            <div onClick={()=>setPopUp(false)} style={{backgroundColor:'white', borderRadius:500, width:30, height:30, display:'flex', justifyContent:'center', alignItems:'center', fontSize:25}}>X</div>
          </div>
          <div
            style={{
              width: "100%",
              height: "42.5vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ width: "95%", display: "flex", flexDirection: "column", height:'42.5vh', justifyContent:'space-evenly' }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  height:'16vh',
                  justifyContent:'space-evenly'
                }}
              >
                <label style={{ fontSize: 23, fontWeight: 500 }}>
                  Waxology - Rica (Full Arms, Full Legs & Underarms)
                </label>
                <label
                  style={{ fontSize: 20, color: "#6E6969", fontWeight: 500 }}
                >
                  Top Selling
                </label>
                <label style={{ fontSize: 20, fontWeight: 500 }}>
                  Rs 749/-
                </label>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label style={{ fontSize: 15 }}>
                Rica Waxing - Full Arms & Full Legs
                </label>
                <label
                  style={{ fontSize: 15}}
                >
                  Rica Brazilian Waxing - Underarms
                </label>
                
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems:'center'
                }}
              >
                <button style={{width:'40%', height:'5vh', backgroundColor:'#5C1E2D', borderRadius:10, color:'white', border:'none'}}>ADD TO CART</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>:null}
      <Footer />
    </div>
  );
}

export default Waxing;
