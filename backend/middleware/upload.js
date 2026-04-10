const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
if (process.env.CLOUDINARY_CLOUD_NAME) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}

// Ensure local uploads directory exists
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage logic
let storage;

if (process.env.NODE_ENV === 'production' && process.env.CLOUDINARY_CLOUD_NAME) {
    // In production with Cloudinary, use memory storage
    storage = multer.memoryStorage();
} else {
    // Default to disk storage
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadsDir);
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
        }
    });
}

// File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|ppt|pptx|xls|xlsx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only images, PDFs, and documents are allowed.'));
    }
};

// Configure multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: fileFilter
});

// Cloudinary conversion middleware
const handleCloudinaryUpload = async (req, res, next) => {
    if (!req.file || (process.env.NODE_ENV !== 'production' && !process.env.FORCE_CLOUDINARY)) {
        return next();
    }

    if (!process.env.CLOUDINARY_CLOUD_NAME) {
        console.warn('Cloudinary not configured, skipping upload');
        return next();
    }

    try {
        const fileBase64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        const result = await cloudinary.uploader.upload(fileBase64, {
            folder: 'dr_aitd_uploads',
            resource_type: 'auto'
        });

        // Replace file info with Cloudinary info
        req.file.path = result.secure_url;
        req.file.filename = result.public_id;
        req.file.isCloudinary = true;
        next();
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        next(error);
    }
};

module.exports = { upload, handleCloudinaryUpload };