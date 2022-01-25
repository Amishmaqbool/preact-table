import GetTodos from '../../components/getTodos';
import style from './style.css';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<GetTodos/>
	</div>
);

export default Home;
