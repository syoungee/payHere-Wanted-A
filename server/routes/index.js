const express = require("express");
const signUP = require("./auth/signUp");
const login = require("./auth/login");
const token = require("./auth/token");

const router = express.Router();

const create = require('./accountBook/create.js');
const modify = require('./accountBook/modify.js');
const remove = require('./accountBook/remove.js');
const list = require("./accountBook/list");
const deletedList = require("./accountBook/deletedList");
const restore = require("./accountBook/restore");
const detail = require("./accountBook/detail");

router.use("/accountBook/list", list);
router.use("/accountBook/deletedList", deletedList);
router.use("/accountBook/restore", restore);
router.use("/accountBook/detail", detail);

// 가계부 생성
router.use("/accountBook/createAction", create);

// 가계부 수정
router.use("/accountBook/updateAction", modify);

// 가계부 삭제 (to 삭제 리스트)
router.use("/accountBook/delete", remove);

module.exports = router;
router.use("/auth", signUP);
router.use("/auth", login);
router.use("/auth", token);

module.exports = router;
