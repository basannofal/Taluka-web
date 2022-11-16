const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conn = require('./db/conn')
const bodyparser = require('body-parser');
const path = require('path')
const getschema = require('./db/Schema')
const multer = require('multer')



app.use(express.json())


app.use(express.static(__dirname + '/server/uploads'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));




// multer using 

const Storage = multer.diskStorage({
    destination: "../client/src/uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: Storage
});








app.get("/", (req,res) => {
    res.send("hello")
})





// //***************************** IMAGE UPLOAD **************************************** */

app.patch('/imageedit/:id', upload.single('pimage'), async (req, res) => {

    const id = req.params.id
    const {pname, pdisc } = req.body
    const imag = req.file.filename
    
    console.log(`${req.file.filename} and ${pname} and ${pdisc}`);
    getschema.findByIdAndUpdate(id, {
        $push: {
            product:
            {
                pname: pname,
                pimage : req.file.filename,
                pdisc :pdisc

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)






//***************************** GET DATA **************************************** */

app.get('/getdata', async (req, res) => {
    try {
        const userdata = await getschema.find();
        res.status(201).json(userdata);
    } catch (error) {
        res.send(error)
    }

})





// ************************** GET DATA FOR PERTICULER USER ********************************


app.get('/getdata/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const peruserdata = await getschema.findById(id);
        console.log(peruserdata);
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})




app.get('/getuser/:id/:obid', async (req, res) => {
    try {
        const id = req.params.id
        const obid = req.params.obid
        console.log(id);
        const peruserdata = await getschema.find({ 'dept._id': obid },
            { "_id": obid, dept: { $elemMatch: { _id: obid } } });
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})




app.get('/getscheme/:id/:obid', async (req, res) => {
    try {
        const id = req.params.id
        const obid = req.params.obid
        console.log(id);
        const peruserdata = await getschema.find({ 'scheme._id': obid },
            { "_id": obid, scheme: { $elemMatch: { _id: obid } } });
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})







// ********************** RAGISTER DATA ****************************


app.post('/ragister', async (req, res) => {
    

    try {

        const useronly = new getschema({ 
            userid : req.body.username,
        })
        console.log(useronly.userid);
        const userexist = await getschema.findOne({ userid: useronly.userid })

        if (userexist) {
            return res.status(400).json({ error: ' email already exists' })
        } else {
            const user = new getschema({ 
                tdonamme : req.body.tdoname,
                tdonumber :`+91 ${req.body.tdonumber}`,
                tdoaddress : req.body.tdoaddress,
                userid : req.body.username,
                password : req.body.password,
            })

            await user.save();
            res.json({ message: "user Ragistrate Successfully" })
        }
    } catch (error) {
        console.log(error);
    }

})




//***************************** LOGIN ***********************************8 */

app.post('/login', async (req, res) => {
    try {
        const { username, psw } = req.body;

        const userava = await getschema.findOne({ userid: username });

        if (userava) {
            if (userava.password === psw) {
                res.json(userava)
            }
            else {

                res.status(400).json("invalid");
            }
        }
        else {
            res.status(400).json("invalid email")
        }
    } catch (error) {
        console.log(error);
    }
})



//***************************** FORGET PASSWORD ***********************************8 */

app.post('/forgetpass', async (req, res) => {
    try {
        const { username } = req.body;

        const userava = await getschema.findOne({ userid: username });

        if (userava) {
           
                res.json(userava)
          
            
        }
        else {
            res.status(400).json("invalid email")
        }
    } catch (error) {
        console.log(error);
    }
})


//***************************** NEW PASSWORD ***********************************8 */

app.patch('/newpassword/:id', async (req, res) => {
    
    try {
        const id = req.params.id;
        const { username, psw } = req.body;
        console.log(username);
        console.log(psw);

        if(username == psw ){
            getschema.findByIdAndUpdate(id,{
              
                password : username
               
            }) .then(data => {

                res.status(201).json(data);
    
            }).catch(err => {
                console.log(err);
            })
        }
    } catch (error) {
        console.log(error);
    }
})





//***************************** EDIT TDO INFORMATION ***********************************8 */

app.patch('/edittdoinfo/:id', async (req, res) => {
    
    try {
        const id = req.params.id;
     

 
            getschema.findByIdAndUpdate(id,{
             
                tdonamme : req.body.tdoname,
               tdonumber : req.body.tdonumber,
               tdoaddress : req.body.tdoaddress,
               userid : req.body.username,
               abouttdo : req.body.abouttdo,

               
            }) .then(data => {

                res.status(201).json(data);
    
            }).catch(err => {
                console.log(err);
            })
        
    } catch (error) {
        console.log(error);
    }
})






/// ************************* ADD FEEDBACK **************************************


app.patch('/addfeedback/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            feedback:
            {
                fbemail: req.body.fbemail,
                fbname: req.body.fbname,
                fbsubject: req.body.fbsubject,
                fbmsg: req.body.fbmsg

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})





//******************************************* DELETE FEEDBACK  *********************************** */



app.get('/deletefeedback/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            feedback: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



/// ************************* ADD STAFF MEMBER **************************************


app.patch('/addstaff/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            staffinfo:
            {
                staffname: req.body.staffname,
                staffposition: req.body.staffposition,
                staffaddress: req.body.staffaddress,
                staffnumber: req.body.staffnumber

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE STAFF MEMBER  *********************************** */



app.get('/staffmember/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            staffinfo: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



/// ************************* ADD PANCHAYAT  **************************************


app.patch('/addpanchayat/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            panchayat:
            {
                villagename: req.body.villagename,
                sarpanchname: req.body.sarpanchname,
                sarpanchnumber: req.body.sarpanchnumber,
                panchayataddress: req.body.panchayataddress,
                totalpeople: req.body.totalpeople,
                villagecode: req.body.villagecode,
                peopleladies: req.body.peopleladies,

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE PANCHAYAT *********************************** */



app.get('/deletepanchayat/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            panchayat: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})






/// ************************* ADD DEPARTMENT  **************************************


app.patch('/adddepartment/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            dept:
            {
                deptname: req.body.deptname,
                deptinfo: req.body.deptinfo,
                deptweb: req.body.deptweb,
                deptphoto: req.body.deptphoto,
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE DEPARTMENT *********************************** */



app.get('/deletedepartment/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            dept: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})




/// ************************* ADD SCHEMES  **************************************


app.patch('/addschemes/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            scheme:
            {
                schemename: req.body.schemename,
                schemedetail: req.body.schemedetail,
                eligibility: req.body.eligibility,
                expdate: req.body.expdate,
                schemephoto: req.body.schemephoto,

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE SCHEMES *********************************** */



app.get('/deleteschemes/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            scheme: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})





/// ************************* ADD NOTICE  **************************************


app.patch('/addnotice/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();


    var date = year + "/" + month + "/" + day;

    getschema.findByIdAndUpdate(id, {
        $push: {
            notice:
            {
                noticemsg: req.body.noticemsg,
                noticedate: req.body.noticedate,
                todaydate: date,
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE NOTICE *********************************** */



app.get('/deletenotice/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            notice: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})




/// ************************* ADD AWARD  **************************************


app.patch('/addaward/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            award:
            {
                awardname: req.body.awardname,
                winnername: req.body.winnername,
                compititionname: req.body.compititionname,
                compititionyear: req.body.compititionyear,
                rank: req.body.rank,

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE AWARD *********************************** */



app.get('/deleteaward/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            award: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



app.listen(8000, () => {
    console.log('server created');
})