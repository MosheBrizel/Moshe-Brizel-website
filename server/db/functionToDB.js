import Ip from "./models/Schema.js";

export async function addToDB(objectUser) {
  // creat a object to add to do DB.
  const addUser = new Ip(objectUser);

  try {
    let responsAddIp = await addUser.save();
    return true;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function allDB() {
  try {
    const allIps = await Ip.find({});
    console.log(allUsers);
    return allUsers;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getOneIp(objectUser) {
  try {
    return await Ip.findOne(objectUser);
  } catch (error) {
    return undefined;
  }
}

export async function updeteOneIp(email, objectUpdate) {
  try {
    const resDB = await Ip.updateOne({ email: email }, { $set: objectUpdate });
    return true
  } catch (error) {
    return false
  }
}

export async function getRowsfromAllIps(stringRows){
  try {
    const resDB = await Ip.find({}, stringRows)
    return resDB
  } catch (error) {
    return error
  }
}
