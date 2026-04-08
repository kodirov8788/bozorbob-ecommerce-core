import mongoose from 'mongoose'

const connectDB = () => {
    if (process.env.DEMO_MODE === 'true') {
        console.log('--- DEMO MODE ACTIVE: Database connection skipped ---')
        return;
    }

    if(mongoose.connections[0].readyState){
        console.log('Already connected.')
        return;
    }

    if (!process.env.MONGODB_URL) {
        console.error('Error: MONGODB_URL is missing. Please check your .env file or enable DEMO_MODE.')
        return;
    }

    mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) {
            console.error('MongoDB connection error:', err.message)
            return;
        }
        console.log('Connected to mongodb.')
    })
}


export default connectDB