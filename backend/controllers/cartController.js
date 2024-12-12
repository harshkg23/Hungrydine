import userModel from '../models/userModel.js';

//add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.json({
                success: false,
                message: "USER NOT FOUND"
            })
        }
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: cartData });
        res.json({
            success: true,
            message: "Added to Cart"
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "INTERNAL SERVER ERROR"
        })
        
    }
}



//remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: cartData });
        res.json({
            success: true,
            message: "Removed from Cart"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "INTERNAL SERVER ERROR"    
        })
        
    }
}



//get user cart
const getCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({
            success: true,
            cartData: cartData
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "INTERNAL SERVER ERROR"
        })
        
    }
}


export { addToCart, removeFromCart, getCart };