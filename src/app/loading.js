import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-lvh absolute top-0  right-0  w-full z-40 bg-black" >
            <Image className="animate-pulse" src={'/crowd-logo.png'} width={200} height={100} alt="" />
        </div>
    );
}

export default Loading;