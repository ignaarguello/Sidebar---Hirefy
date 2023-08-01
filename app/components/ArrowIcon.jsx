'use client'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';


export default function ArrowIcon() {

    const [arrowState, setArrowState] = useState(false);

    const changeState = () => {
        !arrowState ? setArrowState(true) : (setArrowState ? setArrowState(false) : console.log)
    }

    return (
        <div>
            {
                !arrowState ?
                    <ArrowRightIcon id='arrow-icon' onClick={changeState} />
                    :
                    <ArrowDropDownIcon id='arrow-icon' onClick={changeState} />
            }
        </div>
    )
}