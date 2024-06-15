const packagesTobeAddedOrUpdated = {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-rate-limit": "^6.6.0",
    "helmet": "^6.0.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.0",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "path": "^0.12.7",
    "plivo": "^4.34.2",
    "two-step-auth": "^1.1.2"
}


console.log(`yarn add ${Object.keys(packagesTobeAddedOrUpdated).join(' ')}`)