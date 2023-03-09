const router=require('express').Router();
const user_controller=require('../Controller/user.js')
const admin_controller=require('../Controller/admin.js')
const recuter_controller=require('../Controller/recuter.js')
const feedback_controller=require('../Controller/feedback.js')
const like_controller=require('../Controller/like.js')
console.log("hello ji")
router.post("/signup",user_controller.register);
router.post("/login",user_controller.auth);
router.post("/updatedata",user_controller.update);
router.get("/admin",admin_controller.adminview);
router.get("/vrecuter",recuter_controller.recuterview);
router.post("/recuter",recuter_controller.recuter);
router.post("/feedback",feedback_controller.feedback);
router.post("/adminadd",admin_controller.adminadd);
router.post("/adminupdate",admin_controller.adminedit);
router.delete("/admindelete",admin_controller.admindelete);
router.post("/like",like_controller.like);
router.post("/dislike",like_controller.dislike);
// router.post("/admin",adminroute.admin)
module.exports=router;