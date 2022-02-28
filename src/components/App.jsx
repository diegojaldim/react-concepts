import React from "react";
import Card from './layout/Card';
import First from './basics/First';
import WithParams from './basics/WithParams';
import Fragment from './basics/Fragment';
import Random from './basics/Random';
import Family from "./basics/Family";
import FamilyMember from "./basics/FamilyMember";
import StudentsList from './looping/StudentsList';
import ProductTable from "./looping/ProductTable";
import EvenOdd from "./conditional/EvenOdd";
import UserInfo from "./conditional/UserInfo";
import './App.css';

const App = () => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card title="User Info" color="#854442">
                <UserInfo user={{name: 'usuário logado'}}></UserInfo>
                <UserInfo></UserInfo>
            </Card>

            <Card title="Even Odd" color="#96ceb4">
                <EvenOdd number="44" />
            </Card>

            <Card title="Products Table" color="#051e3e">
                <ProductTable />
            </Card>

            <Card title="Looping (for)" color="#b3cde0">
                <StudentsList />
            </Card>

            <Card title="Component With Children" color="#CD5C5C">
                <Family lastName="Ferreira">
                    <FamilyMember firstName="Pedro" />
                    <FamilyMember firstName="João" />
                    <FamilyMember firstName="Lucas" />
                </Family>
            </Card>

            <Card title="Sorted Value" color="#FA6900">
                <Random min={2} max={25} />
            </Card>

            <Card title="Fragment" color="#2ECC71">
                <Fragment />
            </Card>
            
            <Card title="Component With Params" color="#2E86C1">
                <WithParams 
                    title="Titulo" 
                    subtitle="Subtítulo"
                    value={5.5}
                />
            </Card>

            <Card title="First Component" color="#884EA0">
                <First />
            </Card>
        </div>
    </div>

export default App;