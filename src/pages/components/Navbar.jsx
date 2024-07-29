import React from 'react';
import { ShoppingCart, KeyboardArrowDown } from '@mui/icons-material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import bgImage from "../../assets/images/amazon-logo.png";
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
  return (
    <>
      <div className="bg-amazon_blue p-1 flex flex-col sm:flex-row items-center justify-between">
        <div className="hover:border-white border-2 border-transparent">
          <button>
            <img src={bgImage} alt="Amazon Logo" className="w-12" />
          </button>
        </div>

        <div>
          <button className="hover:border-white border-2 border-transparent flex items-center text-white ml-5">
            <FmdGoodOutlinedIcon />
            <div className="flex flex-col">
              <p className="leading-3 text-sm">Deliver to</p>
              <p className="font-extrabold text-sm">Turkey</p>
            </div>
          </button>
        </div>

        <div className="ml-5 flex-grow flex items-center bg-slate-200 rounded-md">
          <FormControl>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: 'category',
                id: 'uncontrolled-native',
                style: { fontSize: 'small' }
              }}
              className="ml-1 bg-slate-200 rounded-l-md"
            >
              <option value={1}>All Departments</option>
              <option value={4}>Arts & Crafts</option>
              <option value={5}>Automotive</option>
              <option value={6}>Baby</option>
              <option value={7}>Beauty & Personal Care</option>
              <option value={8}>Books</option>
              <option value={9}>Boys' Fashion</option>
              <option value={10}>Computers</option>
              <option value={11}>Deals</option>
              <option value={12}>Digital Music</option>
              <option value={13}>Electronics</option>
              <option value={14}>Girl's Fashion</option>
              <option value={15}>Health & Household</option>
              <option value={16}>Home & Kitchen</option>
              <option value={17}>Industrial & Scientific</option>
              <option value={18}>Kindle Store</option>
              <option value={19}>Luggage</option>
              <option value={20}>Men's Fashion</option>
              <option value={21}>Movies & TV</option>
              <option value={22}>Music, CDs & Vinyl</option>
            </NativeSelect>
          </FormControl>
          <input
            className="p-2 h-9 flex-grow focus:outline-none px-4 text-xs rounded-r-md"
            type="text"
            placeholder="Search Amazon"
          />
          <div className="p-2 h-9 flex items-center bg-yellow-400 hover:bg-yellow-500 rounded-r-md">
            <SearchIcon className='m-3' />
          </div>
        </div>

        <div className="flex items-center space-x-4 mx-4 text-white">
          <button className="hover:border-white border-2 border-transparent flex flex-col items-center text-sm">
            <p>Hello, Sign in</p>
            <p className="font-extrabold flex items-center">
               Account & Lists 
              <KeyboardArrowDown />
            </p>
          </button>

          <button className="hover:border-white border-2 border-transparent flex flex-col items-center text-sm">
            <p>Returns</p>
            <p className="font-extrabold">& Orders</p>
          </button>

          <button className="hover:border-white border-2 border-transparent relative flex items-center">
            <ShoppingCart className="h-10 text-white" />
            <p className="absolute top-0 right-0 md:right-10 w-4 bg-yellow-400 text-center rounded-full text-black font-bold text-xs">0</p>
            <p className="text-sm mt-2">Basket</p>
          </button>
        </div>
      </div>

      <div className="bg-amazon_menu_dark_blue text-white text-sm p-2 flex flex-wrap space-x-4">
        <div className="hover:border-white border-2 border-transparent">
          <button>
            <MenuIcon />
            All
          </button>
        </div>
        <button className="hover:border-white border-2 border-transparent">Today's Deals</button>
        <button className="hover:border-white border-2 border-transparent">Buy Again</button>
        <button className="hover:border-white border-2 border-transparent">Gift Cards</button>
        <button className="hover:border-white border-2 border-transparent">Esra's Amazon.com</button>
        <button className="hover:border-white border-2 border-transparent">Customer Service</button>
        <button className="hover:border-white border-2 border-transparent">Sell</button>
        <button className="hover:border-white border-2 border-transparent">Browsing History</button>
        <button className="hover:border-white border-2 border-transparent">Registry</button>
      </div>
    </>
  );
};

export default Navbar;
