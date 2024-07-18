export default function ProductCard({path, name, info, price}) {
    return (
        <div className="w-full h-[280px] flex flex-col items-center justify-center rounded-2xl border border-gray-100 overflow-hidden">
            <img src={path} className="w-full h-1/2 object-cover"/>
            <div className="w-full h-1/2 px-4 py-4 flex flex-col gap-1">
                <h3 className="font-bold text-base">{name}</h3>
                <p className="text-sm text-gray-500">{info}</p>
                <p className="font-bold text-base">{price}</p>
                <button className="bg-black text-white text-xs p-1 w-11 rounded-xl">담기</button>
            </div>
        </div>
    )
}