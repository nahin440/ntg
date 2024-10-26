import './footer.css'
import footerImg from '../../assets/image/logo-footer.png';

const Footer = () => {
    return (
        <div>
            <div className="text-center space-y-5 footer-bg mt-5 md:w-10/12 w-11/12 mx-auto py-16 translate-y-28 mt[-30px] rounded-2xl">
                <h1 className=" mx-18 text-2xl font-bold">Subscribe to our Newsletter</h1>
                <h1 className="text-gray-700 mx-20 ">Get the latest updates and news right in your inbox!</h1>
                
                <div className="flex justify-center gap-3 items-center">
                    
                    <div className=" rounded-md shadow-sm w-56">
                        <input id="email" name="email" type="email" placeholder="Email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <button className="flex items-center gap-2 p-2 bg-lime-400 rounded-lg border text-sm font-bold " >Subscribe</button>
                    
                </div>
                
            </div>





         
        </div>
    );
};

export default Footer;