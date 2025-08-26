import {Header} from "../../../components";

const Dashboard = () => {
    const user = { name: 'Manraj'}
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome  ${user?.name ?? 'Guest'} 👋`}
                description=" Track activity, trenda and popular destinations in real time"
            />

            Dashboard Page Contents
        </main>
    )
}
export default Dashboard
