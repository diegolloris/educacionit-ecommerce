const items = [
    { 
        id: 1, 
        image: '/images/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg', 
        title: 'Anteojos 1', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
        sizes: ['S', 'M'], 
        colors: ['Rojo', 'Violeta'], 
        price: 1500 
    },
    { 
        id: 2, 
        image: '/images/Anteojos/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg', 
        title: 'Anteojos 2', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
        sizes: ['S', 'M'], 
        colors: ['Rojo', 'Violeta'], 
        price: 5500 
    },
    { 
        id: 3, 
        image: '/images/Anteojos/noah-black-1p3N5SHz0Hk-unsplash.jpg', 
        title: 'Anteojos 3', 
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae facere laudantium beatae et, eos minus deserunt modi, aliquid excepturi eius suscipit quasi! Suscipit corporis, laborum laudantium obcaecati sit excepturi vitae.',
        sizes: ['S', 'M'], 
        colors: ['Rojo', 'Violeta'], 
        price: 1000 
    }
]

export const getAll = () => {
  return items;
};

export const getById = (id) => items.find((item) => item.id === id);

export const addItem = item => item.push(item)

//ver si lo usamos