import Project from '../models/Project'

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll()
        res.json({
            data: projects
        })
    } catch(err) {
        console.log(err)
    }
}

export async function createProject(req, res) {
    const { name, priority, description, delivery_date } = req.body
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            delivery_date 
        }, {
            fields: ['name', 'priority', 'description', 'delivery_date']
        })
        if (newProject) {
            return res.json({
                message: 'Project created successfully',
                data: newProject
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

export async function getOneProject(req, res) {
    const { id } = req.params
    const project = await Project.findOne({
        where: {
            id
        }
    })
    res.json(project)
}

export async function deleteProject(req, res) {
    const { id } = req.params
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    })
    res.json({
        message: 'Project deleted successfully',
        count: deleteRowCount
    })
}

export async function updateProject(req, res) {
    const { id } = req.params
    const { name, priority, description, delivery_date } = req.body
    const projects = await Project.findAll({
        attributes: ['id', 'priority', 'description', 'delivery_date'],
        where: {
            id
        }
    })
    if (projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                delivery_date
            })
        })
    }
    return res.json({
        message: 'Updated successfully',
        data: projects
    })
}