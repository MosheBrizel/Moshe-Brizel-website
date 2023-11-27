import mongoose from "mongoose";

const ipSchema = new mongoose.Schema({
  ip: {
    type: Object,
    required: true,
  }
});

const Ip = mongoose.model("Ip", ipSchema);
export default Ip;
