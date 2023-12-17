import { useState } from 'react'
// import './App.css'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Styles from './style';

function App() {
  const [pizza, setPizza] = useState(null);
  const [size, setSize] = useState('medium');
  const [toppings, setToppings] = useState([]);

  const handleChangePizza = (event) => {
    const selectPizza = event.target.value
    setPizza(selectPizza);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeToppings = (event) => {
  let updateList = [...toppings]
  if (event.target.checked) {
    updateList = [...toppings, event.target.value];
  } else {
    updateList.splice(toppings.indexOf(event.target.value), 1);
  }
  setToppings(updateList);
  };

  const getTotal = () => {
    let total = 0;
    let totalToppings = 0;
    
    if (pizza) {
      total += parseInt(pizza)
    }

    if (size === 'large') {
      total += 2
    } else if (size === 'small') {
      total -= 1
    }

    if (toppings.length > 0) {
      totalToppings = toppings.reduce((acc, item) => {
        return acc + parseInt(item)
      }, 0)
    }

    total += totalToppings;

    return total;
  }

  const total = getTotal();
  
  console.log("total = "+total);
  console.log(size);
  console.log(pizza);
  console.log(toppings);
  return (
    <div>
      <Container style={Styles.containerStyle1}>
        <h3>Pizza</h3>
        <Container style={Styles.containerPizza}>
          <label style={Styles.PizzaItem}>
            <img style={{width: '200px', height: '200px'}} src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza1" />
            <p>Pizza 1</p>
            <p>$8</p>
            <input 
              type="radio"
              value={8}
              checked={pizza === "8"}
              onChange={handleChangePizza}
            />
          </label>
          <label style={Styles.PizzaItem}>
            <img style={{width: '200px', height: '200px'}} src="https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza" />
            <p>Pizza 2</p>
            <p>$10</p>
            <input 
              type="radio"
              value={10}
              checked={pizza === "10"}
              onChange={handleChangePizza}
            />
          </label>
          <label style={Styles.PizzaItem}>
            <img style={{width: '200px', height: '200px'}} src="https://images.pexels.com/photos/3731423/pexels-photo-3731423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pizza" />
            <p>Pizza 3</p>
            <p>$12</p>
            <input 
              type="radio"
              value={12}
              checked={pizza === "12"}
              onChange={handleChangePizza}
            />
          </label>
        </Container>

        <h3>Size</h3>
        <Container style={Styles.containerPizza}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            <input type="radio" value={'small'} onChange={handleChangeSize} checked={size === "small"}/>
            <label htmlFor="">Small</label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            <input type="radio" value={'medium'} onChange={handleChangeSize} checked={size === "medium"}/>
            <label htmlFor="">Medium</label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
            <input type="radio" value={'large'} onChange={handleChangeSize} checked={size === "large"} />
            <label htmlFor="">Large</label>
          </div>
        </Container>

        <h3>Topings</h3>
        <Container style={Styles.containerToping}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div style={{display: 'flex', gap: '4px'}}>
              <input type="checkbox" id='Avocado' value={1} onChange={handleChangeToppings} disabled={!(pizza === "8")}/>
              <label htmlFor="Avocado">Avocado</label>
            </div>
            <div style={{display: 'flex', gap: '4px'}}>
              <input type="checkbox" id='Brocoli' value={1} onChange={handleChangeToppings} />
              <label htmlFor="Brocoli">Brocoli</label>
            </div>
            <div style={{display: 'flex', gap: '4px'}}>
              <input type="checkbox" id='Onion' value={1} onChange={handleChangeToppings} />
              <label htmlFor="Onion">Onion</label>
            </div>
            <div style={{display: 'flex', gap: '4px'}}>
              <input type="checkbox" id='Zuchini' value={1} onChange={handleChangeToppings} />
              <label htmlFor="Zuchini">Zuchini</label>
            </div>
            </Grid>
          <Grid item xs={4}>
            <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Lobster' value={2} onChange={handleChangeToppings} disabled={!(pizza === "10")}/>
                <label htmlFor="Lobster">Lobster</label>
              </div>
              <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Oyster' value={2} onChange={handleChangeToppings} disabled={!(pizza === "10")}/>
                <label htmlFor="Oyster">Oyster</label>
              </div>
              <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Salmon' value={2} onChange={handleChangeToppings} disabled={!(pizza === "10")}/>
                <label htmlFor="Salmon">Salmon</label>
              </div>
              <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Tuna' value={2} onChange={handleChangeToppings} disabled={!(pizza === "8" && pizza === "12")}/>
                <label htmlFor="Tuna">Tuna</label>
              </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Bacon' value={3} onChange={handleChangeToppings} disabled={!(pizza === "10" && pizza === "12")}/>
                <label htmlFor="Bacon">Bacon</label>
              </div>
              <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Duck' value={3} onChange={handleChangeToppings} disabled={!(pizza === "12")}/>
                <label htmlFor="Duck">Duck</label>
              </div>
              <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Ham' value={3} onChange={handleChangeToppings} />
                <label htmlFor="Ham">Ham</label>
              </div>
              <div style={{display: 'flex', gap: '4px'}}>
                <input type="checkbox" id='Sausage' value={3} onChange={handleChangeToppings} disabled={!(pizza === "12")}/>
                <label htmlFor="Sausage">Sausage</label>
              </div>
          </Grid>
        </Grid>
          
        </Container>
        
        <div>
        
          <h3>
            Total Price: <strong>${total ? total : 0}</strong>
          </h3>
        
      </div>
      </Container>
    </div>
  )
}

export default App
