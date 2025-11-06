import Inicio from './Inicio';
import Page from './Page';

function Home() {
    return (
        <>
            <Inicio color='var(--grad-rose)' message='Regina May'/>
            <br/>
            <Inicio fontSize='25px' color='var(--grad-rose)' message='Junior Front-end Developer'/>
            <br/>
            <Page /> 
        </>
    );
}
export default Home