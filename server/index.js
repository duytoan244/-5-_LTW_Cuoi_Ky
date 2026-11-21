import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'API Server dang hoat dong!' });
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Lỗi máy chủ nội bộ',
  });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Kết nối MongoDB thành công');
    app.listen(PORT, () => console.log(`Server đang chạy tại cổng ${PORT}`));
  })
  .catch((err) => console.error('Lỗi kết nối MongoDB:', err));