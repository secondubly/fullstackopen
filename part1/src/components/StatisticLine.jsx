const StatisticLine =  ({text, value}) => {
    if (text === 'positive') {
        return (<>
            <td>{text}:</td> 
            <td>{value}%</td>
        </>
    )
    } else {
        return (<>
            <td>{text}:</td> 
            <td>{value}</td>
        </>)
    }
}

export default StatisticLine