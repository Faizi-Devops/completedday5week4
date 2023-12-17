const Card = () =>{
    return(
        <div>
            <div className={`green-500 mb-12 md:mb-4 md:flex md:items-center`}>
    <div className={`bg-white flex flex-col w-full md:flex-row  md:justify-between pb-6 md:pb-0 px-4  rounded-e-md shadow-lg`}>
      <div className="md:flex">
      <div className="flex items-center">
        <div className="relative top-[-2rem] md:top-0 w-16 ">
        <img className="" src="" />
        </div>
      </div>
      <div className="-mt-4 md:my-2 md:mx-4 md:py-2">
        <div className="flex flex-wrap md:flex-nowrap">
        <span className="mr-6 text-Desaturated_Dark_Cyan font-bold ">{}</span> 
        {/* {value.new ===true ? <Tag value={"NEW!"}/> : null}
        {value.featured ===true ? <Tag value={"FEATURED"} /> : null} */}
        
        </div>
        <p className="text-Very_Dark_Grayish_Cyan font-bold my-2 md:my-1 cursor-pointer hover:text-Desaturated_Dark_Cyan">{}</p>
        <ul className="flex">
          <li className="text-Dark_Grayish_Cyan text-base md:text-sm ">{}</li>
          <p className="text-gray-400 -mt-1 mx-3">.</p>
          <li className="text-Dark_Grayish_Cyan text-base md:text-sm">{}</li>
          <p className="text-gray-400 -mt-1 mx-2">.</p>
          <li className="text-Dark_Grayish_Cyan text-base md:text-sm">{}</li>
        </ul>
      </div>
      </div>
      <hr className=" mt-4 border-Dark_Grayish_Cyan md:hidden"/>
      <div className="flex flex-wrap md:py-2 md:items-center lg:justify-between">
        </div>
    </div>
    </div>



        </div>
    )
}
export default Card;