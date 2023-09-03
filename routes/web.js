import express from "express";
const router = express.Router();

import {homeController} from '../controllers/homeController.js'
import { serviceController } from "../controllers/servicsController.js";
import { contactController } from "../controllers/contactController.js";
import { skillController } from "../controllers/skillContoroller.js";

router.get('/', homeController);
router.get('/contact', contactController);
router.get('/service', serviceController);
router.get('/skill', skillController);

export default router