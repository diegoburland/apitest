import { Request, Response, Router} from 'express';
import TagModel from '../models/tagModel';
import moment from 'moment';


class TagRoutes {
    router:Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    async all(req:Request, res:Response){
        const tags = await TagModel.find();
        res.json(tags);
    }

    async getById(req:Request, res:Response){
        const id = req.params.id;
        const tag = await TagModel.findById(id);
        res.json(tag);
    }

    async create(req:Request, res:Response){
        const {name, hexadecimal} = req.body;
        const now = moment().format();
        const newTag = new TagModel({name, hexadecimal, createdAt: now, updatedAt: now});
        const tagInserted = await newTag.save();
        res.json({data: tagInserted});
    }

    async update(req:Request, res:Response){
        console.log(req.params.id);
        console.log(req.body);
        // TagModel.findByIdAndUpdate();

    }

    async delete(){

    }

    routes(){
        this.router.get('', this.all);
        this.router.get('/:id', this.getById);
        this.router.post('', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);

    }
}

const tagRoutes = new TagRoutes();
export default tagRoutes.router;