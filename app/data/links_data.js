//MUI Icons
import HomeIcon from '@mui/icons-material/Home';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowIcon from '../components/ArrowIcon'


export const items_links = [
    {
        "nombre": "Home",
        "icono": <HomeIcon className='logo-item__sideBar' />,
    },
    {
        "nombre": "How it works",
        "icono": <QuestionMarkIcon className='logo-item__sideBar' />,
    },
    {
        "nombre": "Marketplace",
        "icono": <BarChartIcon className='logo-item__sideBar' />,
    },
    {
        "nombre": "For talents",
        "icono": <PersonAddIcon className='logo-item__sideBar' />,
    },
    {
        "nombre": "Categories",
        "icono": <SettingsIcon className='logo-item__sideBar' />,
        "iconDropdown": <ArrowIcon className='dropdown-icon' />,
        "subItems": [
            {
                "nombre": "Lorem Ipsum",
            },
            {
                "nombre": "Lorem Ipsum",
            },
            {
                "nombre": "Lorem Ipsum",
                "iconDropdown": <ArrowIcon className='dropdown-icon' />,
                "subItems": [
                    { "nombre": "Lorem Ipsum", },
                    { "nombre": "Lorem Ipsum", },
                    { "nombre": "Lorem Ipsum", },
                ],
            },
            {
                "nombre": "Lorem Ipsum",
            },
            {
                "nombre": "Lorem Ipsum",
                "iconDropdown": <ArrowIcon className='dropdown-icon' />,
                "subItems": [
                    { "nombre": "Lorem Ipsum", },
                    { "nombre": "Lorem Ipsum", },
                    { "nombre": "Lorem Ipsum", },
                    { "nombre": "Lorem Ipsum", },
                ],
            },
        ]
    },
]