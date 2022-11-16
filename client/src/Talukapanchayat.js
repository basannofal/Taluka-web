import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
function Talukapanchayat() {
    const { id } = useParams("");

    const [userdata, setuserdata] = useState([]);


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
            setuserdata(data.panchayat)
            console.log(userdata);
        }
    }


    useEffect(() => {
        Getdata();
    }, [])

  return (
    <>
    <Navbar />

    <div class="page-title-section gnsection my-5" data-overlay="0.7" style={{ backgroundColor: "#0c3c53" }}>
        <div class="page-title">
            <div class="container">
                <h2 class="text-light text-center" style={{ paddingTop: 45 }}>This Panchayat is located in <span class="text-info fw-bold">Taluka Panchayat</span></h2>
            </div>
        </div>
        <div class="page-breadcrumb position-static">
            <div class="container">
                <ul class="breadcrumb justify-content-center fw-bold pt-2" style={{ backgroundColor: "#0c3c53" }}>
                    <li><NavLink to={`/userwellcome`}> Home <i class="bi bi-chevron-double-right"></i> </NavLink></li>
                    <li class="text-white" style={{ paddingLeft: 5 }}>Taluka Panchayat</li>
                </ul>
            </div>
        </div>
    </div>



    <div class="section-title pt-5">
        <h2>Taluka Panchayat Related Forms</h2>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-10 mx-auto mt-5 col-md-6">
                <table class="table border">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">No</th>
                            <th class="text-center" scope="col">Certificate Name</th>
                            <th class="text-center" scope="col">View Details</th>
                            <th class="text-center" scope="col">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="text-center" scope="row">1</th>
                            <td class="text-center">S76 - Domicile Certificate</td>
                            <td class="text-center"><a href="">  <NavLink to={`/farmers19`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            
                            </NavLink></a></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="./form/taluka_form/s76-Domicile Certi.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">2</th>
                            <td class="text-center">S63 - Income Certificate</td>
                            <td class="text-center"> <NavLink to={`/domicilecirs378`}>
                            
                            <a href=""><button class="btn btn-outline-info">Attachment</button></a>
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s63-income-certificate.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">3</th>
                            <td class="text-center">S19 - Farmer Certificate</td>
                            <td class="text-center"> <NavLink to={`/incomecirs63`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s19 Farmer certi.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">4</th>
                            <td class="text-center">S51 - New Ration Card</td>
                            <td class="text-center"><NavLink to={`/farmers19`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s51New Ration card.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">5</th>
                            <td class="text-center">S110 - Addition of Name in Ration Card</td>
                            <td class="text-center"> <NavLink to={`/nameaddinRationcardS110`}>
                            
                            <button class="btn btn-outline-info">Attachment</button>
                            
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s110 Ration card name add.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">6</th>
                            <td class="text-center">S82 - Non Cremy Layer Certificate</td>
                            <td class="text-center"><NavLink to={`/minoritys79`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s82NonCreamy Layer Certificate.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">7</th>
                            <td class="text-center">S79 - Religious Minority Certificate</td>
                            <td class="text-center"> <NavLink to={`/sccasts645`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s79 Religious Minority.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">8</th>
                            <td class="text-center">S645 - SC Caste Certificate</td>
                            <td class="text-center"><NavLink to={`/minoritys79`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s645 SC Caste Certificate (Panchayat).pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="row">9</th>
                            <td class="text-center">S77 - Senior Citizen Certificate</td>
                            <td class="text-center"><NavLink to={`/minoritys79`}>
                            <button class="btn btn-outline-info">Attachment</button>
                            </NavLink></td>
                            <td class="text-center" style={{fontSize:25}} ><a href="form/taluka_form/s63-income-certificate.pdf" download><i class="bi bi-file-earmark-arrow-down-fill"></i></a></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <hr />
    <Footer />
</>
  )
}

export default Talukapanchayat