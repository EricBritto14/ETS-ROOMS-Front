import React, { useState } from 'react';
import ModalCadInstructors from '../modals/modalCadInstructor';
import ModalCadRoom from '../modals/modalCadRoom';

const casa = <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8861 1.21065C12.2472 0.929784 12.7528 0.929784 13.1139 1.21065L22.1139 8.21065C22.3575 8.4001 22.5 8.69141 22.5 9V20C22.5 20.7957 22.1839 21.5587 21.6213 22.1213C21.0587 22.6839 20.2957 23 19.5 23H5.5C4.70435 23 3.94129 22.6839 3.37868 22.1213C2.81607 21.5587 2.5 20.7957 2.5 20V9C2.5 8.69141 2.64247 8.4001 2.88606 8.21065L11.8861 1.21065ZM4.5 9.48908V20C4.5 20.2652 4.60536 20.5196 4.79289 20.7071C4.98043 20.8946 5.23478 21 5.5 21H19.5C19.7652 21 20.0196 20.8946 20.2071 20.7071C20.3946 20.5196 20.5 20.2652 20.5 20V9.48908L12.5 3.26686L4.5 9.48908Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12C8.5 11.4477 8.94772 11 9.5 11H15.5C16.0523 11 16.5 11.4477 16.5 12V22C16.5 22.5523 16.0523 23 15.5 23C14.9477 23 14.5 22.5523 14.5 22V13H10.5V22C10.5 22.5523 10.0523 23 9.5 23C8.94772 23 8.5 22.5523 8.5 22V12Z" fill="white"/>
</svg>;

const pessoa = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.46447 15.4645C5.40215 14.5268 6.67392 14 8 14H16C17.3261 14 18.5979 14.5268 19.5355 15.4645C20.4732 16.4021 21 17.6739 21 19V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 18.2044 18.6839 17.4413 18.1213 16.8787C17.5587 16.3161 16.7956 16 16 16H8C7.20435 16 6.44129 16.3161 5.87868 16.8787C5.31607 17.4413 5 18.2044 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 17.6739 3.52678 16.4021 4.46447 15.4645Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="white"/>
</svg>;

const lapis = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3.17163C18.7599 3.17163 18.5222 3.21892 18.3003 3.31081C18.0785 3.4027 17.8769 3.53738 17.7071 3.70716L4.39491 17.0194L3.42524 20.5748L6.9807 19.6052L20.2929 6.29295C20.4627 6.12317 20.5974 5.9216 20.6893 5.69977C20.7812 5.47793 20.8284 5.24017 20.8284 5.00006C20.8284 4.75994 20.7812 4.52218 20.6893 4.30035C20.5974 4.07852 20.4627 3.87695 20.2929 3.70716C20.1231 3.53738 19.9216 3.4027 19.6997 3.31081C19.4779 3.21892 19.2401 3.17163 19 3.17163ZM17.5349 1.46305C17.9994 1.27066 18.4973 1.17163 19 1.17163C19.5028 1.17163 20.0006 1.27066 20.4651 1.46305C20.9296 1.65545 21.3516 1.93745 21.7071 2.29295C22.0626 2.64845 22.3446 3.07049 22.537 3.53498C22.7294 3.99947 22.8284 4.4973 22.8284 5.00006C22.8284 5.50281 22.7294 6.00064 22.537 6.46513C22.3446 6.92962 22.0626 7.35166 21.7071 7.70716L8.20713 21.2072C8.08407 21.3302 7.93104 21.419 7.76314 21.4648L2.26314 22.9648C1.91693 23.0592 1.54667 22.9609 1.29292 22.7072C1.03917 22.4534 0.940838 22.0832 1.03526 21.7369L2.53526 16.2369C2.58105 16.069 2.66986 15.916 2.79292 15.793L16.2929 2.29295C16.6484 1.93745 17.0705 1.65545 17.5349 1.46305Z" fill="white"/>
</svg>;

export function ButtonAdmin() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [cadastroInstrutoresOpen, setCadastroInstrutoresOpen] = useState(false);
    const [cadastroSalaOpen, setCadastroSalaOpen] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const colors = {
        expanded: 'bg-[#9D89E8] hover:bg-[#57449C] rotate-45',
        closed: 'bg-[#57449C] hover:bg-[#3D306C] rotate-0'
    };

    return (
        <div className='relative'>
            <button
                className={`
                    ${colors[isExpanded ? 'expanded' : 'closed']}
                    w-10 h-10 rounded-full transition-all
                    flex flex-col justify-center items-center 
                    absolute top-0 right-0 my-20 mr-16
                `}
                onClick={toggleExpansion}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4V20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M4 12H20"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {isExpanded ? (
                <div className={`absolute top-32 right-0 mr-16 flex flex-col items-center`}>
                    <IconBtn onClick={() => {
                        setCadastroSalaOpen(true);
                    }} label='Cadastrar sala' icon={casa} />
                    <IconBtn onClick={() => {
                        setCadastroInstrutoresOpen(true);
                    }} label='Cadastrar instrutor' icon={pessoa}/>
                </div>
            ): null}
            <ModalCadInstructors open={cadastroInstrutoresOpen} setOpen={setCadastroInstrutoresOpen} />
            <ModalCadRoom open={cadastroSalaOpen} setOpen={setCadastroSalaOpen} />
        </div>
    );
}

function IconBtn({ label, icon, onClick }: { label: string, icon: typeof casa, onClick: React.MouseEventHandler<HTMLButtonElement> | undefined }) {
    return (
        <button onClick={onClick} className="mb-2 flex flex-col items-center justify-center">
            <div className='bg-[#57449C] w-10 h-10 rounded-full text-white flex items-center justify-center hover:bg-[#9D89E8]'>
                {icon}
            </div>
            <span className="text-xs text-center w-10 font-bold">{label}</span>
        </button>
    )
}
