const feedbackmodel=require('../Models/feedbackmodel');
exports.feedback=async function(req,res)
{
    console.log("hello yo")
    const {
        name,
        email,
        message
       
      } = req.body;
      try {
        const userexit = await feedbackmodel.findOne({
          email: email
        });
        const username = await feedbackmodel.findOne({
          name: name
        });
        if (userexit && username) {
          return res.status(422).json({
            error: "email & name is exits"
          });
        } else {
          console.log("create new suggestion");
          const object = new feedbackmodel({
            name,
            email,
            message,
           
          });
          //  hasing of password before save
          await object.save();
 
          return res.status(200).json({
            message: "register sucessfully"
            
          });
        }
      } catch (err) {
        console.log(err);
      }
     
}