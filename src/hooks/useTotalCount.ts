import {useEffect, useState} from 'react'
import api  from 'config/api';

type CountNumbers = {
    numbers: number | string,
    monthyPrice: number | string,
    setupPrice: number | string
}

const useTotalCount = (): CountNumbers => {
    const [total, setTotal] = useState<CountNumbers>({
        numbers: 0,
        monthyPrice: 0,
        setupPrice: 0
    });

    useEffect(() => {
        api('numbers').then((numbers: any[]) => {
            const countSetup = numbers.reduce((accumulator: number, item: any) => accumulator + parseFloat(item.setupPrice), 0);
            const countMonthy = numbers.reduce((accumulator: number, item: any) => accumulator + parseFloat(item.monthyPrice), 0);

            setTotal({
                numbers: numbers.length,
                setupPrice: countSetup.toFixed(2),
                monthyPrice: countMonthy.toFixed(2)
            });
        });
    }, [])
        
    return total;
}

export default useTotalCount;