import logo from './logo.svg';
import './App.css';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube,AiFillAndroid} from 'react-icons/ai'
import my  from './assert/my.jpg'
import design from './assert/design.png'
import code from './assert/code.png'
import consulting from './assert/consulting.png'
import web1 from './assert/web1.png'
import web2 from './assert/web2.png'
import web3 from './assert/web3.png'
import web4 from './assert/web4.png'
import web5 from './assert/web5.png'
import web6 from './assert/web6.png'
import { useState } from 'react';
 

function App() {

  const [darkmode, setdarkmode] = useState(false)
  return (
    <div className="bg-gradient-to-r from-grey-300 to-white-700  ">
    <div className={darkmode ? 'dark': ''}></div>
      <main className='bg-white px-10 md:px-20 lg:40px sm: bg-gradient-to-l from-red-300 to-yellow-700 text-white'>
          <section className=' min-h-screen' >
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-lg '>Dixon</h1>
              <ul className='flex items-center'>
                <li>
                <BsFillMoonStarsFill   onclick ={ () => setdarkmode(!darkmode)} className='cursor-pointer text-2xl'/>
                </li>
                <li>
                <a  className='bg-gradient-to-r from-cyan-500 to-cyan-700 bg-red-500 text-white px-4 py-4 rounded-md ml-8 ' href="href">
                Resume
                </a></li>
              </ul>
            </nav>

            <div className='text-center p-10 py-10'>
              <h2 className='text-5xl text-teal-500 font-medium md:text-xl'>Dixon Afreh Frimpong</h2>
              <h3 className='text-2xl py-2'>Developer and a Designer</h3>
              <p className='text-md py-5 leading-8 text gray-800 md:text-lg max-w-xl mx-auto  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magnam!</p>
            </div>
            <div className='text-5xl justify-center gap-16 py-3 text-gray-500 flex'>
            <a href="https://"><AiFillAndroid /></a>
            <a href="https://"><AiFillLinkedin /></a>
            <a href="https://"><AiFillYoutube /></a>
            {/* <a href="https://"><AiFillTwitterCircle /></a> */}

            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-98 md:w-98'>

              <img src={my} layout='fill' className='rounded-xl w-80 h-80'/>

            </div>
          </section>



          {/* Section 2 */}

          <section>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-3xl py-1'>Services  I  offer</h3>
              <p className='text-md py-2 leading-8  text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente illum laborum veritatis tempora animi?
              <span className='text-red-400 '>Bmpt solutions</span>Lorem ipsum dolor sit amet.
              <span className='text-yellow-900'>Ablekumah</span>Lorem ipsum dolor sit amet.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente illum laborum veritatis tempora animi?
              <span className='text-red-400'>Bmpt solutions</span>Lorem ipsum dolor sit amet.
              <span className='text-yellow-900'>Ablekumah</span>Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className='lg:flex gap-10 md:flex gap-10'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <img src={code}  alt=""  width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
                <p className='py-2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nemo consequatur sunt commodi, suscipit ratione aperiam ad mollitia fuga nihil.
                </p>
                <h4 className='py-4 text-teal-600  text-white'>Design tools i use</h4>
                <p className='text-gray-800 py-1  text-white'>Photoshop</p>
                <p className='text-gray-800 py-1  text-white'>Figma</p>
                <p className='text-gray-800 py-1  text-white'>Excel</p>
                <p className='text-gray-800 py-1  text-white'>Illustrator</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <img src={design}  alt=""  width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2  text-white'>Beautiful designs</h3>
                <p className='py-2'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nemo consequatur sunt commodi, suscipit ratione aperiam ad mollitia fuga nihil.
                </p>
                <h4 className='py-4 text-teal-600  text-white'>Design tools i use</h4>
                <p className='text-gray-800 py-1  text-white'>Photoshop</p>
                <p className='text-gray-800 py-1  text-white'>Figma</p>
                <p className='text-gray-800 py-1  text-white'>Excel</p>
                <p className='text-gray-800 py-1  text-white'>Illustrator</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <img src={consulting}  alt=""  width={100} height={100}/>
                <h3 className='text-lg font-medium pt-8 pb-2  text-white  text-white'>Beautiful designs</h3>
                <p className='py-2  text-white'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nemo consequatur sunt commodi, suscipit ratione aperiam ad mollitia fuga nihil.
                </p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className='text-gray-800 py-1  text-white'>Photoshop</p>
                <p className='text-gray-800 py-1  text-white'>Figma</p>
                <p className='text-gray-800 py-1  text-white'>Excel</p>
                <p className='text-gray-800 py-1  text-white'>Illustrator</p>
              </div>
            </div>
            <div>
            <h3 className='text-3xl py-1'>Services  I  offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente illum laborum veritatis tempora animi?
              <span className='text-red-400'>Bmpt solutions</span>Lorem ipsum dolor sit amet.
              <span className='text-yellow-900'>Ablekumah</span>Lorem ipsum dolor sit amet.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800  text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sapiente illum laborum veritatis tempora animi?
              <span className='text-red-400'>Bmpt solutions</span>Lorem ipsum dolor sit amet.
              <span className='text-yellow-900'>Ablekumah</span>Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <img src={web1} alt=""  className='rounded-lg object-cover' width={'100%'} height={'100' }/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web2} alt=""  className='rounded-lg object-cover' width={'100%'} height={'100' }/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web3} alt=""  className='rounded-lg object-cover' width={'100%'} height={'100' }/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web4} alt=""  className='rounded-lg object-cover' width={'100%'} height={'100' }/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web5} alt=""  className='rounded-lg object-cover' width={'100%'} height={'100' }/>
              </div>
              <div className='basis-1/3 flex-1'>
                <img src={web6} alt=""  className='rounded-lg object-cover' width={'100%'} height={'100' }/>
              </div>
            </div>
          </section>
      </main>


      
    </div>
  );
}

export default App;
