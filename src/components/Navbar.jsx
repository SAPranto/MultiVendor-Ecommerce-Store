import DropButton from './short/DropButton.jsx'
import LanguageDrop from './short/LanguageDrop.jsx';
import GroupButtons from './short/GroupButtons.jsx';

const Navbar = () => {
  return (
    <>
    <div className=" bg-green-800 h-12 pt-1 max-[767.98px]:hidden">
      <div className="container mx-auto flex justify-between my-2">
        <div>
          <p className="text-">Hotline: +88 01311805398</p>
        </div>
        <div className="flex gap-5">
          <DropButton/>
          <button className="border px-6 bg-green-700 shadow border-green-700 -mt-1">Forgot Password?</button>
        </div>

        <GroupButtons/>
        <div className='flex gap-4'>
          <button className='border px-6 bg-red-700 shadow border-red-700 -mt-1 hover:bg-red-500 transition duration-300 ease-in-out transform'>Customer</button>
          <LanguageDrop/>
        </div>

      </div>
      </div>
    </>
    
  );
};

export default Navbar;
