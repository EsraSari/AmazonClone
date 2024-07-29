import React from 'react'
import bgImage from "../../assets/images/amazon-logo.png"
import enLogo from "../../assets/images/language_en.png"
import { FormControl, NativeSelect } from '@mui/material'
import { styled } from '@mui/system'

const WhiteArrowSelect = styled(NativeSelect)({
  '& .MuiNativeSelect-icon': {
    color: 'white'
  }
})

const Footer = () => {
  return (
    <>
      <div className="bg-amazon_blue text-white py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Get to Know Us</h4>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Amazon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Investor Relations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Amazon Devices</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Amazon Science</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Make Money with Us</h4>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Sell on Amazon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sell on Amazon Business</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sell apps on Amazon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sell Your Apps on Amazon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Become an Affiliate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Advertise Your Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Host an Amazon Hub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">›See More Make Money with Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Amazon Payment Products</h4>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Amazon Business Card</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shop with Points</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Reload Your Balance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Amazon Currency Converter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Let Us Help You</h4>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Amazon and COVID-19</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Your Account</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Your Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Rates & Policies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns & Replacements</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Manage Your Content and Devices</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white w-full mt-8"></div>
        <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 p-5'>
          <img src={bgImage} alt="Amazon Logo" className="w-32" />
          <FormControl>
            <WhiteArrowSelect
              defaultValue={1}
              inputProps={{
                name: 'category',
                id: 'uncontrolled-native',
                style: { color: 'white', margin: '1px', paddingLeft: '5px', fontSize:'medium'}
              }}
              className="text-sm border border-white w-full"
            >
              <option className="text-black bg-white" value={1}>English</option>
              <option className="text-black bg-white" value={2}>Espanol</option>
              <option className="text-black bg-white" value={3}>Turkish</option>
            </WhiteArrowSelect>
          </FormControl>
          <div className='border-t border border-white p-2 text-sm h-9 w-full'>TRY Turkish Lira</div>
          <div className='border-t border border-white p-2 h-9 flex w-full'>
            <div className="w-12 sm:w-8"><img src={enLogo} alt="Language Logo" /></div>
            <div className='text-xs sm:text-sm text-left ml-2'>United State</div>
          </div>
        </div>
      </div>

      <div className='bg-amazon_menu_dark_blue text-white py-5 px-8'>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-xs">
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Amazon Music</p>
              <p className="text-gray-400">Stream millions of songs</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Amazon Ads</p>
              <p className="text-gray-400">Reach customers wherever they spend their time</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">6pm</p>
              <p className="text-gray-400">Score deals on fashion brands</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">AbeBooks</p>
              <p className="text-gray-400">Books, art & collectibles</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">ACX</p>
              <p className="text-gray-400">Audiobook Publishing Made Easy</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Sell on Amazon</p>
              <p className="text-gray-400">Start a Selling Account</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">AmazonGlobal</p>
              <p className="text-gray-400">Ship Orders Internationally</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Home Services</p>
              <p className="text-gray-400">Experienced Pros Happiness Guarantee</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Amazon Web Services</p>
              <p className="text-gray-400">Scalable Cloud Computing Services</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Audible</p>
              <p className="text-gray-400">Listen to Books & Original Audio Performances</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Box Office Mojo</p>
              <p className="text-gray-400">Find Movie Box Office Data</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Goodreads</p>
              <p className="text-gray-400">Book reviews & recommendations</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">IMDb</p>
              <p className="text-gray-400">Movies, TV & Celebrities</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">IMDbPro</p>
              <p className="text-gray-400">Get Info Entertainment Professionals Need</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Kindle Direct Publishing</p>
              <p className="text-gray-400">Indie Digital & Print Publishing Made Easy</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Prime Video Direct</p>
              <p className="text-gray-400">Video Distribution Made Easy</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Shopbop</p>
              <p className="text-gray-400">Designer Fashion Brands</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Woot!</p>
              <p className="text-gray-400">Deals and Shenanigans</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Zappos</p>
              <p className="text-gray-400">Shoes & Clothing</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Ring</p>
              <p className="text-gray-400">Smart Home Security Systems</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">eero WiFi</p>
              <p className="text-gray-400">Stream 4K Video in Every Room</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Blink</p>
              <p className="text-gray-400">Smart Security for Every Home</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Neighbors App</p>
              <p className="text-gray-400">Real-Time Crime & Safety Alerts</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">Amazon Subscription Boxes</p>
              <p className="text-gray-400">Top subscription boxes – right to your door</p>
            </a>
          </div>
          <div>
            <a href="#" className="hover:underline">
              <p className="font-semibold">PillPack</p>
              <p className="text-gray-400">Pharmacy Simplified</p>
            </a>
          </div>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-1 p-5 text-xs">
          <p><a href="#" className="text-gray-400 hover:text-white">Conditions of Use</a></p>
          <p><a href="#" className="text-gray-400 hover:text-white">Privacy Notice</a></p>
          <p><a href="#" className="text-gray-400 hover:text-white">Consumer Health Data Privacy Disclosure</a></p>
          <p><a href="#" className="text-gray-400 hover:text-white">Your Ads Privacy Choices</a></p>
        </div>
        <p className='text-center text-xs'><a href="#" className="text-gray-400 hover:text-white">© 1996-2024, Amazon.com, Inc. or its affiliates</a></p>
      </div>
    </>
  )
}

export default Footer
