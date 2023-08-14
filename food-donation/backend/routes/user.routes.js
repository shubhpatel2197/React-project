import { Router } from 'express';
import multer from 'multer';
import sharp from 'sharp';
import User from '../models/user.js';

const router = Router();

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.put("/update", async (req, res) => {
    const { id, name, number, email } = req.body;

    try {
        // Find the user by ID and update the profile fields
        const user = await User.findByIdAndUpdate(id, { name, number, email }, { new: true });
        console.log(user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the updated user object
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// const upload = multer({
//     // dest:'avatars',
//     limits:{
//         fileSize: 10000000//10 mb
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(png|jpeg|jpg)$/)){
//             return cb(new Error('must be photo'))
//         }

//         cb(undefined,true)
//     }
// })


// router.post('/avatar',upload.single('avatar'),
// async(req,res)=>{
//     const buffer = await sharp(req.file).resize({width:250,height:250}).png().toBuffer()
//     req.file = buffer

//     res.send()
// },(error,req,res,next)=>{
//     res.status(404).send({error:error.message})
// })

export default router;
