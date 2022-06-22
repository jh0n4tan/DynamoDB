const { dynamoClient,TABLE_NAME } = require('../db/dynamoCN');

const getUsers = async( req,res )=>{
    const params = {
        TableName:TABLE_NAME
    }
    const response = await dynamoClient.scan(params).promise();
    
    return res.status(200).json(response);
}

const getUserByID = async ( req,res )=>{

    const id = String(req.params.id);

    if(!id) return res.status(400).json({ msg : "Please, send an id valid!!"});

    const params = {
        TableName:TABLE_NAME,
        Key:{
            id
        }
    }
    
    const response =  await dynamoClient.get(params).promise();
    return res.status(200).json(response);
}

const addorUpdateUser = async( req,res )=>{

    const user = req.body;
    
     const params = {
        TableName:TABLE_NAME,
        Item:user
    }

    try {
        await dynamoClient.put(params).promise();
        return res.status(200).json({
            status:"correct",
            msg:"record saved correctly"
        });
    } catch (error) {
        return res.status(400).json({ error });
    }
}

const deletetUser = async ( req,res )=>{

    const { id } = req.body;

    const params = {
        TableName:TABLE_NAME,
        Key:{
            id
        }
    }

    try {
        await dynamoClient.delete(params).promise();
        return res.status(200).json({
            status:"correct",
            msg:"record deleted correctly"
        });
    } catch (error) {
        return res.status(400).json({ error });
    }    
}

module.exports = {
    getUsers,
    addorUpdateUser,
    getUserByID,
    deletetUser
}
