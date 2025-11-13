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
                <table>
                    <tbody>
                        <tr>
                            <StatisticLine text="good" value={good} />
                        </tr>
                        <tr><StatisticLine text="neutral" value={neutral} /></tr>
                        <tr><StatisticLine text="bad" value={bad} /></tr>
                        <tr><StatisticLine text="total" value={total} /></tr>
                        <tr><StatisticLine text="average" value={average} /></tr>
                        <tr><StatisticLine text="positive" value={positive} /></tr>
                    </tbody>
                </table>         
            </>

        )
    }
}

export default Statistics