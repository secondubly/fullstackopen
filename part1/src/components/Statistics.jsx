import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad}) => {
    if (!good && !bad && !neutral) {
        return <p>No feedback given</p>
    } else {
        const total = good + neutral + bad
        const average = (bad*(-1) + good) / (good+neutral+bad)
        const positive = good / (good + neutral + bad) * 100
        return (
            <>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />            
                <StatisticLine text="bad" value={bad} />            
                <StatisticLine text="total" value={total} />            
                <StatisticLine text="average" value={average} />            
                <StatisticLine text="positive" value={positive} />            
            </>

        )
    }
}

export default Statistics