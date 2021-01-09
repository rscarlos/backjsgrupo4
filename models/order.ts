import {Schema} from 'mongoose';

var orderDetailSchema = new Schema({ 
    productName:{
        type: String,
        required: true
    }, 
    productCant:{
        type: Number,
        required: true
    }, 
    productId:{
        type: String,
        required: true
    },
    productTotal:{
        type: Number,
        required: true
    },
    productImg:{
        type: String,
        required: true
    }
})


export var orderSchema = new Schema({
    address_name:{
        type: String,
        required: true
    },
    address_number:{
        type: String,
        required: true
    }, 
    address_reference:{
        type: String,
        required: true
    }, 
    card_ccv:{
        type: String,
        required: true
    }, 
    card_month:{
        type: String,
        required: true
    }, 
    card_name:{
        type: String,
        required: true
    }, 
    card_number:{
        type: String,
        required: true
    }, 
    card_year:{
        type: String,
        required: true
    },  
    orderDate:{
        type: String,
        required: true
    },  
    orderTotal:{
        type: Number,
        required: true
    }, 
    userId:{
        type: String,
        required: true
    }, 
    user_email:{
        type: String,
        required: true
    }, 
    user_name:{
        type: String,
        required: true
    }, 
    user_ape:{
        type: String,
        required: true
    }, 
    user_phone:{
        type: String,
        required: true
    }, 
    order_detail : [
        orderDetailSchema,
        require
    ]
}) 