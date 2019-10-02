"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Tasks = require("../controllers/Tasks.Controller");

var router = (0, _express.Router)();
router.post('/', _Tasks.createTask);
router.get('/', _Tasks.getTasks);
router.get('/:id', _Tasks.getOneTask);
router["delete"]('/:id', _Tasks.deleteTask);
router.put('/:id', _Tasks.updateTask);
router.get('/project/:project_id', _Tasks.getTasksByProject);
var _default = router;
exports["default"] = _default;