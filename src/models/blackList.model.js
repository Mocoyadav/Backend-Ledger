const mongoose = require("mongoose");


const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true,"Token is required to blacklist"],
        unique: [ true,"Token is already blacklist" ]

    }
}, {
    timestamp: true

})

tokenBlacklistSchema.index({ createdAt: 1 }, {
    expireAfterSeconds: 60 * 60 * 24 *3 //3 Days
})

const tokenBlackListModel = mongoose.model("tokenBlackList", tokenBlacklistSchema)

module.exports = tokenBlackListModel;