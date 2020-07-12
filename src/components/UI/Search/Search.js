import React from 'react' 
import './Search.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
// import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import { faSearchLocation as fasearch } from '@fortawesome/free-solid-svg-icons';

library.add(

    fasearch
    // more icons go here
);

const search = (props) => {
    return (
        <form className="form1" onSubmit={props.clicked}>
            <input className="searchbar" type="search" placeholder="Search Location" onChange={props.Changed}/>
            <button className="button2" type="submit"><FontAwesomeIcon icon={fasearch} style={{fontSize:"1rem"}}/></button>
        </form>
    )
}

export default search
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// export default function Grouped(props) {
//     const options = top100Films.map((option) => {
//         const firstLetter = option.title[0].toUpperCase();
//         return {
//             firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
//             ...option,
//         };
//     });

//     return (
//         <Autocomplete onChange={props.Changed}
//             id="grouped-demo"
//             options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
//             groupBy={(option) => option.firstLetter}
//             getOptionLabel={(option) => option.title}
//             style={{ width: 300, marginTop: "32px" }}
//             renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
//         />
//     );
// }



// const top100Films = [
//     { title: "Tokyo", year: "Japan" },
//     { title: "Delhi", year: "India" },
//     { title: "Shanghai", year: "China" },
//     { title: "Sao Paulo", year: "Brazil" },
//     { title: "Mumbai", year: "India" },
//     { title: "Mexico City", year: "Mexico" },
//     { title: "Beijing", year: "China" },
//     { title: "Osaka", year: "Japan" },
//     { title: "Cairo", year: "Egypt" },
//     { title: "New York", year: "United States" },
//     { title: "Dhaka", year: "Bangladesh" },
//     { title: "Karachi", year: "Pakistan" },
//     { title: "Buenos Aires", year: "Argentina" },
//     { title: "Kolkata", year: "India" },
//     { title: "Istanbul", year: "Turkey" },
//     { title: "Chongqing", year: "China" },
//     { title: "Lagos", year: "Nigeria" },
//     { title: "Manila", year: "Philippines" },
//     { title: "Rio de Janeiro", year: "Brazil" },
//     { title: "Guangzhou", year: "China" },
//     { title: "Los Angeles", year: "United States" },
//     { title: "Moscow", year: "Russia" },
//     { title: "Kinshasa", year: "Democratic Republic of the Congo" },
//     { title: "Tianjin", year: "China" },
//     { title: "Paris", year: "France" },
//     { title: "Shenzhen", year: "China" },
//     { title: "Jakarta", year: "Indonesia" },
//     { title: "London", year: "United Kingdom" },
//     { title: "Bangalore", year: "India" },
//     { title: "Lima", year: "Peru" },
//     { title: "Chennai", year: "India" },
//     { title: "Seoul", year: "South Korea	" },
//     { title: "Bogotá", year: "Colombia" },
//     { title: "Nagoya", year: "Japan" },
//     { title: "Johannesburg", year: "South Africa" },
//     { title: "Bangkok", year: "Thailand" },
//     { title: "Hyderabad", year: "India" },
//     { title: "Chicago", year: "United States" },
//     { title: "Lahore", year: 'Pakistan' },
//     { title: "Tehran", year: "Iran" },
//     { title: "Wuhan", year: "China" },
//     { title: "Chengdu", year: "China" },
//     { title: "Dongguan", year: "China" },
//     { title: 'Nanjing', year: "China" },
//     { title: "Ahmadabad", year: "India" },
//     { title: "Hong Kong", year: "Hong Kong" },
//     { title: "Ho Chi Minh City", year: "Vietnam" },
//     { title: "Foshan", year: "Foshan" },
//     { title: "Kuala Lumpur", year: "Malaysia" },
//     { title: "Baghdad", year: "Iraq" },
//     { title: "Santiago", year: "Chile" },
//     { title: "Hangzhou", year: "China" },
//     { title: "Riyadh", year: "Saudi Arabia" },
//     { title: "Shenyang", year: "China" },
//     { title: "Madrid", year: "Spain" },
//     { title: "Xi'an", year: "China" },
//     { title: "Toronto", year: "Canada" },
//     { title: "Miami", year: "United States" },
//     { title: "Pune", year: "India" },
//     { title: "Belo Horizonte", year: "Brazil" },
//     { title: "Dallas", year: "United States" },
//     { title: "Surat", year: "India" },
//     { title: "Houston", year: "United States" },
//     { title: "Singapore", year: "Singapore" },
//     { title: "Philadelphia", year: "United States" },
//     { title: "Kitakyushu", year: "Japan" },
//     { title: "Luanda", year: "Angola" },
//     { title: "Suzhou", year: "China" },
//     { title: "Haerbin", year: "China" },
//     { title: "Barcelona", year: "Spain" },
//     { title: "Atlanta", year: "United States" },
//     { title: "Khartoum", year: "Sudan" },
//     { title: "Dar es Salaam", year: "Tanzania" },
//     { title: "Saint Petersburg", year: "Russia" },
//     { title: "Washington, D.C.", year: "United States" },
//     { title: "Abidjan", year: "Cote d'Ivoire	" },
//     { title: "Guadalajara", year: "Mexico" },
//     { title: "Yangon", year: "Myanmar" },
//     { title: "Alexandria", year: "Egypt" },
//     { title: "Ankara", year: "Turkey" },
//     { title: "Kabul", year: "Afghanistan" },
//     { title: "Qingdao", year: "China" },
//     { title: "Chittagong", year: "Bangladesh" },
//     { title: "Monterrey", year: "Mexico" },
//     { title: "Sydney", year: "Australia" },
//     { title: "Dalian", year: "China" },
//     { title: "Xiamen", year: "China" },
//     { title: "Zhengzhou", year: "China" },
//     { title: "Boston", year: "United States" },
//     { title: "Melbourne", year: "Australia" },
//     { title: "Brasília", year: "Brazil" },
//     { title: "Jiddah", year: "Saudi Arabia" },
//     { title: 'Phoenix', year: "United States" },
//     { title: "Ji'nan ", year: "China" },
//     { title: "Montréal", year: "Canada" },
//     { title: "Shantou", year: "China" },
//     { title: "Nairobi", year: "Kenya" },
//     { title: "Medellín", year: "Colombia" },
//     { title: "Fortaleza", year: "Brazil" },
//     { title: "Changchun", year: "China" },
//     { title: "Changsha", year: "China" },
//     { title: "Recife", year: "Brazil" },
//     { title: 'Rome', year: "Italy" },
//     { title: 'Zhongshan', year: "China" },
//     { title: "Cape Town", year: "South Africa" },
//     { title: "Detroit", year: "United States" },
//     { title: "Hanoi", year: "Vietnam" },
//     { title: "Tel Aviv", year: "Israel" },
//     { title: "Kunming", year: "China" },
//     { title: "Porto Alegre", year: "Brazil" },
//     { title: "Kano", year: "Nigeria" },
//     { title: "Salvador", year: "Brazil" },
//     { title: "Faisalabad", year: "Pakistan" },
//     { title: "Berlin", year: "Germany" },
//     { title: "Aleppo", year: "Syria" },
//     { title: "Dakar", year: "Senegal" },
//     { title: "Casablanca", year: "Morroco" },
//     { title: "Urumqi", year: "China" },
//     { title: "Taiyuan", year: "China" },
//     { title: "Curitiba", year: "Brazil" },
//     { title: "Jaipur", year: "India" },
//     { title: "Shizuoka", year: "Japan" },
//     { title: 'Hefei', year: "China" },
//     { title: "San Francisco", year: "United States" },
//     { title: "Fuzhou", year: "China" },
//     { title: "Shijiazhuang", year: "China" },
//     { title: "Seattle", year: "United States" },
//     { title: "Addis Ababa", year: "Ethiopia" },
//     { title: "Nanning", year: "China" },
//     { title: "Lucknow", year: "India" },
//     { title: "Busan", year: "South Korea" },
//     { title: "Wenzhou", year: "China" },
//     { title: "Ibadan", year: "Nigeria" },
//     { title: "Ningbo", year: "China" },
//     { title: "San Diego", year: "United States" },
//     { title: "Milan", year: "Italy" },
//     { title: "Yaounde", year: "Cameroon" },
//     { title: "Athens", year: "Greece" },
//     { title: "Wuxi", year: "China" },
//     { title: 'Campinas', year: "Brazil" },
//     { title: "Izmir", year: "Turkey" },
//     { title: "Kanpur", year: "India" },
//     { title: 'Mashhad', year: "Iran" },
//     { title: "Puebla", year: "Mexico" },
//     { title: "Sana'a ", year: "Yemen" },
//     { title: "Santo Domingo", year: "Domican Republic" },
//     { title: "Douala", year: "Cameroon" },
//     { title: "Kiev", year: "Ukraine" },
//     { title: "Guatemala City ", year: "Guatemala" },
//     { title: "Caracas", year: "Venezuela" },
// ]