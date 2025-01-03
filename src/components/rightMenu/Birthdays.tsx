import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-red-300 text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-700">Birthdays</span>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/29715958/pexels-photo-29715958/free-photo-of-wanita-mengambil-foto-di-pantai-pinggir-laut.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">Mark Nolan</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-emerald-500 text-white text-sm px-2 py-1 rounded-md hover:shadow-red-300 cursor-default">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4 ">
        <Image src="/gift.png" alt="gift" width={24} height={24} />
        <Link href="" className="flex flex-col gap-1 text-xs hover:shadow-red-300 cursor-default">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-700">
            See other 5 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
