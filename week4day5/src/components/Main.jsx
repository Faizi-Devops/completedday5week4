import { useState } from "react";
import Data from "./data";

const Main = () =>{
    const [data,setData]=useState(Data);
    const [alling,setAlling]=useState([])
    console.log(data)
    const ongetValue = (value) => {
        if (!alling.includes(value)) {
          setAlling((prevAlling) => [...prevAlling, value]);
        }
      };
    console.log(alling)
    const filteredData = data.filter(item =>
        alling.every(lang => item.languages.includes(lang))
      );
      const clearAlling = () => {
        setAlling([]);
      };
      const removeValue = (valueToRemove) => {
        const updatedAlling = alling.filter((value) => value !== valueToRemove);
        setAlling(updatedAlling);
      };
    
    return(
        <div className="bgcolor container mx-auto">
            
            
            <div className="backimage  ">
                <div className="lg:px-[6.5rem] md:px-[3rem] px-[0.5rem]  pt-[7.8rem]  mx-auto">

                

<div className="relative mb-[4rem]">
  {/* Generating buttons based on filteredValues */}
  <div className="flex absolute inset-y-0 left-0 items-center lg:pl-[2rem] md:pl-[2rem] pl-[0.3rem] ">
    {alling.map((value, index) => (
      <div key={index} className="flex items-center space-x-2 lg:pl-[2rem]">
        <span className="bg-[#effafa] text-[#5ba4a4] px-2 py-1 text-xs">{value}</span>
        <button onClick={() => removeValue(value)}>
          <span className="bg-[#5ba4a4] text-white px-2 hover:bg-black">X</span>
        </button>
      </div>
    ))}
  </div>

  {/* Input field */}
  {
    alling.length!==0?<input
    type="text"
    id="first_name"
    className="pl-20 bg-gray-50 inputbg h-[4rem] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    disabled
  />:""}
  
  
  {/* Clear button */}
  {
    alling.length!==0?<span onClick={clearAlling} className="absolute inset-y-0 lg:pr-[4.5rem] hover:underline text-[#5ba4a4] right-0 flex items-center pr-3 font font-bold cursor-pointer">
    Clear
  </span>:""
  }
  
</div>



                </div>
                {
                    filteredData?.map((value,index)=>{
                        return( <div className="lg:px-[6.5rem] md:px-[3rem] px-[0.5rem] pt-5 md:pt-0  container mx-auto pb-[1rem]">
                
                <a
                className={`block cardshadow max-w-full lg:mt-12    ${
                  value.featured
                    ? 'border-l-4 border-[#5ba4a4]'
                    : 'border border-gray-200'
                } lg:py-10 md:py-5 md:px-5  lg:px-16 px-3 py-3 mt-[2rem] md:mt-[0rem] bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
              >

                                <div className="flex justify-between md:flex-col lg:flex-row flex-col">
                                    <div className="flex flex-col lg:flex-row md:flex-row">
                                        <div className="mt-[-55px] lg:pt-[50px] md:pt-[50px]">
                                            <img src={value.logo} alt="" />
                                            
                                        </div>
                                        <div className="lg:pl-10 md:pl-10">
                                        <div className="flex font-extrabold">
  <p className="text-[#5ba4a4]">{value.company}</p>
  {value.featured ? (
    <>
      <span className="bg-[#5ba4a4] text-white lg:ml-[0.7rem] md:ml-[0.7rem] ml-[0.7rem]  text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 pt-[0.2rem]">
        New
      </span>
      <span className="bg-[#2c3a3a] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 pt-[0.2rem]">
        Featured
      </span>
    </>
  ) : (
    ""
  )}
</div>
                                            
                                            <p className="font font-bold pt-[0.5rem]">{value?.position}</p>
                                            <p className="text-[#7b8e8e] text-[0.875rem] pt-[0.5rem]">{value.postedAt } <b>.</b> {value.contract} <b>.</b> {value.location}</p>
                                        
                                        </div>
                                        
                                    </div>
                                    <hr className="text-black block md:hidden " style={{ color: 'red !important',marginTop:"3px" }} />

                                    <div className="flex md:pl-32 lg:pl-0 md:pt-2 pt-3 lg:pt-0">
  {value.languages.map((language, index) => (
    <span onClick={()=>ongetValue(language)}
      key={index}
      className="bg-blue-100 pt-[0.3rem] lg:mt-[2rem] text-[#5ba4a4] bg-[#effafa] hover:cursor-pointer hover:bg-[#5ba4a4] hover:text-white text-xs font-medium me-2 h-7 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
    >
      {language}
    </span>
  ))}
</div>
                                     

                                </div>
                               
                               </a>
                               
                            
                            
                            
                                            </div>

                        )
                    })
                }
               
            


            </div>
            




        </div>
    )
}
export default Main;
