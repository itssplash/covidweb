
import React,{Component} from 'react';
import {Cards,Chart,CountryPicker} from './Compnents';
import styles from './App.module.css';
import {fetchData} from './api';
import cvdIMG from  './Images/image.png';
import cvdIMG1 from  './Images/mask.png';

class App extends Component{
    state = {
        data : {},
        country:'',
    }
   async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData,country:country});
        }
    render() {
        const {data,country} = this.state;
        return (
            
            <div className={styles.container}>
                <img className={styles.image} src={cvdIMG} alt="COVOID-19"/>
                <img className={styles.mask} src={cvdIMG1} alt="mask"/>
                <Cards data = {data}/>
                <CountryPicker className={styles.space} handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
    
}
export default App;