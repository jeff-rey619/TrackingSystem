import app from 'express';
import { Sequelize } from 'sequelize';

import { sequelize } from './dataSource';
import { userRouter } from './routes/userRoutes';



const server = app();

server.use(app.json());





async function bootStrap() {
    await sequelize.sync()
    
    // set routers
    server.use('/auth', userRouter);

    // listen server 
    server.listen(3000, () => {
    console.log('Server Started');
})

}
bootStrap();