const { render } = require('ejs');
const connection = require('../config/database');
const {getAllAdmin,CreateAdmin,updateUserById,deleteUsertensua, addUser, loginUser, getUserByEmail, getAllMilk,getAllUsers,getValuesProduct} = require('../services/CRUDservices');
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
const getHomepage = async(req,res) =>{
    
    res.render('homereal.ejs');
}

const postCreateAdmin = async (req,res)=>{
    let img = req.body.img;
    let tensua= req.body.tensua;
    let loaisua = req.body.loaisua;
    let giatien = req.body.giatien;
    let trongluong = req.body.trongluong;
    await CreateAdmin(img,tensua, loaisua, giatien,trongluong);
    let results = await getAllAdmin();
    res.render('homeAdmin.ejs',{listAdmins: results})
    // res.send("cap nhat thanh cong")

}
const getHomepageCustomer = async(req,res)=>{
    let email= req.body.email;
    let name = req.body.name;
    let phone = req.body.phone;
    let password = req.body.password;
    // const[results,fields]=await connection.query('select * from User')
    // console.log(results)
   let results= await getAllUsers(email,name,phone,password);
    res.render('listCustomers.ejs',{listUsers: results})
  }

const getHomepageMilk = async(req,res)=>{
    let tensua= req.body.tensua;
    let giatien = req.body.giatien;
    let loaisua = req.body.loaisua;
    let trongluong = req.body.trongluong;
    let results=await getAllMilk(tensua,giatien,loaisua,trongluong)
    res.render('listMilk.ejs',{listMilk: results})
  }


    // const getCreatePage = async(req,res)=>{ 
    //     res.render('add-milk.ejs');
    //     res.send('thêm thành công')
    // }
//     const getnameUser = async(req,res)=>{
//     let name = req.body.name;
//     console.log(name)
//     let [results,fields]= await connection.query('select *from User where name =?',[name]);
//     let ten = results && results.length >0 ? results[0]:{};
//     res.render('homeUser.ejs',{NameUser : ten});
// }
const getLoginPage = async(req,res)=>{
    // if(localStorage.getItem('loginInfo')){
    //     let results = await getAllAdmin();
    //    res.render('homeUser.ejs',{listAdmins: results, userName: localStorage.getItem('loginInfo')})
     
    // }
    res.render('login.ejs');
}
const getRegsiterPage = async(req,res)=>{
    res.render('regsiter.ejs');
}
const postUpdateUser =async(req,res)=>{
    // let id= req.body.id; 
    try {
        // let id = req.body.id;
        let tensua= req.body.tensua;
    let giatien = req.body.giatien;
    let loaisua = req.body.loaisua;
    let trongluong = req.body.trongluong;

    const {oldName} = req.params;
  await updateUserById(tensua, giatien,loaisua, trongluong,oldName);
 
  let results = await getAllAdmin();
  
res.render('homeAdmin.ejs',{listAdmins: results}); //{listAdmins: results}
    } catch (error) {
        console.log(error)
    }
}

const postHandleRemoveUser =async (req,res)=>{
   try {
    const {ten} = req.params;
    await deleteUsertensua(ten);


    let results = await getAllAdmin();
    res.render('homeAdmin.ejs',{listAdmins: results})
   } catch (error) {
    console.log(error)
   }
}

const register = async(req, res) => {
    try{
        var email = req.body.email;
        var name = req.body.name;
        var phone = req.body.phone;
        var password = req.body.password;
        await addUser(email,name,phone,password);
    } catch(error){
        console.error(error)
    }
}

const logIn = async(req, res) => {
    try {
    
        var email = req.body.email;
        var password = req.body.password;
        if(email === 'admin@gmail.com' && password === 'admin@@'){
            let results = await getAllAdmin();
          res.render('homeAdmin.ejs',{listAdmins: results})
        }
        var user = await loginUser(email,password);
        const userInfo = user[0][0];
        // console.log(userInfo.name)
        if(!userInfo) {
          return 
            
        }
        // if( !email || !password){
        //     alert('Bạn Đã Nhập Sai')
        // }
        // else{
            
        localStorage.setItem('loginInfo', userInfo.name);
        let results = await getAllAdmin();
        res.render('homeUser.ejs',{listAdmins: results, userName: userInfo.name})
        // }
        

    } catch (error) {
        console.error(error)
    }
}

const getEmailUser= async(req,res)=>{
    var email= req.body.email;
    // let emailUser=await getUserByEmail(email)
    // res.render('homeUser.ejs',{ad:emailUser});
    let results = await getUserByEmail(email);
    res.render('homeUser.ejs',{listAdmins: results})
}
const getHomepageCart =async(req,res)=>{
       let id = req.body.id;
       let tensua= req.body.tensua;
       let giatien = req.body.giatien;
       let loaisua = req.body.loaisua;
       let trongluong = req.body.trongluong;
       let tensanpham = req.body.tensanpham;
       let sl = req.body.sl;
       let thanhtien = req.body.thanhtien;
       let tongtien = req.body.tongtien;

       let results= await getValuesProduct(id,tensua,giatien,loaisua,trongluong,tensanpham,sl,thanhtien,tongtien)
       res.render('cart-items.ejs',{listAdmins:results})
}
// const getIdCart = async(req,res)=>{
//     // let id = req.body.id
//     //logic addb 
//     res.redirect("/login-milk");
// }
// const removeUser = async(req,res)=>{
//     localStorage.removeItem("loginInfo");
//     res.redirect('/')
// }
module.exports ={
    getHomepage,
    postCreateAdmin,
    // getCreatePage,
    getLoginPage,
    getRegsiterPage,
    // getInformationPage,
    // getUpdatePage,
    postUpdateUser,
    // getAddMlikPage,
    postHandleRemoveUser,
    register,
    logIn,
    getEmailUser,
    // getInformationUserPage,
    // getListCustomers,
    // getListMilk,
    getHomepageCustomer,
    getHomepageMilk,
    getHomepageCart,
    // getIdCart,
    // removeUser
}