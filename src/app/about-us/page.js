import React from 'react'
import BreadCrums from '../Components/Common/BreadCrums/BreadCrums'
import CustumersSay from '../Components/Common/CustumersSay/CustumersSay'
export const metadata = {}
export default function Page() {
  metadata.title='About Us'
  return (
    <>
      <section>
        <BreadCrums title="About Us"/>

        <div className='max-w-[1320px] lg:mx-30'>
          <figure>
            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" className='w-fit h-fit mx-auto'/>
          </figure>
          <div className='grid gap-5 text-center my-5'> 
            <h1 className='text-3xl font-poppins text-black font-bold'>Welcome to Monsta!</h1>
            <p className='font-outfit text-[16px] text-gray-600'>Welcome to Monsta!
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
            </p>
            <p className='text-amber text-lg font-bold font-upright'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
          </div>
        </div>

        <div className='my-20'>
          <h1 className='text-3xl text-center font-bold font-poppins my-5'>Why chose us?</h1>
          <div className='grid-cols-1 lg:flex lg:mx-20 gap-5'>
            <div>
              <figure>
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg' className='mx-auto'/>
              </figure>
              <p className='text-[15px] font-semibold font-outfit my-4 text-center'>100% Money Back Guarantee</p>
              <p className='text-[15px] text-gray-500 font-outfit text-center'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
            </div>

            <div>
              <figure>
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg' className='mx-auto'/>
              </figure>
              <p className='text-[15px] font-semibold font-outfit my-4 text-center'>Online Support 24/7</p>
              <p className='text-[15px] text-gray-500 font-outfit text-center'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
            </div>

            <div>
              <figure >
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg' className='w-full h-fit'/>
              </figure>
              <p  className='text-[15px] font-semibold font-outfit my-4 text-center'>100% Money Back Guarantee</p>
              <p  className='text-[15px] text-gray-500 font-outfit text-center'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
            </div>
          </div>
        </div>

        <div className='  grid-cols-1 lg:flex lg:mx-25 '> 
            <div>
              <figure>
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg' className='w-full h-fit'/>
              </figure>
              <p  className='text-[15px] font-semibold font-outfit my-4 text-center'>What Do We Do?</p>
              <p  className='text-[15px] text-gray-500 font-outfit text-center'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
            </div>

            <div>
              <figure>
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg' className='w-full h-fit'/>
              </figure>
              <p  className='text-[15px] font-semibold font-outfit my-4 text-center'>Our Mission</p>
              <p  className='text-[15px] text-gray-500 font-outfit text-center'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
            </div>

            <div>
              <figure>
                <img src='https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg' className='w-full h-fit'/>
              </figure>
              <p  className='text-[15px] font-semibold font-outfit my-4 text-center'>History Of Us</p>
              <p  className='text-[15px] text-gray-500 font-outfit text-center'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
            </div>
        </div>

        <CustumersSay/>
      </section>
    </>
  )
}
