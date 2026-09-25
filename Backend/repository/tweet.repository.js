import Tweet from "../models/tweet.model.js";
import CrudRepository from "./crud.repository.js";

class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet)
    }

   

}
export default TweetRepository