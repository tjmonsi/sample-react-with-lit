"use client";

import { SmallSnackbar } from '../components/small-snackbar';
import { useForm } from "react-hook-form";
import { useRef, useState  } from 'react';

export function SampleBlock () {
    const { register, handleSubmit } = useForm();
    const [afterHiddenText, setAfterHiddenText] = useState('');
    const snackbar = useRef(null);
    const onSubmit = (data) => {
        const { text } = data;
        setAfterHiddenText('');        
        snackbar.current.open(text);
    }

    const onHide = (data) => {
        const { detail: { text } } = data;
        setAfterHiddenText(text);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="text">Text</label>
                <input style={{color: "black"}} type="text" id="text" placeholder="Enter a text here" {...register("text")}/>
                <button>Submit</button>
            </form>
            <SmallSnackbar ref={snackbar} onHide={onHide}></SmallSnackbar>

            <div style={{color: "white"}}>
                {afterHiddenText}
            </div>
        </div>
    )
}