const mongoose = require("mongoose")

const BlogSchema = mongoose.Schema({
    title:{ type: String },
    description:{ type: String },
    timestamp:{ type: String },
    admin:{ type: String },
    likes:{ type: Number },
})

const BlogModel = mongoose.model("allBlog", BlogSchema )

module.exports={
    BlogModel
}