import {mongoose, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile:{
            type: String,  //cloudinary url
            required: true,
        },
        thumbnail:{
            type: String,  //cloudinary url
            required: true,
        },
        title:{
            type: String,  
            required: true,
        },
        discription:{
            type: String,
            required: true,
        },
        duration:{
            type: String,
            required: true,
        },
        views:{
            type: String,
            required: true,
        },
        isPublish:{
            type: String,
            required: true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        
    },
    {
        timeseries: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)

export default User = mongoose.model("Video",videoSchema)