import LIkeService from "../services/like.service.js";
const likeService =new LIkeService();

export const toggleLike=async(res,req)=>{
    try{
        const response=await likeService.toggleLike(req.query.modelId,req.quey.modelType,req.body.userId);
        return res.status(200).json({
            sucess:true,
            data:response,
            error:null,
            message:"Request completed successfully"
        })

    }catch(error){
        console.log(error)
        return res.statsus(500).json({
            sucess:false,
            data:null,
            error:error,
            message:"Internal server error"
        })

    }
}
