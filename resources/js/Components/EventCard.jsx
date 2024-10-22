import { useState, useEffect } from "react"

export default function EventCard(){
    const [event, setEvent] = useState({})
    useEffect(()=>{



    },[])

    return(
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ycEVWSEHCfTxN3dpqji-azfeOOVg8NNldw&s"
            alt="Event 1"
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h3 className="text-xl font-bold text-amber-500">
                Rudens Latvijā
            </h3>
            <p className="mt-4 text-gray-300">
                Rudens krāšņums ,atrakciajs bērniem ,
                muzikanti un citas izklaidējošas lietas ,
                katrai ģimenei!
            </p>
            <p className="mt-6 text-amber-400 font-semibold">
                Datums: 2024. gada 10.-12. aprīlis
            </p>
        </div>
    </div>
    )
}