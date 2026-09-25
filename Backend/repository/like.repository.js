import Like from "../models/like";
import CrudRepository from "./crud.repository";

class likeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }
    
    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch(error) {
            throw error;
        }
    }

}

export default likeRepository;