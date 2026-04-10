const mongoose = require('mongoose');
const { Admin } = require('./models/Users');
require('dotenv').config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/college-erp");
    const existing = await Admin.findOne({ email: 'admin@system.com' });
    if (existing) {
      console.log('Admin already exists');
    } else {
      const admin = new Admin({
        name: 'Super Admin',
        email: 'admin@system.com',
        username: 'admin',
        password: 'password123',
        phone: '1234567890'
      });
      await admin.save();
      console.log('Admin user created successfully: admin@system.com / password123');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
