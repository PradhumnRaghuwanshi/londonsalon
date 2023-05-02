import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "react-grid-carousel";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate()


  return (
    <div>
      <Header />
      <div style={{ width: "100%" }}>
        <Carousel cols={1} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              width="100%"
              height="350vh"
              src="https://cdn.yesmadam.com/images/live/app/banner/LED-1309-Home-Banner-28-10-22.webp"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="350vh"
              src="https://cdn.yesmadam.com/images/live/app/banner/venus-youtube-home-web-banner-25-1-23.webp"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="350vh"
              src="https://cdn.yesmadam.com/images/live/app/banner/Total-Relaxation-Web-3-11-22.webp"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="100%"
              height="350vh"
              src="https://cdn.yesmadam.com/images/live/app/banner/casmara-led-home-desktop-slider-banner-14-12-22.webp"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div
        style={{
          width: "100%",
          height: "250vh",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "60%",
            height: "45vh",
            justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <label style={{ fontSize: 30, fontWeight: 200 }}>
              India's Most
              <label style={{ fontSize: 30, fontWeight: 400 }}>
                {" "}
                Affordable Home Salon
              </label>{" "}
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
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              onClick={()=>navigate('/Salon')}
              style={{
                width: "16%",
                height: "26vh",
                border: "1px solid lightgrey",
                backgroundColor:'white',
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "10vh",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "50%", height: "15vh" }}
        src="https://cdn.yesmadam.com/images/live/category/at-home-salon-main-category-23-11-22.jpg"
                ></img>
              </div>
              <label style={{ fontWeight: 500, fontSize: 18 }}>
                Salon at Home
              </label>
            </div>
            <div
             onClick={()=>navigate('/HomeMakeUp')}
              style={{
                width: "16%",
                height: "26vh",
                border: "1px solid lightgrey",
                backgroundColor:'white',
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "10vh",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "50%", height: "15vh" }}
                  src="https://cdn.yesmadam.com/images/live/category/makeup-main-category-23-1-23.jpg"
                ></img>
              </div>
              <label style={{ fontWeight: 500, fontSize: 18 }}>
                At Home MakeUp
              </label>
            </div>
            <div
            onClick={()=>navigate('/FemaleSpa')}
              style={{
                width: "16%",
                height: "26vh",
                border: "1px solid lightgrey",
                backgroundColor:'white',
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "10vh",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "50%", height: "15vh" }}
                  src="https://cdn.yesmadam.com/images/live/category/female-spa-main-category-23-11-22.jpg"
                ></img>
              </div>
              <label style={{ fontWeight: 500, fontSize: 18 }}>
                Female Spa
              </label>
            </div>
            <div
            onClick={()=>navigate('/LedFacial')}
              style={{
                width: "16%",
                height: "26vh",
                border: "1px solid lightgrey",
                backgroundColor:'white',
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "10vh",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "50%", height: "15vh" }}
                  src="https://cdn.yesmadam.com/images/live/category/led-facial-main-category-23-11-22.jpg"
                ></img>
              </div>
              <label style={{ fontWeight: 500, fontSize: 18 }}>
                LED Facial
              </label>
            </div>
            <div
            onClick={()=>navigate('/HairSalon')}
              style={{
                width: "16%",
                height: "26vh",
                border: "1px solid lightgrey",
                backgroundColor:'white',
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "10vh",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <img
                  style={{ width: "100%", borderRadius: "50%", height: "15vh" }}
                  src="https://cdn.yesmadam.com/images/live/category/female-hair-salon-main-category-23-11-22.jpg"
                ></img>
              </div>
              <label style={{ fontWeight: 500, fontSize: 18 }}>
                Female Hair Salon
              </label>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "70%",
            height: "70vh",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <label style={{ fontSize: 30, fontWeight: 200 }}>
              India's Most
              <label style={{ fontSize: 30, fontWeight: 400 }}>
                {" "}
                Affordable Home Salon
              </label>{" "}
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
          <br />
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "32%",
                height: "25vh",
                border: "1px solid lightgrey",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%", height: "25vh" }}
                src="https://www.yesmadam.com/static/images/why_1.webp"
              ></img>
            </div>
            <div
              style={{
                width: "32%",
                height: "25vh",
                border: "1px solid lightgrey",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%", height: "25vh" }}
                src="https://www.yesmadam.com/static/images/why_2.webp"
              ></img>
            </div>
            <div
              style={{
                width: "32%",
                height: "25vh",
                border: "1px solid lightgrey",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "100%", height: "25vh" }}
                src="https://www.yesmadam.com/static/images/why_3.webp"
              ></img>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "32%",
                height: "25vh",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <label style={{ fontSize: 20, fontWeight: 500 }}>
                Genuine and Sealed Products
              </label>
              <label style={{ color: "grey" }}>
                All our professionals use only top-notch products. In fact, we
                provide freedom to use your own products, where you can just
                call our professionals for the services.
              </label>
            </div>
            <div
              style={{
                width: "32%",
                height: "25vh",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <label style={{ fontSize: 20, fontWeight: 500 }}>
                Transparent and Affordable Prices
              </label>
              <label style={{ color: "grey" }}>
                As we believe in 100% transparent pricing module, all our
                at-home salon and wellness services are quite affordable and
                budget-friendly.
              </label>
            </div>
            <div
              style={{
                width: "32%",
                height: "25vh",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <label style={{ fontSize: 20, fontWeight: 500 }}>
                Trained and Verified Experts
              </label>
              <label style={{ color: "grey" }}>
                We at Yes Madam believe in working with the utmost
                professionalism. Thus, our clients are served only by
                well-experienced and skilled professionals.
              </label>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "70%",
            height: "30vh",
            justifyContent: "space-evenly",
          }}
        >
          <img
            style={{ width: "100%" }}
            src="https://www.yesmadam.com/static/images/banner.webp"
          ></img>
        </div>

        <div
          style={{
            width: "70%",
            height: "50vh",
            justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <label style={{ fontSize: 40, fontWeight: 200 }}>Beauty </label>
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
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "100%",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Carousel cols={5} rows={1} gap={10} loop>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="200vh"
                    style={{ borderRadius: 10 }}
                    src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/Detan-Bleach-subcategory-1-12-22.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="200vh"
                    style={{ borderRadius: 10 }}
                    src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/Waxing-subcategory-1-12-22.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="200vh"
                    style={{ borderRadius: 10 }}
                    src="https://cdn.yesmadam.com/images/live/app/mainsubcategory/Hair-Colour-subcategory-1-12-22.jpg"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="200vh"
                    style={{ borderRadius: 10 }}
                    src="https://cdn.yesmadam.com/images/live/app/banner/casmara-led-home-desktop-slider-banner-14-12-22.webp"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="200vh"
                    style={{ borderRadius: 10 }}
                    src="https://cdn.yesmadam.com/images/live/app/banner/casmara-led-home-desktop-slider-banner-14-12-22.webp"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "50vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "33%",
            display: "flex",
            flexDirection: "column",
            height: "30vh",
            justifyContent: "space-around",
          }}
        >
          <label style={{ fontSize: 40, fontWeight: 500 }}>
            Download via SMS
          </label>
          <label style={{ fontSize: 20 }}>
            Get a link via SMS to install the app. Fill your number down here.
          </label>
          <div
            style={{ display: "flex", border: "1px solid grey", height: "8vh" }}
          >
            <label
              style={{
                border: "1px solid grey",
                width: "10%",
                height: "8vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              +91
            </label>
            <input style={{ width: "77%" }}></input>
            <button>Sumbit</button>
          </div>
        </div>
        <div style={{ width: "35%" }}>
          <img
            style={{ width: "100%", height: "40vh" }}
            src="https://www.yesmadam.com/static/images/app_img.webp"
          ></img>
        </div>
      </div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            flexWrap: "wrap",
            height: "70vh",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
              width: "46%",
              height: "5vh",
              border: "1px solid grey",
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
      <Footer />
    </div>
  );
}

export default Home;
