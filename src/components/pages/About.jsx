import React from 'react'
import Header from '../Header'
export default function About(props) {
    const {page, setPage, switchPages} = props
    
  return (
    <div className=' text-white '>
        <Header page={page} setPage={setPage} switchPages={switchPages}>
        </Header>

        <div className='flex flex-col justify-center items-center h-[484px] sm:ml-12  gap-10 '>
          <div>
            <h1 className='font-semibold text-5xl  sm:text-6xl'><span className='underline underline-offset-8 decoration-lime-500'>Our</span> <span className='text-lime-500'>Story</span></h1>
          </div>
          <div className='flex flex-col sm:flex-row justify-center items-center  px-2 mb-20'>
            <div className='hidden sm:flex flex-col sm:border-r-4 border-lime-500 pr-2 ml-[-1px]'>
              <h1 className='mb-2 sm:text-3xl underline underline-offset-8 decoration-lime-500'>Crafting Timeless Wooden Furniture</h1>
              <p >At SimpleWood, we believe in the power of nature and craftsmanship. 
                What started as a small workshop with a single craftsman has grown into a passionate team dedicated to creating 
                high-quality wooden furniture that enhances homes and brings comfort to every space.
              </p>
            </div>

            <div className='flex flex-col gap-8'>
              <div className='sm:border-l-4 border-lime-500 sm:pl-10'>
                <h1 className='mb-2 text-center sm:text-left text-2xl sm:text-3xl underline underline-offset-8 decoration-lime-500'>How It All Began</h1>
                <p className='text-center sm:text-left'>Our journey began many years ago with a simple love for wood. Inspired by its natural beauty and strength, 
                  our founder set out to create pieces that were more than just functional — they were works of art. Each chair, table, 
                  or cabinet was crafted with the utmost care, using traditional woodworking techniques passed down through generations.
                </p>
              </div>

              <div className='hidden xl:flex flex-col sm:border-l-4 border-lime-500 sm:pl-10'>
                <h1 className='mb-2 sm:text-3xl underline underline-offset-8 decoration-lime-500'>A Blend of Tradition and Innovation</h1>
                  <p>As we’ve grown, we’ve stayed true to our roots, continuing to use age-old methods of handcrafting while embracing modern innovations. 
                    This blend allows us to create furniture that is not only durable and sustainable but also stylish and adaptable to contemporary living.
                  </p>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}
