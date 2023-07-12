import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import {HomeOutlined,UnorderedListOutlined} from "@ant-design/icons"
import { Content, Header } from "antd/es/layout/layout";
import {Menu} from 'antd'
import Home from "./Pages/Home";
import ViewTypes from "./components/ViewTypes";
import PokemonType from "./Pages/PokemonType";
import { UserProvider } from "./app-context/userContext";
import EditProfile from "./components/editProfile";

function App() {
	const navigate = useNavigate();
	return (
		<UserProvider>
			<Layout>
				<Header>
					<Menu
					theme="dark"
					mode="horizontal"
					onClick={({key})=>{
						navigate(key);
					}}
					items={[
						{label:"Home",key:"/",icon:<HomeOutlined/> },
						{label:"Types",key:"/types",icon:<UnorderedListOutlined />}
					]}>
						
					</Menu>
				</Header>
				<Content>
					<Routes>
						<Route path="/" element={<Home />}/>
						<Route path="/types" element={<ViewTypes/>}/>
						<Route path="/types/:typeId" element={<PokemonType/>}/>
						<Route path="profile/edit" element={<EditProfile/>}/>
					</Routes>
				</Content>		
			</Layout>
		</UserProvider>

	);
}

export default App;
