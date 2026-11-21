import React, { useId } from 'react';

function Temp({
    label,
    data,
    onDataChange,
    dataDisable = false
}) {
    const inpid = useId();

    return(
        <>
        <div className="w-1/2">
            <label htmlFor='inpid' className="text-black/40 mb-2 inline-block">
            {label}
        </label>
            <input
                type='number'
                placeholder='Temp'
                className="outline-none w-full bg-transparent py-1.5"
                value={data}
                onChange={(e) => onDataChange && onDataChange(Number(e.target.value))}
                disabled = {dataDisable}
            />
        </div>
        </>
    )
}

export default Temp;