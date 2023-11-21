const connection= require("../config/database");
const getAllAdmin =async()=>{
    let [results,fields]= await connection.query('select *from Admin');
    return results;
}
const getAllUsers = async()=>{
  let [results,fields]= await connection.query('select * from User');
  return results;
}
const getAllMilk = async()=>{
 const[results,fields]=await connection.query('select * FROM Admin ')
 return results;
}
    
// const getUserByID = async(tensua)=>{
//     let [results,fields]= await connection.query('select *from Admin where tensua=?',[tensua]);
//     let ten = results &&  results.length >0 ? results[0] : {};
//     return ten;
// }
const getUserByEmail = async(tensua)=>{
  let [results,fields]= await connection.query('select *from User where email=?',[email]);
  let email = results &&  results.length >0 ? results[0] : {};
  return email;
}
const CreateAdmin = async(img,tensua, loaisua, giatien,trongluong)=>{
    let [results, fields]=await  connection.query(
        `INSERT INTO Admin (img,tensua, loaisua, giatien,trongluong)
         Values (?, ?, ?, ?,?)`,
         [img,tensua, loaisua, giatien,trongluong],
        );
}
const updateUserById =async(tensua, giatien, loaisua,trongluong,oldName)=>{
  try {
     await  connection.query(
      `UPDATE Admin 
      SET tensua = ?, giatien= ?,loaisua = ?,trongluong =?
      WHERE tensua  = ?`,
      [tensua, giatien, loaisua,trongluong,oldName],
       );
  } catch (error) {
    console.log(error)
  }     
}
const deleteUsertensua = async (tensua) => {
  try {
     await connection.query(
      `DELETE FROM Admin
      WHERE tensua = ?;`,
      [tensua]
    );
    // Kiểm tra số dòng bị ảnh hưởng (nếu số dòng là 0, có thể không có bản ghi nào được xóa).
  } catch (error) {
    console.error("Lỗi trong quá trình xóa dữ liệu:", error);
  }
};

const addUser = async(email,name,phone, password) => {
  try{
    await connection.query(
      `insert into User(email,name,phone, password) values (?, ?,?,?)`,[email,name,phone, password]
    );
  }catch (error) {
    console.error("Lỗi trong quá trình them user:", error);
  }
}

const loginUser = async(email, password) => {
  try {
  return await connection.query(
      `select * from User where email = ? and password = ?`,[email, password]
    );
    // console.log(user);
  } catch (error) {
    console.error("Lỗi trong quá trình dang nhap user:", error);
  }
}
const getValuesProduct = async(id)=>{
 
  let [results, fields]=await connection.query(
    `select *  from Cart as Ca, Admin as ad
    WHERE Ca.tensanpham  = ad.tensua 
    and id =?`,[id]
  );
  return results;
 
}
// const getValuesProduct = async(req,res)=>{
//   let [results,fields]= await connection.query('select *from Cart');
//   return results;
// }
module.exports ={
    getAllAdmin,
    // getUserByID,
    CreateAdmin,
    updateUserById,
    deleteUsertensua,
    addUser,
    loginUser,
    getUserByEmail,
    getAllMilk,
    getAllUsers,
    getValuesProduct
    // getAllUsers
}
