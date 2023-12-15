import asyncHandler from 'express-async-handler'
import Projects from "../models/projectsModel.js";

const getAllProjects = asyncHandler(async (req, res) => {
  const project = await Projects.find()
  res.status(200).json(project)
})

const addProject = asyncHandler(async (req, res) => {
  const { name, sector, type, desc, tech, imageLink, link } = req.body

  await Projects.create({
    name,
    sector,
    type,
    desc,
    tech,
    imageLink,
    link
  })

  res.status(201).json({
    status: "Ok",
    message: "Project successfully added"
  })
})

const updateProject = asyncHandler(async (req, res) => {
  const project = await Projects.findById(req.params.id)

  if (project) {
    project.name = req.body.name || project.name;
    project.sector = req.body.sector || project.sector;
    project.type = req.body.type || project.type;
    project.desc = req.body.desc || project.desc;
    project.tech = req.body.tech || project.tech;
    project.imageLink = req.body.imageLink || project.imageLink;
    project.link = req.body.link || project.link;

    await project.save();

    res.status(200).json({
      status: "Ok",
      message: "Project successfully updated"
    })
  } else {
    res.status(404);
    throw new Error('Project not found');
  }
})

export {
  getAllProjects,
  addProject,
  updateProject
}