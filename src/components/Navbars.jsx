import React from 'react'

export default function Navbars() {
    return (
        <div className='bg-[#091740] w-full '>
            <div className='justify-around flex space-x-14 p-8'>
                <div>
                    <p className=' text-white text-3xl font-extralight '>flavix</p>
                </div>
                <div className='flex space-x-6'>
                    <div>
                        <p className=' text-xl  text-white font-extralight '>chargers calculator</p>
                    </div>
                    <div>
                        <p className=' text-xl  text-white font-extralight '>current converter</p>
                    </div>
                </div>

                <div className=' bg-amber-500 justify-center items-center rounded-sm'>
                    <p className='p-1 m-1 text-black font-semibold text-lg'>Get the App</p>
                </div>
            </div>
            <div className='justify-center  items-center  text-center mt-4'>
                <p className=' font-bold text-2xl text-white pt-4'>Mobile Money Charges Calculator</p>
                <p className=' font-semibold text-lg text-white pt-4'>Calculate mobile money charges fast and easily using orramo's simplified calculator</p>
                <p className=' font-semibold  text-[12px]  text-[#ffff00] pt-4'>Update! Taxes have been included in every transaction for MOMO and OM only</p>

                <div className=' w-full bg-[#091740] justify-center h-24 items-center flex' >
                    <div className=' min-w-[840px] bg-white shadow-2xl   mt-72 border-t-2 border-[#091740e3]'>
                        <div className='  p-4 bg-[#091740] '>
                            <div className='flex justify-evenly mx-12'>
                                <p className=' text-gray-500 font-semibold'>ORANGE MONEY</p>
                                <p className=' text-gray-500 font-semibold'>MTN MOMO</p>
                                <p className=' text-gray-500 font-semibold'>EU MONEY</p>
                            </div>

                        </div>
                        <div className='mx-4  p-4'>
                            <div className=' justify-around flex'>
                            <div>
                                <div className=' border-2 border-gray-400 h-12 rounded-sm w-[250px]'></div>
                                <p className=' text-gray-500 text-sm'>Orange Money</p>
                            </div>

                            <div>
                                <div className=' border-2 border-gray-400 h-12 rounded-sm w-[250px]'></div>
                                <p className=' text-gray-500 text-sm'>Please Select charge type</p>
                            </div>

                            <div className='h-12 rounde-xl bg-amber-600 w-[200px] rounded-lg justify-center items-center flex'>
                                <button>CALCULATE</button>
                            </div>
                            </div>
                         
                            <div className='pt-10'>
                            
                            <div className='pb-4'><p className=' text-2xl  font-bold mx-6 text-start text-[#085779ab]'>Orange Withdrawal Charges:20 Fcfa</p></div>
                            <div className='pb-4'><p className=' text-xl font-bold mx-6 text-start text-[#87129e5e]'>Total Amount To Be In Balance:1020 Fcfa</p></div>
                            <div className='pb-4'><p className=' text-xl font-medium mx-6 text-start text-[#87129e5e]'>Tax:2 Fcfa</p></div>
                        

                    </div>
                        </div>
                       
                    </div>
                </div>



            </div>

        </div>
    )
}
