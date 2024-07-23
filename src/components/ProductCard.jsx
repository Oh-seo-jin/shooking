import React, { createContext, useState} from 'react';

export default function ProductCard({path, name, info, price, count, setCount}) {
    const [disabled, setDisabled] = useState(false);
    const handleClick = () => {
        setDisabled(true);
        setCount(count + 1);
    }
    
    return (
        <div className="lg:h-[400px] w-full h-[320px] flex flex-col items-center justify-center rounded-2xl border border-gray-100 overflow-hidden">
            <img src={path} className="w-full h-1/2 lg:h-2/3 object-cover"/>
            <div className="w-full h-1/2 lg:h-1/3 px-4 py-4 flex flex-col gap-1">
                <h3 className="font-bold text-base">{name}</h3>
                <p className="text-sm text-gray-500">{info}</p>
                <p className="font-bold text-base">{price}</p>
                <button onClick={handleClick} className={`bg-black text-white text-xs p-1 w-11 rounded-xl ${disabled ? 'bg-gray-300 text-black font-bold cursor-not-allowed': ''}`} disabled={disabled ? "disabled" : ""}>{disabled ? "담김!" : "담기"}</button>
            </div>
        </div>
    )
}