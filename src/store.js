import { configureStore, createSlice } from "@reduxjs/toolkit";




const productSlice = createSlice({
    name: "product",
    initialState: {
        veg: [
            { name: "Potato", price: 75, image: "/VegImages/Potato.jpg" },
            { name: "Tomato", price: 90, image: "/VegImages/Tomato.jpg" },
            { name: "Carrot", price: 120, image: "/VegImages/Carrots.jpg" },
            { name: "Cabbage", price: 60, image: "/VegImages/Cabbage.jpg" },
            { name: "Capsicum", price: 200, image: "/VegImages/Capsicum.jpg" },
            { name: "Onion", price: 85, image: "/VegImages/Onion.jpg" },
            { name: "Cauliflower", price: 150, image: "/VegImages/Cauliflower.jpg" },
            { name: "Peas", price: 130, image: "/VegImages/Peas.jpg" },
            { name: "Brinjal", price: 95, image: "/VegImages/Brinjal.jpg" },
            { name: "Spinach", price: 50, image: "/VegImages/Spinach.jpg" },
            { name: "Radish", price: 80, image: "/VegImages/Radish.jpg" },
            { name: "Ginger", price: 250, image: "/VegImages/Ginger.jpg" },
            { name: "Pumpkin", price: 140, image: "/VegImages/Pumpkin.jpg" },
            { name: "Cucumber", price: 60, image: "/VegImages/Cucumber.jpg" },
            { name: "Bitter Gourd", price: 110, image: "/VegImages/BitterGourd.jpg" },
            { name: "Bottle Gourd", price: 100, image: "/VegImages/BottleGourd.jpg" },
            { name: "Drumstick", price: 180, image: "/VegImages/Drumstick.jpg" },
            { name: "Corn", price: 90, image: "/VegImages/Corn.jpg" },
            { name: "Ladyfinger", price: 175, image: "/VegImages/Ladyfinger.jpg" }
        ],
        nonVeg: [
            { name: "Egg Currey", price: 150, image: "/NonVeg/Egg.jpg" },
            { name: "Chicken", price: 180, image: "/NonVeg/Chicken.jpg" },
            { name: "Mutton", price: 750, image: "/NonVeg/Mutton.jpg" },
            { name: "Biryani", price: 780, image: "/NonVeg/Biryani.jpg" },
            { name: "Fish", price: 150, image: "/NonVeg/Fish.jpg" },
            { name: "Prawns", price: 900, image: "/NonVeg/Prawns.jpg" },
            { name: "Goat Meat", price: 800, image: "/NonVeg/Goat.jpg" },
            { name: "Pork", price: 650, image: "/NonVeg/Mutton.jpg" },
            { name: "Beef Khabab Sticks", price: 700, image: "/NonVeg/Beef.jpg" },
            { name: "Omelette", price: 170, image: "/NonVeg/Omelette.jpg" },
            { name: "Mutton Soup", price: 1100, image: "/NonVeg/Soup.jpg" },
            { name: "Egg Burger", price: 270, image: "/NonVeg/Egg Burger.jpg" },
            { name: "Chicken 65", price: 450, image: "/NonVeg/Chicken 65.jpg" },
            { name: "Chicken Mandi", price: 1300, image: "/NonVeg/Mandi.jpg" },
            { name: "Egg Fry", price: 300, image: "/NonVeg/Egg Fry.jpg" },
            { name: "Musroom", price: 850, image: "/NonVeg/Musroom.jpg" },
            { name: "Egg Rice", price: 60, image: "/NonVeg/Egg Rice.jpg" },
            { name: "Sharak", price: 500, image: "/NonVeg/Sharak.jpg" },
            { name: "Egg Biryani", price: 120, image: "/NonVeg/Egg Biryani.jpg" }
        ],
        milk: [
            { name: "Irfan", price: 155, image: "/Milk/Irfan.jpg" },
            { name: "Suguna", price: 70, image: "/Milk/Suguna.jpg" },
            { name: "Amul", price: 50, image: "/Milk/Amul.jpg" },
            { name: "Gokul", price: 90, image: "/Milk/Gokul.jpg" },
            { name: "Govinda", price: 65, image: "/Milk/Govinda.jpg" },
            { name: "Heritage", price: 80, image: "/Milk/Heritage.jpg" },
            { name: "Dodla", price: 86, image: "/Milk/Dodla.jpg" },
            { name: "Nandini", price: 100, image: "/Milk/Nandini.jpg" },
            { name: "Vita", price: 95, image: "/Milk/Vita.jpg" },
            { name: "Milma", price: 110, image: "/Milk/Milma.jpg" },
            { name: "Verka", price: 72, image: "/Milk/Verka.jpg" },
            { name: "Warana", price: 45, image: "/Milk/Warana.jpg" },
            { name: "Keventers", price: 120, image: "/Milk/Keventra.jpg" },
            { name: "Vishaka", price: 130, image: "/Milk/Visakha.jpg" },
            { name: "Shakthi", price: 125, image: "/Milk/Shakthi.jpg" },
            { name: "Nestle", price: 140, image: "/Milk/Nestle.jpg" },
            { name: "Amirthaa", price: 105, image: "/Milk/Amr.jpg" }
            
        ]
    },
    reducers: {}
});

const cartSlice =createSlice({
    name : 'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item =state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
            else {
                state.push({...action.payload,quantity:1})
            }
        },
        increment:(state,action)=>{
            const item =state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
        },
        decrement : (state,action)=>{
            const item =state.find(item=>item.name===action.payload.name);
            if((item)&&(item.quantity>1)){
                item.quantity-=1;
            }
            else{
                return state.filter(item=>item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
          return state.filter(item=>item.name!==action.payload.name);
        },
        clearCart: () => [] 
       
    }
   
})
const purchaseDetailsSlice = createSlice({
    name: 'purchaseDetails',
    initialState: {
        purchaseDetails: {}  // Initialize as an object
    },
    reducers: {
        setPurchaseDetails: (state, action) => {
            state.purchaseDetails = action.payload; // Directly update the purchaseDetails object
        }
    }
});
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false, // Fixed type
        user: localStorage.getItem("username") || "", 
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true; // Fixed typo
            state.user = action.payload;
            localStorage.setItem("username", action.payload); // Store data in localStorage
        },
        logout: (state) => {
            state.isAuthenticated = false; // Fixed typo
            state.user = "";
            localStorage.removeItem("username");
        }
    }
});


// Ragistration slice
const registrationSlice = createSlice({
    name: "registration",
    initialState: { users: [] }, // Store multiple users  with the help of array
    reducers: {
      registerUser: (state, action) => {
        state.users.push(action.payload); // Add new user to the array
      },
    },
  });



// configure the store
const store =configureStore({
    reducer :{product:productSlice.reducer,
             cart :cartSlice.reducer,
             purchaseDetails :purchaseDetailsSlice.reducer,
             auth :authSlice.reducer,
             registration: registrationSlice.reducer
    }
})

//export the store
export default store;
export const {addToCart,increment,decrement,remove,clearCart}=cartSlice.actions;
export const { setPurchaseDetails } = purchaseDetailsSlice.actions;
export const {login,logout}=authSlice.actions;
export const { registerUser } = registrationSlice.actions;
