const User = require('../Models/usermodel');
const registermodel=require('../Models/usermodel');
exports.adminview=async function (req,res) {
    // console.log("Admin");
    try {
        // const userdata = await (await registermodel.find({}));
        const userdata = await registermodel.find({});
        return res.status(201).json(userdata);
        console.log(userdata);
      } catch (err) {
        console.log(err);
        
      }
}
exports.adminadd= async function (req, res)  {
  try {
    const item = new User({ name: req.body.name,email:req.body.email,number: req.body.number });
    await item.save();
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.admindelete= async function (req, res) {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.adminedit= async function (req, res)  {
  try {
    await registermodel.findOneAndUpdate({ user_id: req.body.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            
        }
    }, {
        new: true
    });
    const now = await registermodel.findOne({
        user_id: req.body.id
    });
    console.log(now);
    return res.status(400).json(now)
} catch (err) {
    console.log(err);
    }

};





