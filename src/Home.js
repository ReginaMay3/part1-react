import Inicio from './Inicio';
import Page from './Page';

function Home() {
    return (
        <div class="md:justify-evenly md:items-start m-auto py-2 text-center">
            <div class="md:w-72 w-auto h-auto">
                <Inicio message='Regina May' fontSize='28px'/>
                <Inicio fontSize='25px' message='Junior Front-end Developer'/>
            </div>
            <Page /> 
        </div>
    );
}
export default Home