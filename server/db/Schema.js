const mongoose = require('mongoose')

const govschema = mongoose.Schema({
    tdonamme:String,
    tdonumber :String,
    tdoaddress : String,
    talukainfo:String,
    userid: String,
    password :String,
    abouttdo :String,

    staffinfo :[
        {
            staffname :String,
            staffposition: String,
            staffaddress :String,
            staffnumber :Number
        }
    ],

    panchayat :[
        {
            villagename: String,
            sarpanchname :String,
            sarpanchnumber :Number,
            panchayataddress : String,
            totalpeople : String,
            villagecode: String,
            peopleladies : String
        }
    ],

    dept : [
        {
            deptname : String,
            deptinfo : String,
            deptweb : String,
            deptphoto :String,
        }
    ],

    scheme :[
        {
            schemename: String,
            schemedetail : String,
            eligibility : String,
            expdate : String,
            schemephoto : String
        }
    ],

   


    slider1 : String,
    slider2 : String,
    slider3 : String,

    notice : [
        {
            noticemsg : String,
            noticedate : String,
            todaydate :String,
        }
    ],


    award:[
        {
            awardname :String,
            winnername :String,
            compititionname : String,
            compititionyear : String,
            rank : String
        }
    ],

    gellary :[
        {
            gellaryphoto : String,
        }
    ],
    feedback :[
        {
            fbemail : String,
            fbname :String,
            fbsubject : String,
            fbmsg :String
        }
    ],


    product : [{

        pname:String,
        pimage : String,
        pdisc :String
    }]
})

const sharegovSchema = mongoose.model('taluka', govschema)

module.exports = sharegovSchema;