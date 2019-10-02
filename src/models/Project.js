import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

import Task from './Task'

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    delivery_date: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
})

Project.hasMany(Task, 
    { 
        foreingKey: 'project_id', 
        sourceKey: 'id' 
    })

// Supuestamente esto no es necesario
Task.belongsTo(Project, 
    {
        foreingKey: 'project_id', 
        sourceKey: 'id'
    })

export default Project