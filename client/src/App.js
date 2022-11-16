import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Adminpanel from './Adminpanel'
import Staffinfo from './Staffinfo';
import Addstaff from './Addstaff';
import Adminlogin from './Adminlogin';
import Ragistration from './Ragistration';
import Panchayat from './Panchayat';
import Addpanchayat from './Addpanchayat';
import Department from './Department';
import DepartmentAdd from './DepartmentAdd';
import Schemes from './Schemes';
import Addschemes from './Addschemes';
import Notice from './Notice';
import Addnotice from './Addnotice';
import Award from './Award';
import Addawards from './Addawards';
import Addimage from './Addimage';
import Userwellcome from './Userwellcome';
import History from './History';
import Demographic from './Demographic';
import AboutTdo from './AboutTdo';
import Staffinformation from './Staffinformation';
import Forgetpass from './Forgetpass';
import Newpass from './Newpass';
import EditTDO from './EditTDO';
import Villagedetail from './Villagedetail';
import Sarpanch from './Sarpanch';
import Noticepage from './Noticepage';
import Talukapanchayat from './Talukapanchayat';
import Grampanchayat from './Grampanchayat';
import Departmentinfo from './Departmentinfo';
import Schemedetail from './Schemedetail';
import Gallary from './Gallary';
import FbandCotc from './FbandCotc';
import AddiinRatS110 from './Attechment/AddiinRatS110';
import DomiS378 from './Attechment/DomiS378';
import FarmerS19 from './Attechment/FarmerS19';
import IncomeS63 from './Attechment/IncomeS63';
import MinorityS79 from './Attechment/MinorityS79';
import SccastS645 from './Attechment/SccastS645';
function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={
          <>
            <Home />
          </>
        }></Route>
      </Routes>


      <Routes>
        <Route path="/admin/:id" element={<Adminpanel />}></Route>
      </Routes>


      <Routes>
        <Route path="/staffinfo/:id" element={<Staffinfo />}></Route>
      </Routes>

      <Routes>
        <Route path="/addstaff/:id" element={<Addstaff />}></Route>
      </Routes>

      <Routes>
        <Route path="/panchayat/:id" element={<Panchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/addpanchayat/:id" element={<Addpanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/department/:id" element={<Department />}></Route>
      </Routes>

      <Routes>
        <Route path="/departmentadd/:id" element={<DepartmentAdd />}></Route>
      </Routes>

      <Routes>
        <Route path="/schemes/:id" element={<Schemes />}></Route>
      </Routes>

      <Routes>
        <Route path="/addschemes/:id" element={<Addschemes />}></Route>
      </Routes>


      <Routes>
        <Route path="/notice/:id" element={<Notice />}></Route>
      </Routes>

      <Routes>
        <Route path="/addnotice/:id" element={<Addnotice />}></Route>
      </Routes>

      <Routes>
        <Route path="/award/:id" element={<Award />}></Route>
      </Routes>

      <Routes>
        <Route path="/addaward/:id" element={<Addawards />}></Route>
      </Routes>

      <Routes>
        <Route path="/adminlogin" element={<Adminlogin />}></Route>
      </Routes>

      <Routes>
        <Route path="/ragistration" element={<Ragistration />}></Route>
      </Routes>

      <Routes>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <Routes>
        <Route path="/demography/:id" element={<Demographic />}></Route>
      </Routes>

      <Routes>
        <Route path="/abouttdo/:id" element={<AboutTdo />}></Route>
      </Routes>

      <Routes>
        <Route path="/staffinformation/:id" element={<Staffinformation />}></Route>
      </Routes>

      <Routes>
        <Route path="/forgetpassword" element={<Forgetpass />}></Route>
      </Routes>

      <Routes>
        <Route path="/newpassword/:id" element={<Newpass />}></Route>
      </Routes>

      <Routes>
        <Route path="/editprofile/:id" element={<EditTDO />}></Route>
      </Routes>

      <Routes>
        <Route path="/villagedetail/:id" element={<Villagedetail />}></Route>
      </Routes>

      <Routes>
        <Route path="/sarpanchdetail/:id" element={<Sarpanch />}></Route>
      </Routes>

      <Routes>
        <Route path="/noticedetail/:id" element={<Noticepage />}></Route>
      </Routes>


      <Routes>
        <Route path="/grampanchayat/:id" element={<Grampanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/taludapanchayat/:id" element={<Talukapanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/depatmentinfo/:id/:obid" element={<Departmentinfo />}></Route>
      </Routes>

      <Routes>
        <Route path="/schemedetail/:id/:obid" element={<Schemedetail />}></Route>
      </Routes>

      <Routes>
        <Route path="/gallary/:id" element={<Gallary />}></Route>
      </Routes>

      <Routes>
        <Route path="/feedbackandcontact/:id" element={<FbandCotc />}></Route>
      </Routes>


      

{/* ******************** Extra ******************* */}

      <Routes>
        <Route path="/image/:id" element={<Addimage />}></Route>
      </Routes>

      <Routes>
        <Route path="/userwellcome" element={<Userwellcome />}></Route>
      </Routes>

      <Routes>
        <Route path="/userwellcome/:id" element={<Userwellcome />}></Route>
      </Routes>


{/* ******************** Attechment ******************* */}

      <Routes>
        <Route path="/nameaddinRationcardS110" element={<AddiinRatS110 />}></Route>
      </Routes>

      <Routes>
        <Route path="/domicilecirs378" element={<DomiS378 />}></Route>
      </Routes>

      <Routes>
        <Route path="/farmers19" element={<FarmerS19 />}></Route>
      </Routes>

      <Routes>
        <Route path="/incomecirs63" element={<IncomeS63 />}></Route>
      </Routes>

      <Routes>
        <Route path="/minoritys79" element={<MinorityS79 />}></Route>
      </Routes>

      <Routes>
        <Route path="/sccasts645" element={<SccastS645 />}></Route>
      </Routes>




    </>
  );
}

export default App;
