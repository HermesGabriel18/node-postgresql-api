import Task from '../models/Task'

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'project_id'],
            order: [
                ['id', 'DESC']
            ]
        })
        res.json(tasks)
    } catch(err) {
        console.log(err)
    }
}

export async function createTask(req, res) {
    const { name, done, project_id } = req.body
    try {
        let newTask = await Task.create({
            name,
            done,
            project_id
        }, {
            fields: ['name', 'done', 'project_id']
        })
        if (newTask) {
            return res.json({
                message: 'Task created successfully',
                data: newTask
            })
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        })
    }
}

export async function getOneTask(req, res) {
    const { id } = req.params
    try{const task = await Task.findOne({
        attributes: ['id', 'name', 'done', 'project_id'],
        where: {
            id
        }
    })
    res.json(task)}catch(e){console.log(e)}
}

export async function deleteTask(req, res) {
    const { id } = req.params
    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    })
    res.json({
        message: 'Task deleted successfully',
        count: deleteRowCount
    })
}

export async function updateTask(req, res) {
    const { id } = req.params
    const { name, done, project_id } = req.body
    const task = await Task.findOne({
        attributes: ['id', 'name', 'done', 'project_id'],
        where: {
            id
        }
    })
    const updatedTask = await task.update({
        name,
        done,
        project_id
    }, {
        where: {
            id
        }
    })
    return res.json({
        message: 'Updated successfully',
        data: updatedTask
    })
}

export async function getTasksByProject(req, res) {
    const { project_id } = req.params
    const tasks = await Task.findAll({
        attributes: ['id', 'project_id', 'name', 'done'],
        where: { project_id }
    })
    res.json({tasks})
}