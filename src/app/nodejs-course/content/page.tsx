import {FaAngleRight} from 'react-icons/fa'

interface DayContentI {
    day: string;
    title: string;
    completed: boolean;
}
const DayContent = ({day,title, completed}:DayContentI)=> {
    return (
         <div className="text-base flex justify-between items-center gap-5 bg-black bg-opacity-5 p-1 rounded-md">
                <div className="flex gap-3">               
                    <span className="font-bold">{day}</span>
                    <span>{title}</span>
                </div>
            <input className="cursor-pointer w-[15px] h-[15px]" checked={completed} type="checkbox" />
        </div>
    )
}
const CourseContentPage = () => {
    return (
        <div className="mx-auto w-full md:w-11/12 pb-[50px]">
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl">Course de NodeJS version 1.0 </h1> 
                <span>id: 38294892</span>
            </div>
            {/*part 1*/}
            <div className="font-semibold mt-5 text-xl flex flex-col gap-3">
                <h2>Primera Parte</h2>
                {/*week 1*/}
                <div className="ml-2 bg-black bg-opacity-5">
                    <div className="flex items-center cursor-pointer bg-black bg-opacity-10 rounded-b-xl"><span><FaAngleRight/></span> <h3 className="text-lg font-semibold">Semana 1: fundamentos de JavaScript</h3></div>
                    <div className="mx-2 flex flex-col gap-3 mt-2">
                        <span className="text-sm">Fundamentos de JavaScript</span>
                        <div className="flex flex-col gap-3">
                             <DayContent day="Day 1" title="Introducción al Curso, Fundamentos de JavaScript" completed={true} />
                             <DayContent day="Day 2" title="Introducción al Curso, Fundamentos de JavaScript" completed={false} />
                             <DayContent day="Day 3" title="Introducción al Curso, Fundamentos de JavaScript" completed={true} />
                             <DayContent day="Day 2" title="Introducción al Curso, Fundamentos de JavaScript" completed={false} />
                             <DayContent day="Day 2" title="Introducción al Curso, Fundamentos de JavaScript" completed={true} />
                        </div>    
                    </div>
                </div>
                <div className="ml-2 bg-black bg-opacity-5">
                    <div className="flex items-center cursor-pointer bg-black bg-opacity-10 rounded-b-xl"><span><FaAngleRight/></span> <h3 className="text-lg font-semibold">Semana 1: fundamentos de JavaScript</h3></div>
                    <div className="mx-2 flex flex-col gap-3 mt-2">
                        <span className="text-sm">Fundamentos de JavaScript</span>
                        <div className="flex flex-col gap-3">
                             <DayContent day="Day 1" title="Introducción al Curso, Fundamentos de JavaScript" completed={true} />
                             <DayContent day="Day 2" title="Introducción al Curso, Fundamentos de JavaScript" completed={false} />
                             <DayContent day="Day 3" title="Introducción al Curso, Fundamentos de JavaScript" completed={true} />
                             <DayContent day="Day 2" title="Introducción al Curso, Fundamentos de JavaScript" completed={false} />
                             <DayContent day="Day 2" title="Introducción al Curso, Fundamentos de JavaScript" completed={true} />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseContentPage;