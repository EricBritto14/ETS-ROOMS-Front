import {
  Button,
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  DialogActions,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import React, { useRef, useState } from 'react';
import { API_URL } from '../../config';
import { useClickOutside } from '../../utils/hooks';

type InfoSalaProps = {
  id_sala: string;
  nome_sala: string;
  localizacao_sala: string;
  capacidade: number;
  computador: number;
  quadro_branco: number;
  televisao: number;
  projetor: number;
  images: string[];
};

const InfoSala: React.FC<InfoSalaProps> = ({
  nome_sala,
  capacidade,
  localizacao_sala,
  televisao,
  computador,
  projetor,
  quadro_branco,
  images
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    setOpen(false);
  });

  const toggleModal = () => {
    setOpen((p) => !p);
  };

  return (
    <div className="relative">
      <button onClick={toggleModal}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1581_2458)">
            <circle
              cx="13.8806"
              cy="11.8806"
              r="8.88056"
              fill="#D1E4FF"
              stroke="#007BC0"
              stroke-width="2"
            />
            <path
              d="M13.8809 8.99878H13.8891"
              stroke="#007BC0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.9199 11.8806H13.8805V15.7231H14.8411"
              stroke="#007BC0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1581_2458"
              x="0"
              y="0"
              width="27.7607"
              height="27.7611"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1581_2458"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1581_2458"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
      {open ? (
        <div ref={ref} className="absolute top-[90%] bg-white flex z-50 drop-shadow-xl rounded border">
        <div className="modal bg-white p-4 rounded-lg w-[300px]">
            <h2 className="text-xl font-semibold pb-2 border-b border-gray-300">
              {nome_sala}
            </h2>

          <div className='flex justify-between text-sm'>
            <div className='flex flex-col gap-2 my-4'>
                <div className='flex gap-2'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1273_4174)">
                <path d="M9.5 11C9.5 11.7956 9.81607 12.5587 10.3787 13.1213C10.9413 13.6839 11.7044 14 12.5 14C13.2956 14 14.0587 13.6839 14.6213 13.1213C15.1839 12.5587 15.5 11.7956 15.5 11C15.5 10.2044 15.1839 9.44129 14.6213 8.87868C14.0587 8.31607 13.2956 8 12.5 8C11.7044 8 10.9413 8.31607 10.3787 8.87868C9.81607 9.44129 9.5 10.2044 9.5 11Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.157 16.657L13.914 20.9C13.539 21.2746 13.0306 21.485 12.5005 21.485C11.9704 21.485 11.462 21.2746 11.087 20.9L6.843 16.657C5.72422 15.5381 4.96234 14.1127 4.65369 12.5608C4.34504 11.009 4.50349 9.40047 5.10901 7.93868C5.71452 6.4769 6.7399 5.22749 8.05548 4.34846C9.37107 3.46943 10.9178 3.00024 12.5 3.00024C14.0822 3.00024 15.6289 3.46943 16.9445 4.34846C18.2601 5.22749 19.2855 6.4769 19.891 7.93868C20.4965 9.40047 20.655 11.009 20.3463 12.5608C20.0377 14.1127 19.2758 15.5381 18.157 16.657Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1273_4174">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                {localizacao_sala}
                </div>
                <div className='flex gap-2'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1273_4178)">
                <path d="M5.5 7C5.5 8.06087 5.92143 9.07828 6.67157 9.82843C7.42172 10.5786 8.43913 11 9.5 11C10.5609 11 11.5783 10.5786 12.3284 9.82843C13.0786 9.07828 13.5 8.06087 13.5 7C13.5 5.93913 13.0786 4.92172 12.3284 4.17157C11.5783 3.42143 10.5609 3 9.5 3C8.43913 3 7.42172 3.42143 6.67157 4.17157C5.92143 4.92172 5.5 5.93913 5.5 7Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.5 21V19C3.5 17.9391 3.92143 16.9217 4.67157 16.1716C5.42172 15.4214 6.43913 15 7.5 15H11.5C12.5609 15 13.5783 15.4214 14.3284 16.1716C15.0786 16.9217 15.5 17.9391 15.5 19V21" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 3.13C17.3604 3.35031 18.123 3.85071 18.6676 4.55232C19.2122 5.25392 19.5078 6.11683 19.5078 7.005C19.5078 7.89318 19.2122 8.75608 18.6676 9.45769C18.123 10.1593 17.3604 10.6597 16.5 10.88" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.5 21V19C21.4949 18.1172 21.1979 17.2608 20.6553 16.5644C20.1126 15.868 19.3548 15.3707 18.5 15.15" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1273_4178">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                {`${capacidade} pessoas`}
                </div>
                <div className='flex gap-2'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73478 6 9V10C6 10.2652 5.89464 10.5196 5.70711 10.7071L5 11.4142V13.5858L5.70711 14.2929C5.89464 14.4804 6 14.7348 6 15V18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19H17C17.2652 19 17.5196 18.8946 17.7071 18.7071C17.8946 18.5196 18 18.2652 18 18V15C18 14.7348 18.1054 14.4804 18.2929 14.2929L19 13.5858V11.4142L18.2929 10.7071C18.1054 10.5196 18 10.2652 18 10V9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8H7ZM4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6H17C17.7956 6 18.5587 6.31607 19.1213 6.87868C19.6839 7.44129 20 8.20435 20 9V9.58579L20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V14C21 14.2652 20.8946 14.5196 20.7071 14.7071L20 15.4142V18C20 18.7957 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7957 21 17 21H7C6.20435 21 5.44129 20.6839 4.87868 20.1213C4.31607 19.5587 4 18.7956 4 18V15.4142L3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14V11C3 10.7348 3.10536 10.4804 3.29289 10.2929L4 9.58579V9C4 8.20435 4.31607 7.44129 4.87868 6.87868Z" fill="#007BC0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H10C9.44772 17 9 16.5523 9 16Z" fill="#007BC0"/>
                <path d="M8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11C8.22386 11 8 11.2239 8 11.5C8 11.7761 8.22386 12 8.5 12Z" fill="#007BC0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11C8.22386 11 8 11.2239 8 11.5C8 11.7761 8.22386 12 8.5 12ZM7 11.5C7 10.6716 7.67157 10 8.5 10C9.32843 10 10 10.6716 10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5Z" fill="#007BC0"/>
                <path d="M15.5 12C15.7761 12 16 11.7761 16 11.5C16 11.2239 15.7761 11 15.5 11C15.2239 11 15 11.2239 15 11.5C15 11.7761 15.2239 12 15.5 12Z" fill="#007BC0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 12C15.7761 12 16 11.7761 16 11.5C16 11.2239 15.7761 11 15.5 11C15.2239 11 15 11.2239 15 11.5C15 11.7761 15.2239 12 15.5 12ZM14 11.5C14 10.6716 14.6716 10 15.5 10C16.3284 10 17 10.6716 17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5Z" fill="#007BC0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7577 2.02985C8.2935 1.8959 8.83643 2.22166 8.97038 2.75746L9.97038 6.75746C10.1043 7.29325 9.77857 7.83619 9.24277 7.97013C8.70698 8.10408 8.16404 7.77832 8.03009 7.24253L7.03009 3.24253C6.89615 2.70673 7.22191 2.1638 7.7577 2.02985Z" fill="#007BC0"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2428 2.02985C16.7786 2.1638 17.1043 2.70673 16.9704 3.24253L15.9704 7.24253C15.8364 7.77832 15.2935 8.10408 14.7577 7.97013C14.2219 7.83619 13.8961 7.29325 14.0301 6.75746L15.0301 2.75746C15.164 2.22166 15.707 1.8959 16.2428 2.02985Z" fill="#007BC0"/>
                </svg>
                {`${projetor} postos`}
                </div>
            </div>
            <div className='flex flex-col gap-2 my-4'>
                <div className='flex gap-2'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_696_6862)">
                <path d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V5Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 20H17" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 16V20" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 16V20" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_696_6862">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                {`${computador} computadores`}
                </div>
                <div className='flex gap-2'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1273_4198)">
                <path d="M8.5 19H5.5C4.96957 19 4.46086 18.7893 4.08579 18.4142C3.71071 18.0391 3.5 17.5304 3.5 17V7C3.5 6.46957 3.71071 5.96086 4.08579 5.58579C4.46086 5.21071 4.96957 5 5.5 5H19.5C20.0304 5 20.5391 5.21071 20.9142 5.58579C21.2893 5.96086 21.5 6.46957 21.5 7V18C21.5 18.2652 21.3946 18.5196 21.2071 18.7071C21.0196 18.8946 20.7652 19 20.5 19" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.5 17C11.5 16.7348 11.6054 16.4804 11.7929 16.2929C11.9804 16.1054 12.2348 16 12.5 16H16.5C16.7652 16 17.0196 16.1054 17.2071 16.2929C17.3946 16.4804 17.5 16.7348 17.5 17V18C17.5 18.2652 17.3946 18.5196 17.2071 18.7071C17.0196 18.8946 16.7652 19 16.5 19H12.5C12.2348 19 11.9804 18.8946 11.7929 18.7071C11.6054 18.5196 11.5 18.2652 11.5 18V17Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1273_4198">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                {`${quadro_branco} quadro branco`}
                </div>
                <div className='flex gap-2'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1273_4206)">
                <path d="M3.5 9C3.5 8.46957 3.71071 7.96086 4.08579 7.58579C4.46086 7.21071 4.96957 7 5.5 7H19.5C20.0304 7 20.5391 7.21071 20.9142 7.58579C21.2893 7.96086 21.5 8.46957 21.5 9V18C21.5 18.5304 21.2893 19.0391 20.9142 19.4142C20.5391 19.7893 20.0304 20 19.5 20H5.5C4.96957 20 4.46086 19.7893 4.08579 19.4142C3.71071 19.0391 3.5 18.5304 3.5 18V9Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 3L12.5 7L8.5 3" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1273_4206">
                <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                {`${televisao} televisão`}
                </div>
              </div>
            </div>

            <Carousel>
              {images.map((image, index) => (
                <img
                  className="rounded-md"
                  key={index}
                  src={`${API_URL}${image}`}
                  alt={`Imagem ${index + 1}`}
                />
              ))}
            </Carousel>
          </div> 
        </div>
      ) : null}
    </div>
  );
};

export default InfoSala;
