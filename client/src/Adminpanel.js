import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'

function Adminpanel() {

  const { id } = useParams("");
  const [slider1, setslider1] = useState('');
  const [userdata, setuserdata] = useState([]);
  const [feedback, setfeedback] = useState([]);

  const navigate = useNavigate()



  const Toggle = () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }


  const Getdata = async () => {
    const res = await fetch(`/getdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const data = await res.json();
    if (!data) {
      window.alert('error in get data')
    }
    else {
      setuserdata(data)
      setfeedback(data.feedback)
      console.log(userdata);
    }
  }


  const updateslider1 = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('slider1', slider1);
    console.log(slider1);

    const url = `/imageedit/${id}`

    try {
      console.log("############");
      console.log(formData);
      window.alert(formData);

      let res = axios.patch(`/imageedit/${id}`, formData);

      if (!res) {
        window.alert('error in get data2')
      }
      else {

        window.alert("image updated")
      }

    } catch (err) {
      console.log('error');
    }

  }

  const handleslider1 = (e) => {
    setslider1({ ...slider1, slider1: e.target.files[0] })
    console.log(slider1);
  }

  const deleteData =async (stfid) => {
    const res7 = await fetch(`/deletefeedback/${stfid}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
  
      const data4 = await res7.json();
      console.log(data4);
      if (!data4) {
        window.alert('error in delete data')
      }
      else {
        navigate(`/admin/${id}`, { replace: true })
        console.log('data deleted');
        Getdata()
  
      }
}

  useEffect(() => {
    Getdata();
  }, [])

  return (
    <>

      <div class="sidebar">
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Vadgam</span>
        </div>
        <ul class="nav-links">
          <li>
          <NavLink to={`/admin/${id}`}>
            <a href="/admin" class="active">
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name">Dashboard</span>
            </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/staffinfo/${id}`}>
              <a>
                <i class='bx bx-box' ></i>
                <span class="links_name">staffinfo</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/panchayat/${id}`}>
              <a href="#">
                <i class='bx bx-list-ul' ></i>
                <span class="links_name">Panchayat</span>
              </a>
            </NavLink>

          </li>
          <li>
            <NavLink to={`/department/${id}`}>
              <a href="#">
                <i class='bx bx-pie-chart-alt-2' ></i>
                <span class="links_name">Department</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/schemes/${id}`}>
              <a href="#">
                <i class='bx bx-coin-stack' ></i>
                <span class="links_name">Schemes</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/notice/${id}`}>
              <a href="#">
                <i class='bx bx-book-alt' ></i>
                <span class="links_name">Notice</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/award/${id}`}>
              <a href="#">
                <i class='bx bx-user' ></i>
                <span class="links_name">Awards</span>
              </a>
            </NavLink>
          </li>
          
          



          <li class="log_out">
            <NavLink to={`/adminlogin`} >

              <a href="#">
                <i class='bx bx-log-out'></i>
                <span class="links_name">Log out</span>
              </a>
            </NavLink>
          </li>
        </ul>
      </div>    
      
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class='bx bx-search' ></i>
          </div>
          <div class="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span class="admin_name">{userdata.userid}</span>
            <i class='bx bx-chevron-down' ></i>
          </div>
        </nav>


        <div class="home-content">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>

      <NavLink to={`/editprofile/${id}`} >

            <button className='btn btn-primary mx-4 mb-3 ' style={{ width: "auto", }}>            <i class='bx bx-edit mr-2' ></i>
              TDO Inforamation</button>
      </NavLink>
          </div>

          <div>
          </div>
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic" style={{ fontSize: 18 }}>TDO Name</div>
                <div class="number" style={{ fontSize: 24 }}>{userdata.tdonamme}</div>
                <div class="indicator">
                  {/* <i class='bx bx-up-arrow-alt'></i> */}
                  {/* <span class="text">Up from yesterday</span> */}
                </div>
              </div>
              {/* <i class='bx bx-cart-alt cart'></i> */}
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic" style={{ fontSize: 18 }}> TDO Number</div>
                <div class="number" style={{ fontSize: 24 }}>{userdata.tdonumber}</div>
                <div class="indicator">
                  {/* <i class='bx bx-up-arrow-alt'></i> */}
                  {/* <span class="text">Up from yesterday</span> */}
                </div>
              </div>
              {/* <i class='bx bxs-cart-add cart two' ></i> */}
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic" style={{ fontSize: 18 }}>TDO Address</div>
                <div class="number" style={{ fontSize: 24 }}>{userdata.tdoaddress}</div>
                {/* <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div> */}
              </div>
              {/* <i class='bx bx-cart cart three' ></i> */}
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic" style={{ fontSize: 18 }}>UserName</div>
                <div class="number" style={{ fontSize: 24 }}>{userdata.userid}</div>
                {/* <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div> */}
              </div>
              {/* <i class='bx bxs-cart-download cart four' ></i> */}
            </div>
          </div>



          <div class="sales-boxe">
                <div class="recent-sales box">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div class="title">Feedback</div>
                     
                    </div>
                    <hr />


                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Handle</th>

                                </tr>
                            </thead>
                            <tbody>
                               
                        {
                            feedback.map((ele, id) => {
                                return (<>
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{ele.fbname}</td>
                                        <td>{ele.fbemail}</td>
                                        <td>{ele.fbsubject}</td>
                                        <td>{ele.fbmsg}</td>

                                        <td>
                                         <button className='btn' onClick={ () => {deleteData(ele._id)}}>

                                            <i class='bx bx-trash text-danger px-2' style={{fontSize:30,}}></i>
                                         </button>
                                        </td>

                                    </tr>
                                </>)
                            })

                        }
                            </tbody>
                        </table>

                 
                   
                </div>

            </div>

          
        </div>
      </section>

      <NavLink to={`/image/${id}`}>
      <button className='btn btn-primary'>Image Upload</button>
      </NavLink>
    </>
  )
}

export default Adminpanel





// <div class="card-group mx-5 my-5">
//             <div class="card mx-2" style={{ borderRadius: 10 }} >

//               <img class="card-img-top" src="https://source.unsplash.com/214x180/?news" alt="Card image cap" />
//               <div class="card-body">
//                 <h5>slider 1</h5>
//                 <form method='POST' encType='multipart/form-data'>
//                   <input type="file" name='slider1' onChange={handleslider1} style={{ padding: "20px 0px" }} />
//                   <button className='btn btn-primary' onClick={updateslider1}> Update </button>
//                 </form>
//               </div>
//             </div>
//             <div class="card mx-2" style={{ borderRadius: 10 }} >

//               <img class="card-img-top" src="https://source.unsplash.com/214x180/?news" alt="Card image cap" />
//               <div class="card-body">
//                 <h5>slider 2</h5>
//                 <input type="file" style={{ padding: "20px 0px" }} />
//                 <button className='btn btn-primary'> Update </button>

//               </div>
//             </div>
//             <div class="card mx-2" style={{ borderRadius: 10 }} >

//               <img class="card-img-top" src="https://source.unsplash.com/214x180/?news" alt="Card image cap" />
//               <div class="card-body">
//                 <h5>slider 3</h5>
//                 <input type="file" style={{ padding: "20px 0px" }} />
//                 <button className='btn btn-primary'> Update </button>
//               </div>
//             </div>
//           </div>



//           <div class="sales-boxes">
//             <div class="recent-sales box">
//               <div class="title">Recent Sales</div>
//               <div class="sales-details">
//                 <ul class="details">
//                   <li class="topic">Date</li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                 </ul>
//                 <ul class="details">
//                   <li class="topic">Customer</li>
//                   <li><a href="#">Alex Doe</a></li>
//                   <li><a href="#">David Mart</a></li>
//                   <li><a href="#">Roe Parter</a></li>
//                   <li><a href="#">Diana Penty</a></li>
//                   <li><a href="#">Martin Paw</a></li>
//                   <li><a href="#">Doe Alex</a></li>
//                   <li><a href="#">Aiana Lexa</a></li>
//                   <li><a href="#">Rexel Mags</a></li>
//                   <li><a href="#">Tiana Loths</a></li>
//                 </ul>
//                 <ul class="details">
//                   <li class="topic">Sales</li>
//                   <li><a href="#">Delivered</a></li>
//                   <li><a href="#">Pending</a></li>
//                   <li><a href="#">Returned</a></li>
//                   <li><a href="#">Delivered</a></li>
//                   <li><a href="#">Pending</a></li>
//                   <li><a href="#">Returned</a></li>
//                   <li><a href="#">Delivered</a></li>
//                   <li><a href="#">Pending</a></li>
//                   <li><a href="#">Delivered</a></li>
//                 </ul>
//                 <ul class="details">
//                   <li class="topic">Total</li>
//                   <li><a href="#">$204.98</a></li>
//                   <li><a href="#">$24.55</a></li>
//                   <li><a href="#">$25.88</a></li>
//                   <li><a href="#">$170.66</a></li>
//                   <li><a href="#">$56.56</a></li>
//                   <li><a href="#">$44.95</a></li>
//                   <li><a href="#">$67.33</a></li>
//                   <li><a href="#">$23.53</a></li>
//                   <li><a href="#">$46.52</a></li>
//                 </ul>
//               </div>
//               <div class="button">
//                 <a href="#">See All</a>
//               </div>
//             </div>
//             <div class="top-sales box">
//               <div class="title">Top Seling Product</div>
//               <ul class="top-sales-details">
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/sunglasses.jpg" alt="">--> */}
//                     <span class="product">Vuitton Sunglasses</span>
//                   </a>
//                   <span class="price">$1107</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/jeans.jpg" alt="">--> */}
//                     <span class="product">Hourglass Jeans </span>
//                   </a>
//                   <span class="price">$1567</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!-- <img src="images/nike.jpg" alt="">--> */}
//                     <span class="product">Nike Sport Shoe</span>
//                   </a>
//                   <span class="price">$1234</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/scarves.jpg" alt="">--> */}
//                     <span class="product">Hermes Silk Scarves.</span>
//                   </a>
//                   <span class="price">$2312</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/blueBag.jpg" alt="">--> */}
//                     <span class="product">Succi Ladies Bag</span>
//                   </a>
//                   <span class="price">$1456</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/bag.jpg" alt="">--> */}
//                     <span class="product">Gucci Womens's Bags</span>
//                   </a>
//                   <span class="price">$2345</span>

//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/addidas.jpg" alt="">--> */}
//                     <span class="product">Addidas Running Shoe</span>
//                   </a>
//                   <span class="price">$2345</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/shirt.jpg" alt="">--> */}
//                     <span class="product">Bilack Wear's Shirt</span>
//                   </a>
//                   <span class="price">$1245</span>
//                 </li>
//               </ul>
//             </div>
//           </div>