import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  hostelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel', required: true },
  roomNumber: { type: String, required: true, trim: true }, 
  floor: { type: Number, required: true },
  area: { type: Number, required: true, min: 10 },          
  price: { type: Number, required: true, min: 500000 },     
  status: {
    type: String,
    enum: ['Trống', 'Đang thuê', 'Đang sửa'],
    default: 'Trống'
  },
  amenities: [{ type: String }], 
  lastElectricIndex: { type: Number, default: 0 }, 
  lastWaterIndex: { type: Number, default: 0 }     
}, { timestamps: true });

export default mongoose.model('Room', roomSchema);