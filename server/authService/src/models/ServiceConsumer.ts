import mongoose from 'mongoose';

const serviceConsumerSchema = new mongoose.Schema(
    {
        accountVerified: {
            type: Boolean,
            default: false,
            select: false,
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        countryCode: {
            type: Number,
            required: true
        },
        contactNumber: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            select: false,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const ServiceConsumer = mongoose.model('ServiceConsumer', serviceConsumerSchema);
export default ServiceConsumer;