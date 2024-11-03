import { Layout } from "antd"
import AppSider from "./AppSider"

const AppLayout = () => {
    return(
        <Layout style={{ minHeight: "100vh" }}>
            <AppSider/>
        </Layout>
    )
}
export default AppLayout