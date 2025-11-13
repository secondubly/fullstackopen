const StatisticLine =  ({text, value}) => {
    if (text === 'positive') {
        return (<>
            {text}: {value}%<br />
        </>
    )
    } else {
        return (<>
        {text}: {value}<br />
        </>)
    }
}

export default StatisticLine