document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header'); 
    const backgrounds = ['#574052', '#8DC6BF', '#FCBC65', '#FA7B50'];
    const largeNums = [30, 35, 40, 50]; 
    const smallNums = [3, 4, 5, 6];
    
    const coordinates = {
        x: undefined, 
        y: undefined,
        z: undefined
    }

    const generateNumber = () => { 
        return Math.floor(Math.random() * 4);
    }

    const createRandomNumbers = () => {
        const border-left = generateNumber(); 
        const border-bottom = generateNumber();
        const color = generateNumber(); 
        return [border-left, border-bottom, color]; 
    }

    const configureWideElement = (newEle) => {
        const [border-left, border-right, border-bottom, color] = createRandomNumbers(); 
        newEle.style.border-left = largeNums[border-left] + 'px';  
        newEle.style.border-bottom = smallNums[border-bottom] + 'px'; 
        newEle.style.backgroundColor = backgrounds[color];
        newEle.classList.add('triangle', 'triangle-border-left');
        
    }

        const configureWideElement = (newEle) => {
        const [border-left, border-right, border-bottom, color] = createRandomNumbers(); 
        newEle.style.border-left = smallNums[border-left] + 'px';  
        newEle.style.border-bottom = largeNums[border-bottom] + 'px'; 
        newEle.style.backgroundColor = backgrounds[color];
        newEle.classList.add('triangle', 'triangle-border-bottom');
        
    }

 

    const addElement = () => {
        const newEle = document.createElement('div');
        const typeNum = Math.round(Math.random()); //returns 0 or 1;  

        if(typeNum === 0) { 
            configureWideElement(newEle);
        } else {
            configureTallElement(newEle); 
        }

        console.log(newEle); 

        newEle.style.left = coordinates.x + 'px'; 
        newEle.style.top = coordinates.y + 'px'; 
        header.appendChild(newEle); 

    }

    const updateCoordinates = e => { 
        if(coordinates.x === undefined || coordinates.y === undefined){
            coordinates.x = e.x; 
            coordinates.y = e.y;
            addElement(); 
        }

        if(Math.abs(coordinates.x - e.x) > 50 || Math.abs(coordinates.y - e.y) > 50) {
            coordinates.x = e.x; 
            coordinates.y = e.y;
            addElement(); 
        } 
    }

    header.addEventListener('mousemove', e => {
        updateCoordinates(e); 
    });    
    
    
}); 