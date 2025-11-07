import Inicio from './Inicio';
import Page from './Page';

function Home() {
    return (
        <div class="md:text-left p-4 my-3; m-auto py-2 text-center">
            <Inicio message='Regina May' fontSize='28px'/>
            <Inicio fontSize='25px' message='Junior Front-end Developer'/>
            <Page /> 
        </div>
    );
}
export default Home