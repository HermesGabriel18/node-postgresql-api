"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Projects = require("../controllers/Projects.Controller");

var router = (0, _express.Router)();
router.post('/', _Projects.createProject);
router.get('/', _Projects.getProjects);
router.get('/:id', _Projects.getOneProject);
router["delete"]('/:id', _Projects.deleteProject);
router.put('/:id', _Projects.updateProject);
var _default = router;
exports["default"] = _default;